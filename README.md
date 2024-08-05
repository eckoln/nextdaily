![thumbnail](https://github.com/user-attachments/assets/a273c5c0-1ebe-4e66-88e5-56a13665d78a)

## Introduction

Next Daily is a platform for sharing all the resources and things about Next.js. It is built with Next.js and deployed on Vercel.

— Inspired by remix.guide

## Deploy Your Own

Deploy the example using [Vercel](https://vercel.com) or view the demo [here](https://nextdaily.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feckoln%2Fnextdaily)

## Tech Stack

### Frameworks

- [Next.js](https://nextjs.org) - Frontend
- [Auth.js](https://authjs.dev) - Authentication
- [Prisma](https://www.prisma.io) - Backend

### Platforms

- [Vercel](https://vercel.com) - Deploy
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) - Database

### UI

- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Shadcn UI](https://ui.shadcn.com) - Styling
- [Radix UI](https://www.radix-ui.com/primitives) - Primitives
- [Lucide](https://lucide.dev/icons) - Icons
- [Geist](https://github.com/vercel/geist-font) - Font

### Miscellaneous

- [url-metadata](https://github.com/laurengarcia/url-metadata) - Metadata parser for target URLs
- [rss](https://github.com/dylang/node-rss) - RSS Feed

## Roadmap

- [ ] Infinite Scroll on Feed
- [ ] Resource Search
- [ ] Bookmarks
- [ ] Admin Dashboard Features

## Running Locally

1. Clone this repository to your local machine.
2. Copy .env.example to .env and fill in the required environment variables.
3. Run `pnpm install` to install dependencies.
4. Run `pnpm prisma db push` to create prisma models.
5. Run `pnpm dev` to start development mode to server.
6. Run `pnpm prisma studio` to manage tags and resources.
