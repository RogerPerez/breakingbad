This is a [Next.js](https://nextjs.org/) project.

visit in : [Breaking bad Test](https://relaxed-khapse-9f4675.netlify.app/)

# About this project

This project allows us to search and filter characters from Breaking bad .
In addition we can see the detail of the character, as well as a random famous phrase of the character.
To make this possible, we have a home page, in which we are shown 8 characters, a pagination component that allows us to see more characters, and a search input.

The input has two possible functions when entering text:

1: It shows us suggestions of what we are typing, when clicking on one it sends us to the detail of the character.

2: We press the "enter" key or on the search icon, and it shows us the list of characters, as well as a component in which we see what we have written.
By clicking on the "X" icon, we refresh the search.

## Getting Started

[Clone repo](https://github.com/RogerPerez/breakingbad.git)

once cloned, yarn install / npm install for dependencies.
Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project, if its in use will open in other port, check your terminal output.

### Organisation, components and testing

Pages folder: Index.js's the home page, inside "character" folder, you'll find the [id].js page, wich is the detail page.
Also 404.js is in this folder, it's a custom 404 page.

Public folder: only contains favicon

Src folder contains:

    - Components: all components must be in this folder, each component in its own folder. Each folder must contain jsx component and scss of the component (imported in globals.scss)

    - Hooks folder: Contains custom hooks

    - Translations: it contains the translations documents, each language in his own folder.

Styles folder: Contains the .scss files, all .scss files must be imported in "globals.scss", which is imported in \_app.js

Cypress is used for testing, use:

"npx cypress open"

using yarn

"yarn run cypress open"

to open cypress, test are in cypress/e2e/spec.cy.js

#### Environment

The .env file must contain 2 url:

- NEXT_PUBLIC_HOST="https://www.breakingbadapi.com/api/characters"
- NEXT_PUBLIC_QUOTES="https://www.breakingbadapi.com/api/quote"

##### Deploy on Netlify

Continuous Deployment's configurated, it deploys when push main branch.

###### KEEP THE CODDE CLEAN! :D
