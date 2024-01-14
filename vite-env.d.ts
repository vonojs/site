/// <reference types="vite/client" />
/// <reference types=".vono" />
/// <reference types="@gaiiaa/content/types" />

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
