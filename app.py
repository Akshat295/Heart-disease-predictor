from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load the trained model
model = pickle.load(open('heart_model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/script.js')
def serve_js():
    return open('script.js').read(), 200, {'Content-Type': 'text/javascript'}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = [data[col] for col in [
        'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
        'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
    ]]
    prediction = model.predict(np.array(input_data).reshape(1, -1))[0]
    return jsonify({'result': 'Has Heart Disease' if prediction == 1 else 'No Heart Disease'})

if __name__ == '__main__':
    app.run(debug=True)
