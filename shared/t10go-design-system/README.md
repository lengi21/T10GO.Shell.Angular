# T10GO design system

Shared, theme-aware standalone Angular components and services for T10GO applications.

## Slider

`T10goSliderComponent` is a numeric range control with native keyboard and screen-reader support. It supports both Angular forms and signal two-way binding.

```ts
import { T10goSliderComponent } from '@t10go-design-system';
```

```html
<t10go-slider
  label="Theme intensity"
  [(value)]="intensity"
  [min]="0"
  [max]="100"
  [step]="5"
  [showValue]="true"
/>
```

Inputs: `value`, `min`, `max`, `step`, `disabled`, `label`, `ariaLabel`, `id`, `name`, `required`, `showValue`, and `valueFormatter`.

For a form control, use `formControlName` or `[(ngModel)]`. Consumers can customize the component through `--t10go-slider-track-color`, `--t10go-slider-fill-color`, `--t10go-slider-thumb-color`, `--t10go-slider-focus-color`, and `--t10go-slider-disabled-opacity`.

## Form foundation and dropdown

`T10goInputBase` centralizes single-value Angular form integration, disabled state, generated IDs, names, required state, and two-way `value` binding. New controls should extend it instead of implementing `ControlValueAccessor` independently.

`T10goFieldComponent` is the shared visual field shell for labels, hints, required indicators, and error messages. `T10goDropdownComponent` is the first control built on these foundations.

```html
<t10go-dropdown
  label="Theme"
  [options]="themeOptions"
  [(value)]="theme"
/>
```

Dropdown options use `{ value, label, disabled? }`. For async single-select data, provide an `optionsLoader` function returning `Promise<readonly T10goDropdownOption[]>`; `reloadOptions()` is available for explicit refreshes. Multi-select remains a separate future component.

## Navigation

`T10goSidebarComponent` renders a fixed, hover/focus-expanded sidebar. Pass it a tree of `T10goNavigationItem` values; any item with children has its own vertical expand/collapse state.

```html
<t10go-sidebar [items]="navigationItems" ariaLabel="Main navigation" />
```

It uses Material Icon font names when an item has an `icon` value. Consumers can override `--t10go-sidebar-collapsed-width` and `--t10go-sidebar-expanded-width`.

## Context menu

`T10goContextMenuComponent` provides an accessible dismissal behavior for projected trigger and panel content. It closes on outside click and Escape.

```html
<t10go-context-menu #menu>
  <button t10goContextMenuTrigger [attr.aria-expanded]="menu.isOpen()">Options</button>
  <div t10goContextMenuContent>Menu content</div>
</t10go-context-menu>
```
