# EPLScore : Premier League Match Explorer with Next.js 🚀

Welcome to the EPLScore project built with Next.js! 
This application is designed to provide information on Premier League matches of the current month. For example, if the visitor visits the site in October, they will find all matches of October.

Discover the application in action here : [EPLScore App](https://next-eplscore-afantes.vercel.app/)

## Why EPLScore ? 🎯
The primary goal is to provide a tool to discover and follow Premier League matches. Here are some benefits the web application offers:

1. **Discovery** : Easily access information on current or past Premier League matches.
  
2. **Simplicity** : A clear and intuitive interface makes the application easy to use.
  
3. **Educational Resource** : The application's source code can serve as an educational resource for developers looking to understand API interactions, modern techniques of JS, React & Next.js , and real-time data integration.
  
4. **Versatility and Extensibility** : Designed to be easily extensible, the application allows adding new details to each match.

## Technologies and Features Used 💻
Here is the list of techniques and technologies used in this project:

### Next.js :
- **Pages & Routing** : File-based approach for routing.
- **API Routes** : Creating a backend API directly within a Next.js project.
- **ISR (Incremental Static Regeneration)** : Generates static pages that can be updated incrementally after their first render.
- **Custom "_app.tsx" and "_document.tsx"** : These two special files allow customizing the application's behavior.

### React.js :
- **React Hooks** : Allows using the state and other React features without writing a class.
- **Functional Components** : All components in this project are functional components.

### TypeScript :
- Adds static types to JavaScript to catch errors more easily during development.

### Styled-components :
- Library to use CSS in JavaScript to style components.

### Others :
- **API Fetch** : Used to make HTTP requests and retrieve data on matches from an external API.
- **useSWR** : Library for data fetching management.
- **Jotai** : Minimalist and flexible state library for React.
- **next-seo** : Allows managing SEO (Search Engine Optimization) in a Next.js application.

## Project Structure 📁
- **Components**: Contains all React components used in the application.
- **Pages**: Contains the different pages of the application.
- **Public**: Contains public files such as images, robots.txt files, favicon files, etc., that are accessible to the public.
- **Store**: Manages the application's global state using Jotai.
- **Styles**: Contains all global style files.
- **Utils**: Contains utility functions and helpers used throughout the application.

## Getting Started 🚀
- Clone this repository on your local environment.
- Ensure you have the correct version of Node.js installed (see `package.json` for the required version).
- Run `npm install` to install all necessary dependencies.
- Run `npm run dev` to start the application in development mode.

## Contribution 💡
Contributions to this project are strongly encouraged.
