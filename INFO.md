# scrape-flow

## See also

[https://github.com/kliton-yt/scrape-flow-assets]

[https://ui.shadcn.com/]

[https://ui.shadcn.com/docs/dark-mode/next]

[https://ui.shadcn.com/docs/components/form]

## 01 Project setup
[https://www.youtube.com/watch?v=RkwbGuL-dzo&t=264s]

```
$ npx create-next-app@14.2.5
✔ What is your project named? … scrape-flow
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
? Would you like to customize the default import alias (@/*)? › No / Yes

> npx shadcn@2.1.0 init
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › Default
✔ Which color would you like to use as the base color? › Neutral
✔ Would you like to use CSS variables for theming? … no / yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - lib/utils.ts

Success! Project initialization completed.
You may now add components.

$ npx shadcn@2.1.0 add

ES7+ React/Redux/React-Native snippets<br>
rfce<br>

$ npm run dev
```

### 01 Project setup - Part 3

Sidebar with 4 button
Current: 19:18

### 01 Project setup - Part 4

```
npm i next-themes
npm audit fix --force
```

TheModeToggle.tsx
Current: 24:29

### 01 Project setup - Part 5

not-found.tsx
Current: 27:52

### 01 Project setup - Part 6

mobile sidebar
Current: 31:13

## 02 Auth setup

[https://clerk.com/docs/quickstarts/nextjs]

```
npm install @clerk/nextjs@5.3.2
```

[https://dashboard.clerk.com]

### 02 Auth setup - Part 1

```
sign-in and sign-up pages created
```

### 02 Auth setup - Part 2

```
Finalizing clerc setup
```

## 03 Database setup
[https://www.youtube.com/watch?v=RkwbGuL-dzo&t=2248s]

```
npm install --save-dev prisma
npm install @prisma/client
npx prisma init --datasource-provider sqlite

Workflow model
npx prisma migrate dev
Name: init db

npx prisma studio
http://localhost:5555/
```
## 04 Workflows page
[https://www.youtube.com/watch?v=RkwbGuL-dzo&t=2714s]

```
$ npm i @tanstack/react-query
$ npm i --save-dev @tanstack/react-query-devtools
```

## 04 Workflows page - Part 3

Current: 1:04:24

## 04 Workflows page - Part 4

...

## 04 Workflows page - Part 5

```
CreateWorkflowDialog created
```

Current: 1:09:40

## 04 Workflows page - Part 6

```
CreateWorkflow server action
```

Current: 1:14:20

## 04 Workflows page - Part 7

CreateWorkflowDialog, workflow create

Current: 1:19:35

## 04 Workflows page - Part 8


WorkflowCard.tsx and TooltipWrapper.tsx

Current: 1:30:35

