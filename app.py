from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle
import os

app = Flask(__name__)

# Load the trained model using a robust path
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'heart_model.pkl')
model = pickle.load(open(MODEL_PATH, 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = [data[col] for col in [
        'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
        'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
    ]]
    prediction = model.predict(np.array(input_data).reshape(1, -1))[0]
    return jsonify({'result': 'Has Heart Disease' if prediction == 1 else 'No Heart Disease'})

# No need for a custom /script.js route; place script.js in the static folder and reference it as /static/script.js in your HTML

if __name__ == '__main__':
    app.run(debug=False)
