# Quickstart

Hello friend! Welcome to the Vono docs. I promise using Vono is about the simplest thing you'll ever do in todays world of web development.

First, install `@vonojs/vono` and add the plugin to your Vite config. Then create a [Hono](https://hono.dev) app in `server/index.{js/ts/jsx/tsx}`. Lastly, update your build script your package.json file to also build the server.

#### Create a Hono app

```typescript
---
title: server/index.ts
---
import { Hono } from "hono"

const app = new Hono()
  .get("/ping", c => c.text("pong))

export default app
```
It's crucial to export your Hono app as a default export.

#### Update your build script

You'll need to append `vite build --ssr` to your package.json's build script.
It should look like `vite build && vite build --ssr`.

#### Add types (optional)

Add `/// <reference types=".vono" /> ` to your vite-env.d.ts file (or any d.ts file).

# What is Vono?

Vono is a simple plugin to combine [Hono](https://hono.dev) and [Vite](https://vite.dev) to build full stack apps. If you're new here, Hono is a modern web server and Vite is a modern Javascript build pipeline. Together you can use them to build Javascript applications with an interactive front-end client and a fully featured backend server.

#### Why?

Although modern Javascript frameworks come with many convienences, they don't give the developer full control over the server and client. They often have specific rules about how to structure your client app and it's build output, including what UI library you can use, the way routing works, and even sometimes your folder structure. And they all abstract the server down to a simple serverless request-response cycle, with no support for long running instances, web sockets, etc.

In contrast, Vono exists to provide the developer with a bare-metal server that can be dropped into existing Vite projects to provide a backend without any opinions on how your project is structured. The developer has a blank canvas to work with, and the plumbing of building and deployment is mostly taken care of.

#### Disclamer 

While this can be very useful, it's not always the right choice. If you don't really know what you need Vono for it's probably best to star the repo ;) and look into existing Javascript frameworks. Because Vono is *not* a Framework, developers often need to implement features like Server Side Rendering, code splitting, and routing themselves. Thankfully none of these features are very difficult to build in 2024 and the result can be a focused, simple, and powerful tool.

# Vono Features

Vono comes with a couple features that would otherwise be a pain to build yourself for each project. 

### RPC

Hono comes with a built-in [RPC client](https://hono.dev/guides/rpc) that provides a light-weight, typesafe way to make requests to the Hono server. Vono takes care of manually wiring up the types and directly routes requests made on the server to the Hono app without an additional request.

To use, simply `import rpc from "#vono/rpc";` and follow the [Hono docs](https://hono.dev/guides/rpc).

### Manifest

Vite generates a build manifest that contains a list of each entry point and the assets each entry point imports, including dynamic imports, CSS, and other assets. This is useful for server rendering as you need a way to import an entry point's build output in a server app, as well as it's css and other imports. 

To use, simply `import manifest from "#vono/manifest";` and follow the [Vite docs](https://vitejs.dev/guide/backend-integration.html#backend-integration).

In development a full list of assets cannot be generated because Vite does not bundle and thus does not walk the import graph. Because of this, only entry files are provided in the manifest during development but this should be enough to run your app.

# Deployment

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

#### Usage

To install an adaptor, simply add it to your Vono config.

```typescript
---
title: vite.config.ts
---
import { defineConfig } from "vite"
import vono from "@vonojs/vono"
import cloudflare from "@vonojs/vono/adaptors"

export default defineConfig({
  plugins: [vono({ adaptors: cloudflare() })]
})
```

Don't forget to append `vite build --ssr` to your package.json build script in order to build the server as well.

Each adaptor generates a slightly different output compatable with the hosting provider. If you want more control over the output you can either [extend an existing adaptor](#custom-adapters) or create your own Vite plugin that runs after build and transforms the build directory.

#### Previews

Since the build output is different from what Vite expects, you cannot use it to preview your built app. Instead use your chosen provider's CLI to run the app. For example, a Cloudflare Worker project can be ran by `cd`'ing into the `cloudflare` directory and running `npx wrangler dev`. Check out your provider's documentation for steps on running code.

# Advanced

#### VFS

Vono creates an internal virtual filesystem which can be accessed using `useVFS` from  `@vonojs/vono`. The server you create at `server/index` can be imported from `#vono/internal/server.entry`, although it's reccomended that extending Vono happens inside of `server/index` rather than through opague modifications to Vono's internals. We won't judge you however.

#### Build tips

Building a Node project for various non-node adaptors comes with some challenges. Hono is compatable with almost all edge runtimes as well as Deno, Bun, and Node (via Hono's node-server), but that doesn't mean *your* code will be. Building and testing often can help avoid nasty suprises, as well as choosing modern ES6 packages and libraries. You can also provide polyfills and excludes in your Vite config if necessary, although this should be rare. 

#### Custom Adapters

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