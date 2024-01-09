import { defineConfig, presetTypography, presetWebFonts, presetWind } from "unocss";

export default defineConfig({
	content: {
		filesystem: ["./ui/**/*"],
	},
	presets: [
		presetWind({
			dark: "media",
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				display: "Press Start 2P",
				sans: "Montserrat",
				code: "Space Mono"
			}
		})
	],

	theme: {
		colors: {
			primary: {
				"50": "hsl(60, 37%, 97%)",
				"100": "hsl(78, 49%, 93%)",
				"200": "hsl(85, 45%, 85%)",
				"300": "hsl(95, 43%, 73%)",
				"400": "hsl(102, 39%, 58%)",
				"500": "hsl(110, 45%, 45%)",
				"600": "hsl(119, 49%, 36%)",
				"700": "hsl(127, 47%, 29%)",
				"800": "hsl(135, 43%, 24%)",
				"900": "hsl(146, 39%, 20%)",
				"950": "hsl(156, 53%, 10%)",
			},
			// vite: {
			// 	"50": "hsl(284, 100%, 98%)",
			// 	"100": "hsl(282, 100%, 95%)",
			// 	"200": "hsl(281, 100%, 91%)",
			// 	"300": "hsl(281, 100%, 84%)",
			// 	"400": "hsl(281, 100%, 73%)",
			// 	"500": "hsl(281, 100%, 63%)",
			// 	"600": "hsl(281, 99%, 60%)",
			// 	"700": "hsl(281, 88%, 47%)",
			// 	"800": "hsl(282, 82%, 39%)",
			// 	"900": "hsl(283, 80%, 32%)",
			// 	"950": "hsl(282, 100%, 22%)",
			// },
			vite: {
				"50": "hsl(204, 33%, 97%)",
				"100": "hsl(210, 38%, 94%)",
				"200": "hsl(206, 35%, 86%)",
				"300": "hsl(203, 35%, 74%)",
				"400": "hsl(203, 35%, 60%)",
				"500": "hsl(203, 34%, 48%)",
				"600": "hsl(206, 37%, 39%)",
				"700": "hsl(205, 37%, 32%)",
				"800": "hsl(206, 34%, 27%)",
				"900": "hsl(207, 30%, 24%)",
				"950": "hsl(208, 30%, 12%)",
			},
			// vite: {
			// 	"50": "hsl(221, 100%, 96%)",
			// 	"100": "hsl(224, 100%, 93%)",
			// 	"200": "hsl(225, 100%, 88%)",
			// 	"300": "hsl(227, 100%, 81%)",
			// 	"400": "hsl(233, 100%, 73%)",
			// 	"500": "hsl(237, 100%, 70%)",
			// 	"600": "hsl(242, 91%, 59%)",
			// 	"700": "hsl(243, 69%, 51%)",
			// 	"800": "hsl(242, 65%, 41%)",
			// 	"900": "hsl(240, 57%, 34%)",
			// 	"950": "hsl(242, 57%, 20%)",
			// },
			hono: {
				"50": "hsl(43, 100%, 96%)",
				"100": "hsl(43, 95%, 92%)",
				"200": "hsl(41, 95%, 83%)",
				"300": "hsl(39, 94%, 72%)",
				"400": "hsl(36, 93%, 64%)",
				"500": "hsl(33, 92%, 53%)",
				"600": "hsl(29, 88%, 48%)",
				"700": "hsl(26, 86%, 40%)",
				"800": "hsl(24, 77%, 34%)",
				"900": "hsl(24, 73%, 28%)",
				"950": "hsl(21, 78%, 15%)",
			},
		},
	},
});