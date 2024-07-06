function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var terms = document.getElementById("terms").checked;
    var isValid = true;
  
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("termsError").textContent = "";
  
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required";
      isValid = false;
    } else {
    
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
      }
    }

    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
      isValid = false;
    }
  
    if (!terms)
    {
      document.getElementById("termsError").textContent = "You must accept the terms and conditions";
      isValid = false;
    }
  
    return isValid;
  }
  