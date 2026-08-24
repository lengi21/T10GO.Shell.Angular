# T10GO Managing Hub — Shell

The T10GO Managing Hub shell provides shared layout, runtime configuration, a reusable design system, and the Native Federation host for T10GO product applications.

This is the shell workspace. The `wedding-manager` remote is in the sibling repository `../T10GO.WeddingManager.Angular`.

## Technology

- Angular 22.1, Nx 23.1, TypeScript 6.0, pnpm
- `@angular-architects/native-federation`
- Angular standalone components and signals

## Commands

Install dependencies, then run Nx targets through pnpm:

```bash
pnpm install
pnpm nx serve shell
pnpm nx build shell
pnpm nx lint shell
```

The shell runs on port `4200`. Federation configuration is in `apps/shell/federation.config.mjs`.

## Structure

```text
apps/shell/                    Shell composition, routes, and runtime assets
node_modules/@lengi21/...      Published shared UI, configuration, and federation packages
shared/t10go-icons/            T10GO SVG icon assets
packages/                      Existing Nx starter libraries; assess before extending
HISTORY.md                     Technical decision log
AGENTS.md                      Guidance for future coding agents
```

## Architecture

### Federation

The shell is a Native Federation dynamic host. `apps/shell/src/main.ts` loads the federation manifest and initializes federation before Angular bootstraps; preserve that order.

The pre-federation path (`main.ts` and `federation.ts`) must not statically import Angular or workspace libraries. Native Federation must establish the import map before Angular is dynamically imported by `bootstrap.ts`.

`apps/shell/public/config/manifest.json` describes the wedding-manager remote contract. `developmentEntry` targets `http://localhost:4201/remoteEntry.json`; `entry` targets the deployed remote. The shell loads the remote `./routes` exposure under `/wedding` and the remote `./navigation` exposure for Wedding Manager child navigation. Do not replace Native Federation or alter sharing settings casually.

### Layout and navigation

`AppShell` composes the header, sidebar, and router outlet. The reusable sidebar is fixed on the left: content reserves its collapsed width, while hover/focus expansion overlays content. Each item with children owns its own vertical expansion state.

Use the global layout variables exported by `@lengi21/t10go-design-system`:

```css
--app-header-height: 45px;
--app-sidebar-collapsed-width: 45px;
--app-sidebar-expanded-width: 280px;
--app-layout-edge-space: var(--app-space-3);
--app-layout-floating-radius: var(--app-radius-xl);
--app-sidebar-content-offset: calc(...);
```

The header has rounded lower corners. The sidebar is a rounded, vertically centered floating rail on the left. Content uses `--app-sidebar-content-offset` so the collapsed rail and its outer gutter never cover page content.

### Theme and user menu

`ThemeService` owns the `system`, `light`, and `dark` modes. It persists the preference and applies the resolved mode to the document. The user menu uses design-system context-menu and dropdown components; its Settings link targets `/settings`.

### Remote-owned Wedding Manager navigation

The shell owns the `Weddings` parent item and the shared sidebar rendering. Wedding Manager owns and exposes its child item list and routes. The shell dynamically loads `WEDDING_MANAGER_NAVIGATION_ITEMS` from `./navigation` and inserts it beneath Weddings. Clicking Weddings navigates to `/wedding` and expands its loaded child list.

When adding a Wedding Manager route, update both its exposed `WEDDING_MANAGER_ROUTES` and its exposed `WEDDING_MANAGER_NAVIGATION_ITEMS` in the remote repository.

### Design system

The public API is exported by `@lengi21/t10go-design-system`. Current reusable primitives include:

- `ThemeService`
- `T10goSidebarComponent` and `T10goNavigationItem`
- `T10goContextMenuComponent`
- `T10goInputBase<T>` and `T10goFieldComponent`
- `T10goSliderComponent`
- `T10goDropdownComponent` and `T10goDropdownOption`

New text, number, autocomplete, and other single-value controls should extend `T10goInputBase<T>` and use `T10goFieldComponent`. Multi-select remains a separate future control. Package source and release instructions live in `../T10GO.Shared.Angular`.

## Change rules

1. Inspect `git status` and `git diff` before modifying a feature.
2. Preserve the working federation and sidebar behavior unless the task explicitly changes it.
3. Put reusable controls, form behavior, and theme tokens in `@lengi21/t10go-design-system`; keep shell code focused on app composition.
4. Add durable technical decisions to [HISTORY.md](HISTORY.md).
5. When validation is requested and dependencies are available, use the smallest relevant Nx target.

## Documentation

- [HISTORY.md](HISTORY.md): decisions and constraints that matter beyond individual commits
- [AGENTS.md](AGENTS.md): future-agent guardrails
- [Shared package README](../T10GO.Shared.Angular/README.md): reusable component API and release workflow
