<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

<!-- nx configuration end-->

## T10GO Managing Hub context

- This repository is the shell workspace; `../T10GO.WeddingManager.Angular` is the wedding-manager remote workspace.
- Preserve the working Angular Native Federation setup. `apps/shell/src/main.ts` loads the manifest and initializes federation before Angular bootstrap.
- The pre-federation path (`main.ts` and `federation.ts`) must not statically import Angular or workspace libraries; bootstrap Angular only through the existing dynamic import after `initFederation` completes.
- Do not replace Native Federation, alter sharing settings, or casually modify `apps/shell/public/config/manifest.json`.
- `@lengi21/t10go-design-system` owns reusable controls, form foundations, theme tokens, sidebar navigation, and context-menu primitives. Shell code composes these primitives rather than duplicating them; make shared changes in `../T10GO.Shared.Angular` and release a new package version.
- The sidebar is fixed left: content reserves its collapsed width and hover/focus expansion overlays content. Nested navigation expansion is independent per item.
- Wedding Manager owns its exposed `WEDDING_MANAGER_ROUTES` and `WEDDING_MANAGER_NAVIGATION_ITEMS`; the shell owns the Weddings parent item and shared sidebar rendering. Keep both remote exposures aligned when adding a Wedding Manager feature route.
- Use `--app-header-height`, `--app-sidebar-collapsed-width`, `--app-sidebar-expanded-width`, `--app-layout-edge-space`, `--app-layout-floating-radius`, and `--app-sidebar-content-offset` for layout. Do not add duplicate hard-coded values.
- The header has rounded lower corners and the sidebar is a vertically centered floating rail. Reuse this visual language and its tokens for future floating layout surfaces.
- New single-value inputs extend `T10goInputBase<T>` and use `T10goFieldComponent`. Build multi-select independently when needed.
- Record durable decisions in `HISTORY.md` and update `README.md` when the architecture, commands, or project structure changes.
