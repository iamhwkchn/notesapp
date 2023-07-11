# NotesApp

Seamless Note-Taking: Capture, Organize, and Inspire

## Description
NotesApp is a React-based web application that allows users to create, edit, and delete notes, providing a user-friendly and intuitive note-taking experience similar to the macOS Notes app. This app utilizes key React concepts such as function-based components, useState, useEffect, and react-router-dom for efficient state management and navigation.

The app integrates the JSON Server package to simulate an API server, enabling storage of notes data. By leveraging JSON Server, NotesApp ensures persistence and easy retrieval of notes, mimicking the functionality of a real API. The notes data is stored in a JSON file within the server's database.

## Key Features
- Create new notes with a title and content.
- Edit existing notes to update their title or content.
- Delete unwanted notes effortlessly.
- Seamless navigation between different views and note details using react-router-dom.

## Installation
1. Clone the repository: `git clone https://github.com/iamhwkchn/notesapp.git`
2. Navigate to the project directory: `cd notesapp
3. Install dependencies: `npm install`

## Usage
1. Start the JSON Server: `npm run server`
2. In a separate terminal, start the React app: `npm start`
3. Open your web browser and visit: `http://localhost:3000`

## Deployment
The app can be easily deployed using Netlify. Follow these steps:

1. Create a Netlify account at [netlify.com](https://www.netlify.com/).
2. Connect your GitHub repository to Netlify.
3. Set the build command to: `npm run build`
4. Set the publish directory to: `build/`

Netlify will automatically build and deploy your app once connected to your repository.

## Additional Enhancements (Optional)
To further enhance the NotesApp, consider implementing the following features:
- Add search functionality to allow users to search for specific notes.
- Implement user authentication and authorization to secure the app.
- Enable data synchronization across devices using a backend database.
- Incorporate responsive design to ensure the app works well on various screen sizes.
