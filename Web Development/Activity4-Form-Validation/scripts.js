document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const phone = document.getElementById("phone");
  const submitBtn = document.getElementById("submitBtn");
  const togglePassword = document.getElementById("togglePassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const phoneError = document.getElementById("phoneError");
  const emailStatus = document.getElementById("emailStatus");
  const passwordStrength = document.getElementById("passwordStrength");
  const passwordTooltip = document.getElementById("passwordTooltip");
  const submitTooltip = document.getElementById("submitTooltip");

  const validateName = () => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(fullName.value)) {
      nameError.textContent = "Full name must be at least 3 characters and contain only letters and spaces.";
      return false;
    }
    nameError.textContent = "";
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.textContent = "Invalid email address.";
      emailStatus.textContent = "Invalid email";
      emailStatus.style.color = "red";
      return false;
    }
    emailError.textContent = "";
    emailStatus.textContent = "Valid email";
    emailStatus.style.color = "green";
    return true;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
      passwordError.textContent = "Invalid password format.";
      passwordStrength.textContent = "Weak";
      passwordStrength.style.color = "red";
      return false;
    }
    passwordError.textContent = "";
    if (password.value.length >= 12) {
      passwordStrength.textContent = "Strong";
      passwordStrength.style.color = "green";
    } else {
      passwordStrength.textContent = "Moderate";
      passwordStrength.style.color = "orange";
    }
    return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
      phoneError.textContent = "Phone number must be exactly 10 digits.";
      return false;
    }
    phoneError.textContent = "";
    return true;
  };

  const validateForm = () => {
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidPhone = validatePhone();
    return isValidName && isValidEmail && isValidPassword && isValidPhone;
  };

  fullName.addEventListener("keyup", validateName);
  email.addEventListener("keyup", validateEmail);
  password.addEventListener("keyup", validatePassword);
  phone.addEventListener("keyup", validatePhone);

  password.addEventListener("mouseover", () => {
    passwordTooltip.style.display = "block";
  });

  password.addEventListener("mouseout", () => {
    passwordTooltip.style.display = "none";
  });

  togglePassword.addEventListener("click", () => {
    const passwordFieldType = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", passwordFieldType);
    togglePassword.textContent = passwordFieldType === "password" ? "Show" : "Hide";
  });
   

  submitBtn.addEventListener("mouseover", () => {
    if (!validateForm()) {
      submitTooltip.style.display = "block";
    }
  });

  submitBtn.addEventListener("mouseout", () => {
    submitTooltip.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
});
