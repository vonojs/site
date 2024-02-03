export function onMount(callback: () => void) {
  typeof document !== "undefined" && callback()
}