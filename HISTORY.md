# T10GO Managing Hub — Technical History

This is a decision log, not a release changelog. Add an entry when a change affects architecture, a shared component contract, configuration, or behavior future developers might otherwise undo.

## Entry format

```md
## YYYY-MM-DD — Decision title

**Decision:** What is now true.
**Reason:** Why it was chosen.
**Impact:** Affected files, constraints, and follow-up work.
```

## 2026-08-24 — Documentation and decision log established

**Decision:** This repository uses a project-specific README and this durable history file.

**Reason:** The prior README was the generic Nx starter documentation and did not describe the actual shell architecture.

**Impact:** Update this file whenever a shared contract or architecture decision changes.

## 2026-08-24 — Reusable design-system navigation and user menu

**Decision:** Sidebar navigation and context-menu behavior live in `shared/t10go-design-system`; the shell supplies navigation data and product-specific menu content.

**Reason:** They are reusable layout controls, not shell-specific business features.

**Impact:** `T10goSidebarComponent` preserves the fixed rail, hover/focus overlay expansion, and independent vertical submenu state. Do not reimplement navigation rendering in the shell.

## 2026-08-24 — Global layout dimensions

**Decision:** Header and sidebar dimensions use global CSS custom properties:

```css
--app-header-height: 45px;
--app-sidebar-collapsed-width: 45px;
--app-sidebar-expanded-width: 280px;
```

**Reason:** Header/sidebar offsets must remain aligned anywhere they are used.

**Impact:** Content reserves the collapsed sidebar width. Expansion overlays content rather than shrinking it. Use variables, not literal dimensions.

## 2026-08-24 — Floating rounded layout surfaces

**Decision:** The header uses rounded lower corners, and the sidebar is a vertically centered, rounded floating rail on the left.

**Reason:** The shell uses a softer, floating desktop-surface visual language.

**Impact:** `--app-layout-edge-space`, `--app-layout-floating-radius`, and `--app-sidebar-content-offset` are the shared tokens for this treatment. New floating surfaces should use these tokens rather than introducing unrelated edge spacing or radii.

## 2026-08-24 — Shared input foundation and theme dropdown

**Decision:** `T10goInputBase<T>` and `T10goFieldComponent` are the foundation for reusable single-value controls. The header theme choice uses `T10goDropdownComponent` with `system`, `light`, and `dark` options.

**Reason:** Controls need common form behavior and theme mode is a discrete choice, not a numeric range.

**Impact:** New text, number, and autocomplete controls should extend the base and use the field shell. Multi-select remains a dedicated future component. `ThemeService` remains the only owner of persistence and DOM theme application.

## Existing decision — Native Federation dynamic host

**Decision:** The shell uses `@angular-architects/native-federation` and initializes federation before Angular bootstrap.

**Reason:** T10GO is designed to load independently developed Angular applications through a shell.

**Impact:** Do not migrate federation architecture or modify sharing configuration without a concrete requirement and integration validation.

## Existing decision — Federation manifest requires verification before activation

**Decision:** `apps/shell/public/config/manifest.json` is the intended wedding-manager remote contract.

**Reason:** It centralizes remote routes, exposes, navigation, and slots.

**Impact:** The checked-in shell does not currently load this manifest during `initFederation`, and the local remote source may not expose every manifest entry. Verify the deployed remote’s `remoteEntry.json` and align both repositories before enabling or changing dynamic route/slot loading.
