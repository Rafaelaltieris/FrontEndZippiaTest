User Management Dashboard
Overview
This project is a fully functional web application designed to fetch and display user data from the JSONPlaceholder API. The application allows users to search and filter data in real-time, providing a smooth and responsive experience. The table dynamically updates based on user input and API responses, showcasing proficiency in DOM manipulation, API interaction, and JavaScript object handling.

Features
Real-Time Search: An input field enables real-time filtering of users by name. As you type, the table updates to show matching results.
Fetch Users: A "Fetch Users" button triggers an API request to retrieve a list of users.
Dynamic Table: The table is automatically generated and populated with user data, including Name, Username, Email, Phone, City, and Company.
Error Handling: Clear error messages are displayed if the API request fails or if any issues occur during data fetching.
Optional Features (Implemented):
Sorting: Table headers can be clicked to sort users by various fields.
User Details: Selecting a user displays additional detailed information.
Pagination: Manages the display of a large number of users efficiently.
Installation
Clone this repository:

bash
git clone https://github.com/yourusername/user-management-dashboard.git
Navigate to the project directory:

bash
cd user-management-dashboard
Install the required dependencies:

bash
npm install
Start the development server:

bash
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Deployment
The application is deployed on Vercel. You can access the live demo at (https://front-end-zippia-test.vercel.app/).

Usage
Click the "Fetch Users" button to retrieve and display user data.
Use the input field to filter users by name in real-time.
Click on table headers to sort users by different criteria.
Click on a user to view more detailed information.
Technologies Used
JavaScript: For interacting with the DOM and handling API requests.
HTML/CSS: For structuring and styling the application.
Vercel: For deployment.
Contributing
If you have suggestions or improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
