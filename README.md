# TanStack Start on Bun

Example [TanStack Start](https://tanstack.com/start) app running on [Bun](https://bun.sh/). TanStack Start is a full-stack React framework built on TanStack Router. Bun is a fast all-in-one JavaScript runtime and package manager compatible with Node.js.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Static site — Railpack build |
| Single-page application (SPA) | off |
| Project directory | `/` |
| Output directory | `/dist/client` |
| Install command | leave empty |
| Build command | leave empty |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# install dependencies
bun install

# run in development mode
bun run dev

# build for production
bun run build

# preview the built static version
bun run preview
```
