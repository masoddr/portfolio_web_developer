/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

/*
 * https://unlighthouse.dev/api/config
 */
export default defineConfig({
	site: "parallaxstudio.fr",
	scanner: {
		exclude: [/^\/cdn-cgi\//],
	},
	ci: {
		budget: 90,
		buildStatic: true,
	},
	debug: true,
	cache: false,
});
