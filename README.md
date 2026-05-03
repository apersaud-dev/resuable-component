# Reusable Component

This cproject was bootstrapped with Vite's React + Typescript template.

## Clone Instructions

This project can be downloaded from this [Google Drive Folder]();

## Available Scripts

Note: This project requires that a Node version 24.12.2 or higher.

#### `npm i` or `npm install`

This will install all the required dependencies.

#### `npm run dev`

This will run the code on a local development server (likely [localhost:5173](http://localhost:5173)). The Code will not be minified.

#### `npm run build`

This script will first check if there are any TypeScript errors. Pending no failures, the code will be bundled, minifed and comments will be removed, and it will create a `/dist` folder containing static HTML, CSS and JavaScript files.

#### `npm run preview`

This command will boot up a simple server to serve the static files found inside the `/dist` folder. Note, the command `npm run build` must be run before running this command.

## Notes

In the interest of time, a lot of the component prop definitions are written in the same file where they are used. The types and interface definitions that are housed in the `/src/data/types.ts` file were added there because they are consumed in multiple locations.

For the styling of this project, I chose to use SASS with the [BEM (block-element-modifier)](https://getbem.com/) naming convention.

I tried to simplify state by lifting it into the parent DataTable component so that it could be used by child components. I also opted to use a reducer function even though the simplicity of this application didn't necessarily call for it. My reasoning is that even though it would be simpler to take a useState approach, this direction would scale better especially if additional features were added to the project (e.g. sort rows, filter rows, delete rows, etc.).
