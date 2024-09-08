Photography Website
A professional photography website built with Strapi (backend) and React (frontend), utilizing GraphQL for efficient data querying.
Project Structure

backend/: Strapi application (CMS and API)
frontend/: React application (user-facing website)

Backend (Strapi)

Setup and Running

Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Start the Strapi development server:
npm run develop

Access the Strapi admin panel at http://localhost:1337/admin



Frontend (React)

Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install
Start the React development server:
npm start
# or
yarn start

Access the website at http://localhost:3000

Key Technologies

React: JavaScript library for building user interfaces
GraphQL: Query language for APIs
Apollo Client: State management library for JavaScript apps

GraphQL Integration

The frontend uses Apollo Client to communicate with the Strapi GraphQL API
GraphQL endpoint: http://localhost:1337/graphql
Sample query:
query {
  photographs {
    id
    title
    image {
      url
    }
  }
}


