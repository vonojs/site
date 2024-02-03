import { hydrate } from "preact"
import { animate } from "motion";
import { App } from "./App";

import "@unocss/reset/tailwind.css";
import "./globals.css";
import "virtual:uno.css";

declare global {
	var toast: (message: string) => void;
}
let currentToast: HTMLDivElement | null = null;
globalThis.toast = async (message: string) => {
	const toast = document.createElement("div");
	toast.classList.add(
		"bg-vite-900",
		"rounded-md",
		"shadow-lg",
		"p-4",
		"flex",
		"justify-between",
		"items-center",
		"font-code",
		"text-vite-100",
		"border",
		"border-vite-600"
	);
  toast.innerText = message;
  if(currentToast) {
    await animate(currentToast, 
      {
        opacity: [1, 0],
        y: [0, 5]
      }, 
      {
        duration: .125
      }
    ).finished
    currentToast.remove();
  }
  currentToast = toast;
  document.getElementById("toasts")!.appendChild(toast);
  animate(toast, {
    opacity: [0, 1],
    y: [-10, 0]
  });
  setTimeout(() => {
    const anim = animate(toast, {
      opacity: [1, 0],
      y: [0, -10]
    });
    anim.finished.then(() => {
      toast.remove();
    })
  }, 1500);
};

const root = document.getElementById("root");
hydrate(<App />, root!);