---
title: Hono RPC
slug: rpc
---

# RPC

Hono provides a typesafe RPC client that Vono extends with server-side functionality. It can be used to make requests to the server from either the server or client - requests from the server don't create an additional request, and instead directly hit the Hono handler.

## Usage

```typescript
import rpc from `#vono/rpc`

const req = await rpc.my.route.$get()
const data = req.json()
```
