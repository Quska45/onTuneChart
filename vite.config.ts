import { defineConfig, BuildOptions } from 'vite';

// eslint-disable-next-line import/no-unresolved
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import dotenv from 'dotenv';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
// import wasm from 'vite-plugin-wasm';
// import topLevelAwait from 'vite-plugin-top-level-await';
// https://vitejs.dev/config/

// const isProd = Boolean(dotenv.config()?.parsed?.ISPORD) === true;
// console.log('dotenvdotenvdotenvdotenvdotenvdotenvdotenvdotenvdotenvdotenv', isProd, basePath);
export default defineConfig({
    plugins: [
        // wasm(),
        // topLevelAwait({
        //   // The export name of top-level await promise for each chunk module
        //   promiseExportName: '__tla',
        //   // The function to generate import names of top-level await promise in each chunk module
        //   promiseImportName: (i) => `__tla_${i}`,
        // }),
        tsconfigPaths(),
        svelte({
            preprocess: [sveltePreprocess({ typescript: true })],
        }),
        createHtmlPlugin(),
    ],
    optimizeDeps: {
        exclude: ['@roxi/routify'],
    },
    build: {
        target: 'esnext',
        minify: true,
        rollupOptions: {
            treeshake: true, // 트리 쉐이킹 활성화
        },
    },
    base: '',
    resolve: {
        alias: {
            svelte: path.resolve(__dirname, 'node_modules/svelte'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});
