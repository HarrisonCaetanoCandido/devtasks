# Devtasks

**DevTasks** is a lightweight, Jira-like task management application built wit>

---

## Technologies

### Monorepo

* **Nx** – Workspace management and shared libs.

### Front‑End (SPA)

* **React**
* **Webpack** (as a module packager)
* **TailwindCSS** + **Material UI** (Ready components)
* **Zustand** + React Hooks (Client-state)
* **tRPC** + **React Query** (Server-state / integration)
* **Material UI X Charts** + **ECharts** (Data visualization)
* **React Router** (Navigation)
* **Jest** (Component and logic tests)

### Back‑End

* **Node.js v22**
* **Express** + **tRPC** (Endpoinst API typesafe)
* **TypeORM** (ORM to PostgreSQL/MySQL/SQLite etc)
* **Zod** (Input validation)
* **Jest** (Unity and integration tests)

---

## Main features

1. **Tasks CRUD**
2. **Attaching files** to a task
3. **Status history**
4. **Dashboard** to visualize metrics and status/categories charts
5. **Categorization**: tags or categorias to organize tasks

## ER Diagram
![alt text](/imgs/db-diagram.png)

---

## Build

1. **Install** dependencies:
```bash
nvm use 22
npm install
````

2. **Run** migrations:
```bash
nx run backend:typeorm:migrate
````

3. **Iniciar** em modo dev:
```bash
# first terminal 
cd apps/frontend
nvm use
nx serve frontend
````

```bash
# second terminal
cd apps/backend
nvm use
npx nx serve backend
````

## NX

It is a monorepo framework, that builds an unified environment to develop many differ>
- Dependencies management;
- Code generation with smart scaffolding;
- Build and test caching;

**Generators:** Commands to create libs, apps, routes etc;

**Executors:** Runs builds, server, linting, test etc;

**Project Graph:** Dependencies interactive diagram;

**Task Caching:** Store builds and tests on cache to avoid rework

**Workspace computation caching:** Speeds up builds on CI.


<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/EhQ60EBJVd)


## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:
```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

Commands used to start the project

```bash
npm install -g nx

npx create-nx-workspace@latest devtasker --preset=apps --bundler=vite

cd devtasker

nx generate @nx/react:app frontend \
  --bundler=vite \
  --style=css \
  --routing=true \
  --inSourceTests=false

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @mui/material @emotion/react @emotion/styled

npm install zustand @tanstack/react-query @trpc/client

nx generate @nx/node:app backend

npm install @trpc/server zod reflect-metadata typeorm sqlite3

nx generate @nx/js:lib api     
nx generate @nx/js:lib data    
nx generate @nx/js:lib hooks   
nx generate @nx/react:lib ui  
```

Showing projects:
```bash
nx show projects
```

Deleting projects:
```bash
nx g remove <project-name>
```

Running apps:
```bash
nx serve frontend
nx serve backend
```

Creating graph dependencies:
```bash
nx graph
```
