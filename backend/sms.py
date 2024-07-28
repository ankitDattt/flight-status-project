# sms.py
from twilio.rest import Client

def send_sms(to, body):
    client = Client('your_account_sid', 'your_auth_token')
    message = client.messages.create(
        body=body,
        from_='your_twilio_number',
        to=to
    )
    return message.sid
