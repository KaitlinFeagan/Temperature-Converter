let button = document.querySelector('button');

let main = document.getElementById('main');

let f2c = document.getElementById('ftoc');
let c2f = document.getElementById('ctof');

button.addEventListener('click', () => {
  let temperature = parseInt(document.getElementById('temperature').value);

  let solution = document.getElementById('solution');

  const ftoc = function(temp) {
    let c = (temp - 32) * (5 / 9);
    c = Math.round(c * 10) / 10;
    return c;
  }
  
  const ctof = function(temp) {
    let f = temp * (9 / 5) + 32;
    f = Math.round(f * 10) / 10;
    return f;
  }

  if (c2f.checked == true && f2c.checked == false) {
    solution.textContent = temperature + " degrees Celcius is " + ctof(temperature) + " degrees Fahrenheit."
  } else if (f2c.checked == true && c2f.checked == false) {
    solution.textContent = temperature + " degrees Fahrenheit is " + ftoc(temperature) + " degrees Celcius."
  } else {
    solution.textContent = "Kaitlin sure is BAD at this!"
  }
});


