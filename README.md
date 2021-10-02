# SvelteKit Pokedex

Courtesy of [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) SvelteKit Crash Course on [YouTube](https://www.youtube.com/watch?v=UU7MgYIbtAk) ([repo](https://github.com/jamesqquick/svelte-kit-pokedex)).

## Features

This Pokedex project demonstrates the following using SvelteKit
- Severside rendering
- API Routes
- Stores
- Tailwind CSS
  - [YouTube](https://www.youtube.com/c/TailwindLabs/featured) for tutorials and latest developments
  - [setup guide for SvelteKit](https://jsco.dev/blog/how-to-set-up-tailwindcss-with-svelte-kit)
- and more


Pokemon data is fetched from the ([PokeAPI](https://pokeapi.co/docs/v2))

Endpoints:
- https://pokeapi.co/api/v2/pokemon/?limit=150
- https://pokeapi.co/api/v2/pokemon/:id e.g https://pokeapi.co/api/v2/pokemon/1


## SvelteKit documentation

SvelteKit [website](https://kit.svelte.dev/) and github [repo](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next sveltekit-pokedex

# change to app directory
cd sveltekit-pokedex

# install dependancies
npm install
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Dev environment runs in port [3000](http://localhost:3000/).

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


SvelteKit used the [Vite](https://vitejs.dev/) build tool.
