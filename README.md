# Frontdoor - A Property Listing Website

This is a demo property listing website (titled 'Frontdoor'), in the style of Rightmove or Zoopla, created by [Nicholas Smith](https://github.com/njpsmith).

I have built the frontend in Next.js, using Tailwind.

The backend and API layer were built in... //TO FINISH

// WRITE ABOUT TESTING and STATE MGMT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Property search
- Filtering and sorting
- Saved properties
- Individual property listing page

### Advanced

- Log in/out
- Creating accounts
- Create a property listing
- Edit/Delete a property listing

## Technical Architecture

I have decided to build this project using Next.js for several reasons. It has a built-in router, image optimisation, font optimisation, code splitting, and allows for static and server-side rendering.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Pages

The site will contain the following pages:

- Homepage
- Property search results
- Individual property listing page
- Log in?
- Saved properties?

WRITE ABOUT THE TECH STACK

## Data Model

## Data Flow

// TO WRITE - Build a vertical slice from user interaction to data and back.

User lands on the property search page
User filters by location, price, and number of bedrooms
User sorts by price descending

Query parameters
API
Database
Returns search results

## State Management

React's built-in state, URL query parameters, and a server-data fetching strategy.

I will be using URL query parameters for Search filters as well as Pagination and sorting.

I will use React's useState for local UI state.

## Testing Strategy

## Backed Architecture

---
