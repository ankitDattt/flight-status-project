#Flight Status Application
Overview
The Flight Status Application provides real-time flight status updates and notifications to passengers. It features a React.js frontend for displaying flight information and a Python Flask backend for managing API requests, real-time updates, and notifications.

Tech Stack
Frontend
React.js: A JavaScript library for building user interfaces.
HTML/CSS: Used for structuring and styling the web application.
Socket.IO Client: For real-time communication with the backend.
Backend
Python: Programming language used for backend development.
Flask: A lightweight WSGI web application framework.
Flask-SocketIO: Provides Socket.IO integration for real-time updates.
PostgreSQL: Relational database used to store flight information and other data.
psycopg2-binary: PostgreSQL adapter for Python.
Notifications
Firebase Cloud Messaging (FCM): For sending push notifications to users.
Twilio: For sending SMS notifications.
Features
Real-time Flight Status Updates: Displays current flight status, including delays, cancellations, and gate changes.
Push Notifications: Sends notifications via SMS and app notifications for flight status changes.
Integration with Airport Systems: Retrieves flight data from a PostgreSQL database.
