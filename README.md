# oklch-studio

[![gate](https://github.com/jamierthompson/oklch-studio/actions/workflows/gate.yml/badge.svg)](https://github.com/jamierthompson/oklch-studio/actions/workflows/gate.yml)

A palette tool being built around one idea: lightness is solved against a
measured contrast target, rather than stepped toward one and hoped over.

The scaffold and the gate are in place. The tool itself is not built yet.

## Stack

- **Vite** — dev server and production build, and the config Vitest reads too.
- **React** — the UI layer, for a surface that is a single interactive view.
- **TypeScript** — strict from the first file, with indexed reads and optional
  properties checked as well.
- **[colorjs.io](https://colorjs.io)** — every color operation: conversion,
  gamut mapping, and WCAG and APCA contrast.
- **Vitest** — unit and component tests, sharing Vite's config rather than
  maintaining a second one.

## Two decisions that shape the rest

**Vite rather than a framework.** The tool is one interactive surface — an
input, and cards that appear once it has a seed. There is nothing to
server-render but a shell, so a router and a server/client boundary would be
carried for no return.

**colorjs.io rather than hand-rolled color math.** It is the CSS Color 4
authors' implementation, and it ships WCAG and APCA contrast, spec-correct
gamut mapping and ΔEOK. Color math is easy to get subtly wrong and hard to
notice going wrong, so none of it is written by hand here.

## Running it

Node is pinned in `.nvmrc` and pnpm in `package.json`, so both come from the
repository rather than from whatever is installed.

```bash
git clone https://github.com/jamierthompson/oklch-studio.git
cd oklch-studio

nvm use          # Node 24.18.1, per .nvmrc
corepack enable  # provides the pnpm version pinned in package.json

pnpm install
pnpm dev
```

`pnpm dev` prints the URL it is serving on. It picks another port if the one it
wants is taken, so read the URL rather than assuming it.

To build and serve the production output instead:

```bash
pnpm build
pnpm preview
```

## The gate

These five run in CI, in this order, on every push to `main` and every pull
request. They are the same commands locally, so a green run here means a green
run there.

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Formatting is Prettier's job, never done by hand. `pnpm format` rewrites.

## License

[MIT](./LICENSE)
