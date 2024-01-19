---
title: Manifest
slug: manifest
---

# Manifest

Vite creates a build manifest of the client build for use when server rendering. It lists entry points and assets consumed by those entry points, which can be useful for adding modulepreload headers and script or css tags to the server rendered HTML page.

You can import the manifest from `#vono/manifest`. Since Vite doesn't bundle dependencies during development, it will only have knowledge of the entry point itself but not of it's dependencies. During production, it will have a list of all dependencies it finds during the build process.

### Example Usage
```typescript
import mainfest from "#vono/mainfest"

const script = "<script type='module' src='${manifest["src/main.tsx"].file}' ></script>"
const assets = mainfest["src/main.tsx"].css.map(css => "<link rel='stylesheet' src='${css}'></link>")
```