# Glowing Artifact

## Project Overview

This project is a web application for tracking and managing historical artifacts. It allows users to browse a wide range of artifacts, view detailed information, and contribute their own entries. The application includes user authentication, where logged-in users can manage their submissions and 'like' their favorite artifacts.

## Live Site

[https://glowing-artifact.web.app/](https://glowing-artifact.web.app/)

## Key Features

- **User Authentication**: The website provides secure user authentication using both email/password and Google login. It utilizes **JSON Web Tokens (JWT)** for securing private routes.
- **Artifact Management**: Authenticated users can perform full CRUD (Create, Read, Update, Delete) operations on their own artifact submissions.
- **Dynamic Liking**: Users can 'like' or 'dislike' an artifact, with the like count updating in real-time on the page and persisting in the database.
- **Featured Artifacts**: The homepage dynamically displays the six artifacts with the highest number of likes, sorted using **MongoDB's sorting capabilities**.
- **Responsive Design**: The website is fully responsive, ensuring a seamless user experience across mobile, tablet, and desktop devices.
- **Search Functionality**: A search bar on the "All Artifacts" page allows users to find artifacts by name.
- **Dynamic Title**: The website's title changes dynamically based on the current route, providing a better user experience.
- **Error Handling**: A custom 404 page is in place for invalid routes.
- **Loading Spinner**: A loading spinner is shown to the user while data is being fetched.
- **Framer Motion**: Animations from the Framer Motion library have been implemented on the Home page to enhance the user interface.

## NPM Packages Used

### Client-side

- `react-router-dom`: For client-side routing.
- `firebase`: For user authentication.
- `axios`: For making HTTP requests to the backend.
- `react-toastify`: For displaying toast notifications.
- `sweetalert2`: For elegant, customizable alert popups.
- `framer-motion`: For declarative animations.
- `tailwind-merge`: To merge Tailwind CSS classes without conflicts.
- `react-icons`: For various icons used throughout the website.

### Server-side

- `express`: The web application framework for Node.js.
- `cors`: To handle Cross-Origin Resource Sharing.
- `mongodb`: The official MongoDB driver for Node.js.
- `jsonwebtoken`: For creating and verifying JWT tokens.
- `dotenv`: To load environment variables from a `.env` file.

### Update

- Added about section, logout user now has 3 navigations and login user has 6 navigations
