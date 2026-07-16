import appCss from "#/shared/styles/index.css?url";
import { appConfig } from "./app.config";

export const appHead = () => ({
	meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1",
		},
		{
			title: appConfig.name,
		},
	],
	links: [
		{
			rel: "stylesheet",
			href: appCss,
		},
		{
			rel: "icon",
			type: "image/x-icon",
			href: "/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/webp",
			sizes: "32x32",
			href: "/logo192.webp",
		},
		{
			rel: "icon",
			type: "image/webp",
			sizes: "16x16",
			href: "/logo192.webp",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/logo192.webp",
		},
	],
});
