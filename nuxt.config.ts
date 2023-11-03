// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	// css: ["~/assets/css/reset.css"],
	app: {
		head: {
			title: "Nuxt Typescript",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			// link: [
			// 	{
			// 		rel: "icon",
			// 		type: "img/x-icon",
			// 		href: "/favicon.svg",
			// 	},
			// ],
		},
		pageTransition: { name: "page", mode: "out-in", appear: true },
		layoutTransition: { name: "page", mode: "out-in", appear: true },
	},
	// nitro: {
	// 	prerender: {
	// 		routes: ["/users"],
	// 	},
	// },
	// components: [
	// 	{
	// 		// path: "~/components/ui",
	// 		// // this is required else Nuxt will autoImport `.ts` file
	// 		// extensions: [".vue"],
	// 		// // prefix for your components, eg: UiButton
	// 		// prefix: "Ui",
	// 	},
	// ],
});
