
/**
 * @roxi/routify 2.18.11
 * File generated Thu Feb 23 2023 15:09:18 GMT+0900 (대한민국 표준시)
 */

export const __version = "2.18.11"
export const __timestamp = "2023-02-23T06:09:18.804Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "test",
      "filepath": "/test",
      "name": "test",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/test",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[slug].svelte",
          "filepath": "/test/[slug].svelte",
          "name": "[slug]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/test/[slug].svelte",
          "importPath": "../src/pages/test/[slug].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/test/:slug",
          "id": "_test__slug",
          "component": () => import('../src/pages/test/[slug].svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "test1.svelte",
      "filepath": "/test1.svelte",
      "name": "test1",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/test1.svelte",
      "importPath": "../src/pages/test1.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test1",
      "id": "_test1",
      "component": () => import('../src/pages/test1.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "test2.svelte",
      "filepath": "/test2.svelte",
      "name": "test2",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/test2.svelte",
      "importPath": "../src/pages/test2.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test2",
      "id": "_test2",
      "component": () => import('../src/pages/test2.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "test3.svelte",
      "filepath": "/test3.svelte",
      "name": "test3",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/LG/Downloads/storybook-svelte-csf-vite-example-main/storybook-svelte-csf-vite-example-main/src/pages/test3.svelte",
      "importPath": "../src/pages/test3.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test3",
      "id": "_test3",
      "component": () => import('../src/pages/test3.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

