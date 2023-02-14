---
duration: 2h
---

# Lab: getting started with React and Next.js

Using React together with Next.js gives you building blocks to create web applications fast. Since this lab, we start working on a skeleton of your course project, a blogging website.

## Objectives

- Next.js application initialization
- Build a website skeleton for blogging
- Build dynamic routes

## Tasks

1. Part 1. Initialize the Next.js application (easy level)
2. Part 2. Build a website skeleton for blogging (medium level)
3. Part 3. Build dynamic routes (medium level)

## Prerequisites

Back up the previous labs in your repository under the `labs` folder.

## Part 1. Initialize the Next.js application (easy level)

> Install [`npx`](https://www.npmjs.com/package/npx) if it is not yet installed.

Initialize a Next.js application by following [this guide](https://nextjs.org/docs/getting-started) to start. Under your repository root, run the `npx create-next-app@latest` and name your application as `app`. It must create the `app` folder.

## Part 2. Build a website skeleton for blogging (medium level)

1. Learn [React components](https://reactjs.org/docs/components-and-props.html), [Next.js pages](https://nextjs.org/docs/basic-features/pages) and [Next.js routing](https://nextjs.org/docs/routing/introduction) to continue with the next steps.

2. Create multiple pages with some information on them, at least it must include:

- `/` - home page
- `/about` - about page
- `/contacts` - contacts page
- `/articles` - a list of articles (with some dummy data)

You can be inspired by any example of a blogging website, for example [Adaltas company website](https://www.adaltas.com/).

3. Create shared components like a header, a footer, and a navigation menu between pages (using [`Link` component](https://nextjs.org/docs/routing/introduction#linking-between-pages)), and display reuse them on every page.

> Note! Don't play a lot with CSS for this moment. We will learn a modern CSS framework ([Tailwind CSS](https://tailwindcss.com)) later.

## Part 3. Build dynamic routes (medium level)

1. Learn [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in Next.js.

2. Build an article page with a route like `/articles/:articleId`, displaying `articleId` and some dummy data.
