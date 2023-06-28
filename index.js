// ------------------------ for menu button
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = ()=> {
	// alert("heyy");
	nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// -------------------------- for menu page using JQuary
$.ajax({
	type: 'get',
	url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',

	success: function (response) {

		for (var i = 0; i<response.meals.length; i++) {

			var newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
			   <p>${response.meals[i].strMeal}</p>
			   <img src=${response.meals[i].strMealThumb} class='img-fluid'/>
			   <p>${"Rs."+(response.meals[i].idMeal)/100}</p>
			</div>`

			$('#myitems').append(newitem)
		}
	},

	error: function (error) {
		console.log(error)
	}
})

// ------------------------------------------------ for contact page: form validate
function validateForm(event) {
  event.preventDefault();

  // Clear previous error messages
  const errorElements = document.getElementsByClassName("error");
  Array.from(errorElements).forEach(element => {
    element.textContent = "";
  });

  // Retrieve form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Validate each field
  let isValid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  if (subject.trim() === "") {
    document.getElementById("subjectError").textContent = "Subject is required";
    isValid = false;
  }

  if (message.trim() === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    // Submit the form or perform further actions
    console.log("Form submitted");
    document.getElementById("contactForm").reset(); // Clear form inputs
  }
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  const emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
}
