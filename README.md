# TTs Statpage

TTs Statpage is a web application designed to provide live updates for sports teams, reminders for personal connections, and a platform for tracking local softball games and personal stats. This project is a gift for a sports enthusiast and aims to combine functionality with a personal touch.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Django and includes the following components:

- **manage.py**: Command-line utility for managing the Django project.
- **TTs_Statpage/**: Contains the main settings and configuration for the Django project.
  - **__init__.py**: Indicates that the directory should be treated as a Python package.
  - **settings.py**: Configuration for the Django project, including database settings and installed apps.
  - **urls.py**: URL patterns for the Django project.
  - **wsgi.py**: Entry point for WSGI-compatible web servers.
  - **asgi.py**: Entry point for ASGI-compatible web servers.
- **sports/**: The Django app that handles sports-related functionality.
  - **__init__.py**: Indicates that the sports directory should be treated as a Python package.
  - **admin.py**: Registers models with the Django admin site.
  - **apps.py**: Configuration for the sports app.
  - **models.py**: Defines the data models for the sports app.
  - **views.py**: Contains view functions that handle requests and return responses.
  - **urls.py**: URL patterns specific to the sports app.
  - **templates/sports/**: Contains HTML templates for the sports app.
    - **index.html**: Main page of the sports app.
    - **team_updates.html**: Template for displaying team updates.
    - **reminders.html**: Template for displaying reminders.
    - **softball_games.html**: Template for displaying local softball games.
    - **stats.html**: Template for displaying personal stats.

### Frontend

The frontend is built using React and includes the following components:

- **public/index.html**: Main HTML file for the React app.
- **src/**: Contains the source code for the React app.
  - **App.js**: Main component of the React app.
  - **index.js**: Entry point for the React app.
  - **components/**: Contains React components for various functionalities.
    - **TeamUpdates.js**: Displays updates for the user's favorite teams.
    - **Reminders.js**: Displays reminders for the user.
    - **SoftballGames.js**: Allows the user to input and view local softball games.
    - **Stats.js**: Displays personal stats for the user.
  - **css/**: Contains the Bootstrap CSS framework for styling.
    - **bootstrap.min.css**: Bootstrap CSS file.
  - **js/**: Contains custom JavaScript for additional functionality.
    - **main.js**: Custom JavaScript file.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd TTs-Statpage
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install the required packages:
     ```
     pip install -r requirements.txt
     ```
   - Run migrations:
     ```
     python manage.py migrate
     ```
   - Start the Django server:
     ```
     python manage.py runserver
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install the required packages:
     ```
     npm install
     ```
   - Start the React app:
     ```
     npm start
     ```

## Usage

- Access the Django backend at `http://127.0.0.1:8000/`.
- Access the React frontend at `http://localhost:3000/`.

## License

This project is a personal gift and is not intended for commercial use.
