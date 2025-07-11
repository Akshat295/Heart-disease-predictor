# Heart Disease Predictor

A modern, interactive web application that predicts the likelihood of heart disease based on user-provided medical parameters. Powered by a machine learning model and designed with a beautiful, user-friendly interface.

## Features
- **Instant Heart Disease Prediction** using a trained ML model
- **Animated, engaging UI** with a heart-themed loader and interactive form
- **Parameter info tooltips** for user guidance
- **Responsive design** for desktop and mobile
- **Result modal** with animated feedback

## Tech Stack
- **Backend:** Python, Flask, scikit-learn (model in `heart_model.pkl`)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla), Font Awesome

## Setup Instructions (Local)
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd heart_disease_predictor
   ```
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
3. **Ensure model file is present**
   - The file `heart_model.pkl` should be in the project root.
4. **Run the app**
   ```bash
   python app.py
   ```
5. **Open in browser**
   - Visit [http://localhost:5000](http://localhost:5000)

## Deployment on Render
1. **Push your code to GitHub.**
2. **Create a new Web Service on [Render](https://render.com/).**
3. **Connect your GitHub repository.**
4. **Render will auto-detect your Python app.**
   - Ensure you have `requirements.txt` and `Procfile` in your root directory.
   - The `Procfile` should contain:
     ```
     web: gunicorn app:app
     ```
5. **Deploy!**

## Usage
- Fill in the medical parameters in the form.
- Click the **Predict** button.
- Wait for the animated loader, then view your result in a modal popup.
- Click the info (ⓘ) button next to any parameter for a brief explanation.

## Parameters Explained
- **Age:** Your age in years
- **Sex:** 1 = Male, 0 = Female
- **Chest Pain Type:** 0 = Typical Angina, 1 = Atypical Angina, 2 = Non-anginal Pain, 3 = Asymptomatic
- **Resting BP:** Resting blood pressure (mm Hg)
- **Cholesterol:** Serum cholesterol (mg/dl)
- **Fasting Sugar:** Fasting blood sugar > 120 mg/dl (1 = True, 0 = False)
- **Resting ECG:** 0 = Normal, 1 = ST-T abnormality, 2 = Left ventricular hypertrophy
- **Max Heart Rate:** Maximum heart rate achieved
- **Exercise Induced Angina:** 1 = Yes, 0 = No
- **Oldpeak:** ST depression induced by exercise relative to rest
- **Slope:** 0 = Upsloping, 1 = Flat, 2 = Downsloping
- **Number of Vessels:** Number of major vessels colored by fluoroscopy (0–3)
- **Thalassemia:** 3 = Normal, 6 = Fixed defect, 7 = Reversible defect

## Project Structure
```
heart_disease_predictor/
├── app.py
├── heart_model.pkl
├── requirements.txt
├── Procfile
├── script.js
├── static/
│   └── style.css
├── templates/
│   └── index.html
└── README.md
```

## Notes
- Static files (JS, CSS) are referenced using Flask's `url_for('static', filename='...')` in templates for compatibility with all environments.
- The app is ready for deployment on Render or any WSGI-compatible host.
