Project Description
This project is a React-based web application that visualizes carbon intensity data on a map using heatmap layers. The map is powered by the Leaflet library, and users can search for regions by entering a region ID or using the search functionality on the map. The application fetches carbon intensity data from a Redux store and dynamically updates the heatmap visualization based on the input.

Features
Interactive Leaflet map with heatmap layers representing carbon intensity levels.
Search functionality to locate regions and view their data.
Integration with a Redux store for state management.
Dynamic updating of the map based on fetched region data.
Clean and responsive user interface for seamless interaction.
Technologies Used
React.js: Frontend framework for building the UI.
Redux: State management for handling region data.
Leaflet: Library for rendering the map and heatmaps.
Leaflet-heat: Plugin to add heatmap layers.
Leaflet-control-geocoder: For map search functionality.
How to Run the Project
Clone the Repository:

bash
Copy
Edit
git clone <repository_url>
cd <repository_folder>
Install Dependencies:

bash
Copy
Edit
npm install
Start the Development Server:

bash
Copy
Edit
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
Enter a Region ID in the input field and click Submit to fetch carbon intensity data.
Use the search bar on the map to locate specific regions.
View heatmap layers that represent carbon intensity levels for different areas.
Check the fetched region name and intensity details below the input field.
File Structure
App.js: Contains the main application logic, including map integration and Redux data handling.
Store: Includes Redux store configuration, actions, and reducers for managing data.
Leaflet Heatmap Integration: HTML and JavaScript for rendering the heatmap and search functionality.
Future Enhancements
Add support for real-time updates to carbon intensity data.
Implement filtering options for visualizing intensity levels by time or date.
Enhance the UI/UX for better responsiveness and usability.
Acknowledgments
This application uses the following libraries and services:

Leaflet and its plugins for mapping.
Redux for efficient state management.
OpenStreetMap for map tiles.
Feel free to contribute or suggest improvements!
