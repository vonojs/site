---
title: Quickstart
slug: quickstart
---

# Quickstart

Adding Vono to a Vite project is super simple

### Install `@vonojs/vono` and add the plugin to your Vite config.
```typescript
---
title: vite.config.ts
---
import { defineConfig } from "vite"
import vono from "@vonojs/vono"

export default defineConfig({
	plugins: [vono()]
})
```

### Create a server directory and hono app
```typescript
---
title: server/index.ts
---
import { Hono } from "hono"

const server = new Hono()
  .get("/ping", c => c.text("pong))

export default server
```
It's crucial to export your hono app as a default export.

### Update your build script

You'll need to append `vite build --ssr` to your package.json's build script.

```json
---
title: package.json
---
{
	"scripts": {
		"build": "vite build && vite build --ssr"
	}
}
```

### Add types (optional)

Add `/// <reference types=".vono" /> ` to your vite-env.d.ts file (or any d.ts file).