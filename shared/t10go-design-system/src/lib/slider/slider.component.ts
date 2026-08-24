import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextSliderId = 0;

/**
 * A theme-aware numeric range control.
 *
 * Supports both `[(value)]` binding and Angular forms.
 */
@Component({
  selector: 't10go-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => T10goSliderComponent),
      multi: true,
    },
  ],
})
export class T10goSliderComponent implements ControlValueAccessor {
  private readonly generatedId = `t10go-slider-${nextSliderId++}`;
  private readonly formDisabled = signal(false);

  /** The current numeric value. Supports two-way binding with `[(value)]`. */
  readonly value = model(0);
  readonly min = input(0);
  readonly max = input(100);
  readonly step = input(1);
  readonly disabled = input(false);
  readonly label = input<string>();
  readonly ariaLabel = input<string>();
  readonly id = input<string>();
  readonly name = input<string>();
  readonly required = input(false);
  readonly showValue = input(false);
  readonly valueFormatter = input<(value: number) => string>();

  protected readonly controlId = computed(() => this.id() ?? this.generatedId);
  protected readonly isDisabled = computed(
    () => this.disabled() || this.formDisabled(),
  );
  protected readonly displayedValue = computed(() => {
    const value = this.value();
    return this.valueFormatter()?.(value) ?? String(value);
  });

  private onChange: (value: number) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  protected updateValue(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;

    if (Number.isNaN(value)) {
      return;
    }

    this.value.set(value);
    this.onChange(value);
  }

  protected markTouched(): void {
    this.onTouched();
  }

  writeValue(value: number | null): void {
    if (typeof value === 'number' && Number.isFinite(value)) {
      this.value.set(value);
    }
  }

  registerOnChange(onChange: (value: number) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }
}
