from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Sett din OpenAI API-nøkkel
openai.api_key = "DIN_API_NØKKEL"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message", "")
    
    # Send forespørsel til GPT-4 Turbo
    response = openai.ChatCompletion.create(
        model="gpt-4-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    reply = response['choices'][0]['message']['content']
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(debug=True)

