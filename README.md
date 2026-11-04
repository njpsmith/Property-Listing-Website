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

### Loading States

I have created skeleton UI components for the Propety Cards, so that before the API call has resolved (i.e. before we have any property data) the user will see an approximation of the expected UI. I created a PropertyCardSkeleton component for this.

Benefits of using skeleton loading UI:

- Reduces cumulative layout shift (CLS).
- Makes loading feel faster because users can anticipate the content.
- Avoids the page jumping around when the API response arrives.
- Creates a more polished experience.

## Technical Architecture

I have decided to build this project using Next.js for several reasons. It has a built-in router, image optimisation, font optimisation, code splitting, and allows for static and server-side rendering.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Separation of Concerns

I’ve deliberately separated the UI, state, data fetching, backend, and database concerns. This keeps the front end simpler, easier to test, and easier to change.

The aim is to make each layer responsible for one thing, so that if you change your API, database or UI framework, you don't have to rewrite the entire application.

This also increases testability: You should be able to test business logic independently, API integrations independently and UI components independently.

Each layer has a clear responsibility:

- Presentation layer (UI - pages, layouts, forms, loading states and skeletons, etc.). Components shouldn't contain API fetching logic or complex business rules.
- State layer (hooks) coordinates search state (filters, sort, location, page, etc.) and fetching
- Service layer handles API communication.
- Backend validates and applies business rules.
- Database handles data retrieval.

### Feature-based Architecture

I am using feature-based architecture, where property-related functionality lives together rather than spreading it across generic folders such as `components`, `services`, `hooks` and `types`.

My folder structure will look something like:

```
src/
├── app/
│   ├── properties/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── properties/
│   │       └── route.ts
│   │
│   └── layout.tsx
│
├── features/
│   └── properties/
│       ├── components/
│       │   ├── PropertyCard.tsx
│       │   ├── PropertyList.tsx
│       │   ├── PropertyFilters.tsx
│       │   └── PropertySearchForm.tsx
│       │
│       ├── services/
│       │   └── propertyService.ts
│       │
│       ├── hooks/
│       │   └── useProperties.ts
│       │
│       ├── types/
│       │   └── property.ts
│       │
│       └── utils/
│           └── formatPropertyPrice.ts
│
├── lib/
│   ├── api/
│   │   └── apiClient.ts
│   │
│   └── utils/
│
└── types/
```

### Tech Stack

// UPDATE THIS

Frontend

- Next.js
- React
- TypeScript
- Zustand??
- TanStack Query??
- Tailwind

Backend??

- Node.js
- Express
- Prisma
- SQLite initially

Testing??

- Vitest
- React Testing Library
- Playwright ??
- MSW ??

---

## Pages

The site will contain the following pages:

- Homepage
- Property search results
- Individual property listing page
- Log in?
- Saved properties?

WRITE ABOUT THE TECH STACK

## Searching and Filtering

### URL Query Parameters

URL parameters are the source of truth for submitted searches.

This makes searches bookmark-able and shareable. Users can refresh their page and not lose their search results. They can bookmark the page and return to it later or share the filtered search results with a friend.

We use the following parameters:

- location
- minPrice
- maxPrice
- minBedrooms
- maxBedrooms
- propertyType (e.g. House, Flat)

An example search:
`/properties?location=london&minPrice=300000&maxPrice=650000&minBedrooms=3&maxBedrooms=5`

### Server-side filtering

I will be doing server-side filtering. For a large property listing website, it is not feasible to request every property and filter them on the client side. This makes the application more scalable and reduces the size of payloads.

## Data Model

For this demo, I've simplify the domain model to just three entities:

1. Property – the property listing.
2. User – the person using the application.
3. SavedProperty – the relationship between a user and a saved property.

Properties will use the following type:

```
interface Property {
  id: number;
  address: string;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  property_type: "house" | "apartment" | "condo" | "townhouse";
}
```

For the purposes of this demo, all properties will have one of the following addresses: London, Manchester, Birmingham, Brighton, Newcastle.

### Entity Relationships

Here's how I'd think about the database relationships:

| Relationship               | Type         | Explanation                                                                       |
| -------------------------- | ------------ | --------------------------------------------------------------------------------- |
| User → SavedProperties     | One-to-many  | A user can save multiple properties                                               |
| Property → SavedProperties | One-to-many  | A property can be saved by multiple users                                         |
| User → Property            | Many-to-many | Users can save multiple properties, and properties can be saved by multiple users |

## Data Flow

// TO WRITE - Build a vertical slice from user interaction to data and back.

User lands on the property search page
User filters by location, price, and number of bedrooms
User sorts by price descending

Query parameters
API
Database
Returns search results

When using the property search filters, the data flow will be as follows:

```
User changes search fields
      |
      v
React Hook Form
      |
      v
Zod validation
      |
      v
Submit search
      |
      v
Update URL search parameters
      |
      v
Next.js reads search parameters
      |
      v
Fetch matching properties
      |
      v
Render property results
```

## State Management

React's built-in state, URL query parameters, and a server-data fetching strategy.

I will be using URL query parameters for Search filters as well as Pagination and sorting.

I will use React's useState for local UI state.

## API Design

To start with, I used the following API for dummy property data, while I was building the front end: https://databasesample.com/mock-api/property-listings

## Testing Strategy

Unit Tests

- utilities
- hooks
- filter logic

Integration Tests

- API interactions
- React Query flows

E2E Tests

- search flow
- save property
- URL restoration

Visual Regression

- snapshots
- multi-theme testing

## Backed Architecture

Talk about:

- request lifecycle
- DB querying
- validation
- filtering logic
- pagination
- performance bottlenecks

Use:

- Node.js
- Express
- SQLite/Postgres
- Prisma

## Accessibility

---
