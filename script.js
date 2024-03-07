function submitForm() {
  var button = document.querySelector('.button');

  button.innerHTML = '<div class="loader"></div>Button';
  button.disabled = true;

  setTimeout(function () {
    button.innerHTML = 'Submit';
    button.disabled = false;
  }, 2000);
  setTimeout(function () {
    button.disabled = true;
  }, 2000);

}
function submitFormSecondary() {
  var button = document.querySelector('.secondary');

  button.innerHTML = '<div class="loader-secondary"></div>Button';
  button.disabled = true;

  setTimeout(function () {
    button.innerHTML = 'Submit';
    button.disabled = false;
  }, 2000);
  setTimeout(function () {
    button.disabled = true;
  }, 2000);

}
function submitFormTernary() {
  var button = document.querySelector('.ternary');
button.style.border="1px dashed rgba(217, 217, 217, 1)"
  button.innerHTML = '<div class="loader-secondary loader-ternary"></div>Button';
  button.disabled = true;

  setTimeout(function () {
    button.innerHTML = 'Submit';
    button.disabled = false;
  }, 2000);
  setTimeout(function () {
    button.disabled = true;
  }, 2000);

}

function submitFormQuaternary() {
  var button = document.querySelector('.quaternary');
  // button.style.backgroundColor = 'rgba(217, 217, 217, 1)'
  button.style.border = 'none'
  button.innerHTML = '<div class="loader-quaternary "></div>Button';
  button.disabled = true;

  setTimeout(function () {
    button.innerHTML = 'Submit';

    button.disabled = false;

  }, 2000);
  setTimeout(function () {
    button.disabled = true;
  }, 2000);

}

function submitFormQuinary() {
  var button = document.querySelector('.quinary');
  // button.style.backgroundColor = 'rgba(217, 217, 217, 1)'
  button.style.border = 'none'
  button.innerHTML = '<div class="loader-quinary "></div>Button';
  button.disabled = true;

  setTimeout(function () {
    button.innerHTML = 'Submit';

    button.disabled = false;

  }, 2000);
  setTimeout(function () {
    button.disabled = true;
  }, 2000);

}
