document.getElementById('predict-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {};
  formData.forEach((val, key) => data[key] = parseFloat(val));

  // Show loader overlay
  const loader = document.getElementById('loader-overlay');
  loader.style.display = 'flex';
  loader.classList.remove('fade-out');

  // Button animation
  const button = form.querySelector('button');
  button.disabled = true;
  button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Predicting...';

  try {
    const response = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    resultDiv.innerHTML = `<i class="fa-solid fa-heart-pulse fa-2x" style="color:#e63946;"></i><br><span style="font-size:1.2rem;">${result.result}</span>`;
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        modal.style.display = 'flex';
      }, 700);
    }, 600);
  } catch (err) {
    resultDiv.innerHTML = '<span style="color:#e63946;">An error occurred. Please try again.</span>';
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        modal.style.display = 'flex';
      }, 700);
    }, 600);
  }
  button.disabled = false;
  button.innerHTML = 'Predict <i class="fa-solid fa-arrow-right"></i>';
});

// Progress bar animation
const form = document.getElementById('predict-form');
const progressBar = document.getElementById('progress-bar');
const modal = document.getElementById('result-modal');
const resultDiv = document.getElementById('result');
const closeBtn = document.querySelector('.close-btn');
const totalFields = form.querySelectorAll('input').length;

function updateProgress() {
  const filled = Array.from(form.querySelectorAll('input')).filter(input => input.value !== '').length;
  const percent = Math.round((filled / totalFields) * 100);
  progressBar.style.width = percent + '%';
}

form.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', updateProgress);
});

// Modal close
closeBtn.onclick = function() {
  modal.style.display = 'none';
  resultDiv.innerHTML = '';
};
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    resultDiv.innerHTML = '';
  }
};

// Info button toggles for parameter descriptions

document.querySelectorAll('.info-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const desc = btn.closest('.form-group').querySelector('.input-desc');
    if (desc.style.display === 'none' || desc.style.display === '') {
      desc.style.display = 'block';
      setTimeout(() => { desc.style.opacity = '1'; }, 10);
    } else {
      desc.style.opacity = '0';
      setTimeout(() => { desc.style.display = 'none'; }, 300);
    }
  });
});
