var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2700);
}

$(function() {
  $("#forma").submit(function(e) {
    e.preventDefault();
    submitForm();
  });

  $("#email").change(function() {
    handleEmailChange();
  });
});

function submitForm() {
  formValues = getFormValues();
  console.log("Forma je submitovana sa vrednostima:");
  console.log(formValues);

  isFormValid(formValues)
    ? window.alert("Forma je uspesno prosledjena")
    : window.alert("Popunite obavezna polja");
}

function getFormValues() {
  var ime = $("#ime").val();
  var prezime = $("#prezime").val();
  var email = $("#email").val();
  var poruka = $("#poruka").val();
  return {
    ime: ime,
    prezime: prezime,
    email: email,
    poruka: poruka
  };
}

function isFormValid(formValues) {
  if (
    !formValues.ime.trim() ||
    !formValues.prezime.trim() ||
    !formValues.email.trim() ||
    !isEmailValid(formValues.email) ||
    !formValues.poruka.trim()
  ) {
    return false;
  } else {
    return true;
  }
}

function isEmailValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function handleEmailChange() {
  var emailInput = $("#email");
  var emailVal = emailInput.val();
  var isEmpty = emailVal === "";
  var isValid = isEmailValid(emailVal);

  if (isEmpty) {
    emailInput.removeClass("email-valid email-invalid");
  } else if (isValid) {
    emailInput.removeClass("email-invalid").addClass("email-valid");
  } else {
    emailInput.removeClass("email-valid").addClass("email-invalid");
  }
}
