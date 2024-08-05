## Introduction

Next Daily is a platform for sharing all the resources and things about Next.js. It is built with Next.js and deployed on Vercel.

— Inspired by remix.guide

## Deploy Your Own

Deploy the example using [Vercel](https://vercel.com) or view the demo [here](https://nextdaily.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feckoln%2Fnextdaily)

## Tech Stack

### Frameworks

- [Next.js](http://localhost 'Next.js') - Frontend
- [Auth.js](http://localhost 'Next.js') - Authentication
- [Prisma](http://localhost 'Next.js') - Backend

### Platforms

- [Vercel](http://localhost 'Next.js') - Deploy
- [Vercel Postgres](http://localhost 'Next.js') - Database

### UI

- [Tailwind CSS](http://localhost 'Next.js') - Styling
- [Shadcn UI](http://localhost 'Next.js') - Styling
- [Radix UI](http://localhost 'Next.js') - Primitives
- [Lucide](http://localhost 'Next.js') - Icons
- [Geist](http://localhost 'Next.js') - Font

### Miscellaneous

- [url-metadata](http://localhost 'Next.js') - Metadata parser for target URLs
- [rss](http://localhost 'Next.js') - RSS Feed

## Roadmap

- [ ] Infinite Scroll on Feed
- [ ] Resource Search
- [ ] Bookmarks
- [ ] Admin Dashboard Features

## Development

1. Clone this repository to your local machine.
2. Copy .env.example to .env and fill in the required environment variables.
3. Run `pnpm install` to install dependencies.
4. Run `pnpm prisma db push` to create prisma models.
5. Run `pnpm dev` to start development mode to server.
6. Run `pnpm prisma studio` to manage tags and resources.
