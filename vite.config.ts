import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [solid(), tailwindcss()],
	server: {
		port: 4040,
	},
	build: {
		target: 'esnext',
	},
});
