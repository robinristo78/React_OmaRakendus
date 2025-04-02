# React Movie Management App

This is a React-based movie management application built with Vite. The app allows users to add, edit, and filter movies by release year. It uses React Context for state management and localStorage for data persistence.

## Table of Contents
- [Features](#features)
- [Components](#components)
- [State Management](#state-management)
- [LocalStorage Integration](#localstorage-integration)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Features

- **Add Movies**: Users can add new movies with details like title, release year, genre, and rating.
- **Edit Movies**: Users can edit existing movie details.
- **Filter Movies**: Filter movies by release year using a dropdown.
- **Persistent Storage**: Movie data is saved in `localStorage` to retain data across sessions.
- **Dynamic UI**: The app dynamically updates the movie list and form based on user interactions.

## Components

### 1. **Movies**
- Displays the list of movies.
- Includes the filter dropdown and the "Add New Movie" button.
- Handles editing and filtering logic.

### 2. **NewMovie**
- Contains the form for adding or editing movies.
- Toggles between the form and the "Add New Movie" button.

### 3. **MoviesForm**
- Form for entering movie details (title, year, genre, rating).
- Validates input and handles form submission.

### 4. **MoviesList**
- Displays the list of movies as individual items.
- Shows a fallback message if no movies are available.

### 5. **MoviesItem**
- Represents a single movie item in the list.
- Includes an "Edit" button to trigger editing.

### 6. **MoviesFilter**
- Dropdown to filter movies by release year.
- Dynamically generates year options based on the available movies.

### 7. **Error**
- Modal component for displaying error messages.
- Includes a backdrop and a dismiss button.

### 8. **UI Components**
- **Card**: A wrapper component for styling.
- **Button**: A reusable button component.

### 9. **MovieContext**
- Provides global state management for movies.
- Includes methods to add and edit movies.
- Syncs movie data with `localStorage`.

## State Management

The app uses React Context (`MovieContext`) to manage the global state of movies. It provides the following methods:
- `addMovie`: Adds a new movie to the list.
- `editMovie`: Updates an existing movie's details.

## LocalStorage Integration

The app persists movie data in `localStorage`:
- On app load, it retrieves movies from `localStorage`.
- On state updates, it saves the updated movie list to `localStorage`.

## Project Structure
src/ ├── components/ │ ├── Movies/ │ │ ├── Movies.jsx │ │ ├── MoviesFilter.jsx │ │ ├── MoviesItem.jsx │ │ ├── MoviesList.jsx │ ├── NewMovie/ │ │ ├── NewMovie.jsx │ │ ├── MoviesForm.jsx │ ├── UI/ │ │ ├── Button.jsx │ │ ├── Card.jsx │ │ ├── Error.jsx │ ├── MovieContext/ │ │ ├── MovieContext.jsx ├── App.jsx ├── main.jsx

## Installation

1. Clone the repository:
```git clone https://github.com/robinristo78/React_OmaRakendus.git```
```cd React_OmaRakendus```

2. Install dependencies:
    ```npm install```

## Usage
1. Start the development server:
    ```npm run dev```

## Technologies Used
- React: Frontend library for building the UI.
- Vite: Build tool for fast development.
- CSS: Styling for components.

## Contributors
- [@EgertL123](https://github.com/EgertL123)
- taavi
- [@robinristo78](https://github.com/robinristo78)