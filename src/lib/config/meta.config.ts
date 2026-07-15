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
	],
});
