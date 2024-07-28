# Flight Status Application
## Overview
The Flight Status Application provides real-time flight status updates and notifications to passengers. It features a React.js frontend for displaying flight information and a Python Flask backend for managing API requests, real-time updates, and notifications.

## Tech Stack
### Frontend
React.js: A JavaScript library for building user interfaces.
HTML/CSS: Used for structuring and styling the web application.
Socket.IO Client: For real-time communication with the backend.

### Backend
Python: Programming language used for backend development.
Flask: A lightweight WSGI web application framework.
Flask-SocketIO: Provides Socket.IO integration for real-time updates.
PostgreSQL: Relational database used to store flight information and other data.
psycopg2-binary: PostgreSQL adapter for Python.

### Notifications
Firebase Cloud Messaging (FCM): For sending push notifications to users.
Twilio: For sending SMS notifications.

## Features
Real-time Flight Status Updates: Displays current flight status, including delays, cancellations, and gate changes.
Push Notifications: Sends notifications via SMS and app notifications for flight status changes.
Integration with Airport Systems: Retrieves flight data from a PostgreSQL database.


## Installation
### Frontend Setup

##### 1. Clone the Repository
     git clone <repository-url>
     cd flight-status-project/frontend

##### 2. Install Dependencies
     npm install

##### 3. Run the Application
     npm start

The frontend will be available at http://localhost:3000.

### Backend Setup

##### 1. Set Up Virtual Environment

    cd flight-status-project/backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

##### 2. Install Dependencies

    pip install -r requirements.txt

##### 3. Set Up Database

Ensure PostgreSQL is running and execute the following SQL script to set up the database schema:

    psql -U <your-username> -d <your-database> -f database/schema.sql

##### 4. Run the Application

    python app.py

The backend will be available at http://localhost:5000.

### Configuration
Firebase Cloud Messaging: Update notifications.py with your Firebase service account credentials.
Twilio: Update sms.py with your Twilio account SID, auth token, and phone number.

#### File Structure
     flight-status-project/
     ├── frontend/                       # React.js Frontend
     │   ├── public/
     │   ├── src/
     │   │   ├── components/
     │   │   │   └── FlightStatusComponent.jsx
     │   │   ├── App.css
     │   │   ├── App.js
     │   │   ├── index.css
     │   │   └── index.js
     │   ├── .gitignore
     │   ├── package.json
     │   ├── README.md
     │   └── node_modules/
     ├── backend/                       # Python Flask Backend
     │   ├── app.py
     │   ├── notifications.py
     │   ├── sms.py
     │   ├── requirements.txt
     │   ├── venv/
     │   └── .gitignore
     ├── database/                      # Database scripts
     │   └── schema.sql
     └── .gitignore
     
### Additional Information
Real-time Updates: Achieved using Socket.IO for bidirectional communication between the frontend and backend.

Notifications: Configured to send updates via both push notifications and SMS to ensure users are informed of status changes.
