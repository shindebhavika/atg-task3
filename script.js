document.addEventListener('click', function (event) {
  var targetButton = event.target.closest('button');
  if (targetButton) {
    submitForm(targetButton);
  }
});

function submitForm(button) {
  var loaderClass = 'black-loader';
  var sizeClass = '';

  if (button.classList.contains('primary')) {
    loaderClass = 'white-loader';
  } else if (button.classList.contains('quinary')) {
    loaderClass = 'blue-loader';
  }

  button.innerHTML = `<div class="loader ${loaderClass}"></div>Button`;

  if (button.classList.contains('button-large-size')) {
    sizeClass = 'while-loading-l';
  } else if (button.classList.contains('button-medium-size')) {
    sizeClass = 'while-loading-m';
  } else if (button.classList.contains('button-small-size')) {
    sizeClass = 'while-loading-s';
  }

  button.classList.add(sizeClass);

  var originalClasses = [ 'white-icon', 'black-icon', 'dark-blue-icon', 'medium-blue-icon' ];
  originalClasses.forEach(className => button.classList.remove(className));

  setTimeout(function () {
    button.innerHTML = 'Submit';
 

    if (button.classList.contains('white')) {
      button.classList.add('white-icon');
    }
    if (button.classList.contains('black')) {
      button.classList.add('black-icon');
    }
    if (button.classList.contains('m-blue')) {
      button.classList.add('medium-blue-icon');
    }

    button.classList.remove(sizeClass);

    button.disabled = true;
  
    if(button.classList.contains("primary")){
      button.style.backgroundColor = 'rgba(245, 245, 245, 1)'
    }
    button.style.color = 'rgba(191, 191, 191, 1)';

    var originalClasses = [ 'white-icon', 'black-icon', 'dark-blue-icon', 'medium-blue-icon' ];
    originalClasses.forEach(className => button.classList.remove(className));
    if (
      button.classList.contains("search-button-large") ||
      button.classList.contains("search-button-medium") ||
      button.classList.contains("search-button-small")
    ) {
      button.classList.add("disabled-icon");
    }

  }, 2000);





}
