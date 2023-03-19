# RR-Events

Do you want to find some Events in your neighbourhood? Find them here on RR-Events.

**About this Repository**<br />
This project is part of the _[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)_ course from [Academind](https://academind.com).<br />
_'RR-Events'_ is a [ReactJS](https://reactjs.org/) SPA with a [NodeJS](https://nodejs.org/en) Backend and it covers 2 main topics:

- The [React Router](https://reactrouter.com/en/main)
- Authentication

## How to Run the Application

This project actually contains two projects:

- A ReactJS application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "yarn install" in both project folders.

Thereafter, you can start the dummy backend API server via "yarn start" (inside the "backend" folder).<br />
The React app dev server is then also started via "yarn start" (though inside the "frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.<br />
The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.
