# app.py
from flask import Flask, jsonify
from flask_socketio import SocketIO
import psycopg2

app = Flask(__name__)
socketio = SocketIO(app)

# Database connection
conn = psycopg2.connect(
    dbname='flightdb',
    user='postgres',
    password='password',
    host='localhost'
)
cursor = conn.cursor()

@app.route('/flight-status/<flight_id>')
def get_flight_status(flight_id):
    cursor.execute('SELECT status, gate FROM flights WHERE flight_id = %s', (flight_id,))
    flight_status = cursor.fetchone()
    if flight_status:
        status, gate = flight_status
        return jsonify({'status': status, 'gate': gate})
    else:
        return jsonify({'error': 'Flight not found'}), 404

@socketio.on('connect')
def handle_connect():
    # Logic to handle new client connection
    pass

@socketio.on('disconnect')
def handle_disconnect():
    # Logic to handle client disconnection
    pass

if __name__ == '__main__':
    socketio.run(app, debug=True)
