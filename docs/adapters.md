---
title: Adapters
slug: adapters
---
# Adapters 

Adapters are used to transform the build output of a Vono project to something compatable with a hosting platform or provider. Each adapter builds a project slightly differently and its worth taking a peak into the build output folders to see how they work.

There are several built in adapters for Vono:
- Node
- Node Server (default)
- Cloudflare Worker
- Cloudflare Pages
- Netlify
- Vercel
- Bun
- Deno

These adapters can be imported from `@vonojs/vono/adapters`.

### Previews

Since the build output is different from what Vite expects, you cannot use it to preview your built app. Instead use your chosen provider's CLI to run the app. For example, a Cloudflare Worker project can be ran by `cd`'ing into the `cloudflare` directory and running `npx wrangler dev`.

- Cloudflare: `npx wrangler dev`
- Netlify: `npx netlify-cli dev`
- Vercel: `idk`
- Deno: `deno -A run entry.js`
- Bun: `bun run entry.js`
- Node-Server: `node entry`

## Custom Adapters

Custom adaptors can be built by satisfying the `Adapter` interface.

```typescript
type Adapter = {
  name: string;
  runtime: string; // path to runtime entry
  outDir: string; // dist
  serverDir: string; // dist/server
  publicDir: string; // dist/public
  entryName: string; // entry
  entryDir?: string;
  inlineDynamicImports?: boolean;
  env?: {
    alias?: Record<string, string>;
    external?: string[];
    inject?: Record<string, string | string[]>;
    polyfill?: string[];
  };
  onBuild?: () => void | Promise<void>; // runs after server build
};
```

The runtime entry is the actual entrypoint of your app at build. It can import the Hono app from the virtual file `#vono/internal/server.entry`. As an example, this is what the Netlify entry point looks like.

```typescript
import { Hono } from "hono";
import entry from "#vono/internal/server.entry";

const server = new Hono();
server.route("/", entry);

export default server.fetch;

export const prerenderHandler = server.fetch

export const config = {
  path: "/*",
  preferStatic: true,
};
```

The entry can export a `prerenderHandler` which is used by Vono to prerender routes provided in it's config. However this process runs in Node, so if your app relies on provider-specific features it may not work as expected.

You can extend an adaptor in the following way:

```typescript
const myCloudflareAdaptor = {
  ...cloudflare(),
  onBuild: async () => {
    await cloudflare().onBuild();
    // custom code here
  }
}
```