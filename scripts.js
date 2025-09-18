// Update progress bar as fields are filled
document.getElementById('regForm').addEventListener('input', () => {
  const inputs = document.querySelectorAll('#regForm input, #regForm select, #regForm textarea');
  const filled = Array.from(inputs).filter(i => i.value.trim() !== '').length;
  const percent = (filled / inputs.length) * 100;
  document.getElementById('formProgress').value = percent;
});

// BMI Calculator
function calcBMI() {
  const w = parseFloat(document.getElementById('weight').value);
  const h = parseFloat(document.getElementById('height').value) / 100;
  if (!w || !h) { alert('Enter valid weight and height'); return; }
  const bmi = (w / (h*h)).toFixed(2);
  document.getElementById('bmiResult').textContent = "Your BMI is " + bmi;
}

// Currency converter using jQuery keyup
$('#inr').on('keyup change', function(){
  const inr = parseFloat($(this).val()) || 0;
  const usd = (inr / 83).toFixed(2); // example conversion rate
  $('#usd').text(usd);
});
