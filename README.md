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

### Organisation and components

#### Deploy on Netlify

Continuous Deployment's configurated, it deploys when push main branch.
