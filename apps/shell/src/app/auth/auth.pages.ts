import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { T10GO_AUTH_CONFIG, T10goAuthConfig, T10goAuthSession } from '@lengi21/t10go-auth-client';
import { T10goButtonComponent, T10goCardComponent, T10goTextInputComponent } from '@lengi21/t10go-design-system';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth-page',
  imports: [T10goButtonComponent, T10goCardComponent, T10goTextInputComponent],
  templateUrl: './auth.pages.html',
  styleUrl: './auth.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPage {
  private readonly route = inject(ActivatedRoute);
  private readonly session = inject(T10goAuthSession);
  private readonly config = inject<T10goAuthConfig>(T10GO_AUTH_CONFIG);

  protected readonly mode = (this.route.snapshot.data['mode'] as AuthMode) ?? 'login';
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly busy = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly confirmationUrl = signal<string | null>(null);
  protected readonly title = computed(() => this.mode === 'login' ? 'Welcome back' : 'Create your account');
  protected readonly submitLabel = computed(() => this.mode === 'login' ? 'Sign in' : 'Create account');

  protected async submit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    this.busy.set(true);
    this.error.set(null);
    try {
      if (this.mode === 'login') {
        await this.session.login(this.email(), this.password());
        window.location.assign(this.returnUrl());
      } else {
        const result = await this.session.register(this.email(), this.password());
        this.confirmationUrl.set(result.developmentConfirmationUrl ?? null);
      }
    } catch (error: unknown) {
      this.error.set(readError(error, this.mode === 'login' ? 'Unable to sign in.' : 'Unable to create your account.'));
    } finally {
      this.busy.set(false);
    }
  }

  protected async signInWithGoogle(): Promise<void> {
    this.busy.set(true);
    this.error.set(null);
    try {
      await this.session.beginGoogleSignIn(this.callbackUrl());
    } catch (error: unknown) {
      this.error.set(readError(error, 'Unable to start Google sign-in.'));
      this.busy.set(false);
    }
  }

  protected switchUrl(): string {
    const path = this.mode === 'login' ? '/auth/register' : '/auth/login';
    return `${path}?${new URLSearchParams({ returnUrl: this.returnUrl() })}`;
  }

  private callbackUrl(): string {
    return `${this.config.shellUrl}/auth/callback?${new URLSearchParams({ returnUrl: this.returnUrl() })}`;
  }

  private returnUrl(): string {
    const requested = this.route.snapshot.queryParamMap.get('returnUrl');
    try {
      const candidate = new URL(requested ?? '/wedding/dashboard', this.config.shellUrl);
      return candidate.origin === this.config.shellUrl ? candidate.toString() : `${this.config.shellUrl}/wedding/dashboard`;
    } catch {
      return `${this.config.shellUrl}/wedding/dashboard`;
    }
  }
}

@Component({
  selector: 'app-auth-callback',
  imports: [T10goCardComponent],
  template: `<main class="auth-page"><t10go-card class="auth-card"><p>Completing secure sign-in…</p></t10go-card></main>`,
  styleUrl: './auth.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthCallbackPage {
  private readonly route = inject(ActivatedRoute);
  private readonly session = inject(T10goAuthSession);
  private readonly config = inject<T10goAuthConfig>(T10GO_AUTH_CONFIG);

  constructor() {
    void this.complete();
  }

  private async complete(): Promise<void> {
    const code = this.route.snapshot.queryParamMap.get('code');
    if (!code) {
      window.location.assign(`${this.config.shellUrl}/auth/login`);
      return;
    }
    try {
      await this.session.completeGoogleSignIn(code);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      window.location.assign(new URL(returnUrl ?? '/wedding/dashboard', this.config.shellUrl).toString());
    } catch {
      window.location.assign(`${this.config.shellUrl}/auth/login`);
    }
  }
}

@Component({
  selector: 'app-auth-confirmation',
  imports: [T10goCardComponent],
  template: `<main class="auth-page"><t10go-card class="auth-card"><h1>Email confirmed</h1><p>Your account is ready. You can now sign in.</p><a class="auth-link" href="/auth/login">Go to sign in</a></t10go-card></main>`,
  styleUrl: './auth.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthConfirmationPage {}

function readError(error: unknown, fallback: string): string {
  return error instanceof Error && error.message ? error.message : fallback;
}
