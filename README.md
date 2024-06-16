# Art Institute of Chicago Artworks Browser

## Introduction

This single page application (SPA) allows users to browse, search, and filter artworks from the Art Institute of Chicago. Users can also view details of specific artworks, bookmark their favorites, and manage their bookmarks. This application is built using Next.js, ensuring a clean separation of state and view, with static types for robustness.

## Features

1. **Search Artworks**
   - Users can search for artworks using keywords.
2. **Pagination**
   - Navigate between pages of search results.
3. **Filter Artworks**
   - Filter artworks by:
     - Public domain status
     - On view status
4. **View Artwork Details**
   - Select an artwork to view detailed information.
5. **Bookmark Artworks**
   - Bookmark selected artworks in the local storage.
   - Unbookmark previously bookmarked artworks.
   - View a separate list of bookmarked artworks.

## API Documentation

The app is using the Art Institute of Chicago API.
Refer to the [Art Institute of Chicago API documentation](https://api.artic.edu/) for detailed information on the available endpoints and data structure.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/artworks-browser.git
   cd artworks-browser
   ```

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/artworks-browser.git
   cd artworks-browser
   ```

2. **Run the dev enviroment**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app should be running in http://localhost:3000

3. **Run tests**

This app uses vitest for asserting tests

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```
