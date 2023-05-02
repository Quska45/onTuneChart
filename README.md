# Svelte + TS + Vite + Storybook + addon-svelte-csf

### Github Page

https://teemstone-lab.github.io/ontuneV5_test/

### How I setup this repo:

1. npm create vite@latest svelte-csf
    - Select the svelte template
    - Once created, run `yarn install`
2. `npx sb@next init --builder @storybook/builder-vite` to setup storybook using vite.
3. `yarn add @storybook/addon-svelte-csf`
4. Put `@storybook/addon-svelte-csf` into storybook addons in `.storybook/main.cjs`
5. Copied Button component example from addon-svelte-csf repo and created a minimal test.stories.svelte

### Issue:

Controls do not work, args aren't being updated without a component reload."# storybook"
"# grid"
