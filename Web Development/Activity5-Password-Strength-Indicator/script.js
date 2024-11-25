// script.js
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const passwordStrength = document.getElementById("password-strength");
    const passwordRequirements = document.querySelectorAll("#password-requirements li");
    const confirmError = document.getElementById("confirm-error");
    const togglePassword = document.getElementById("toggle-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
  
    const requirements = {
      minChars: /.{8,}/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /\d/,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/,
    };
  
    const strengthBar = {
      weak: document.querySelector(".strength.weak"),
      moderate: document.querySelector(".strength.moderate"),
      strong: document.querySelector(".strength.strong"),
    };
  
    const toggleVisibility = (input, toggleButton) => {
      if (input.type === "password") {
        input.type = "text";
        toggleButton.textContent = "Hide";
      } else {
        input.type = "password";
        toggleButton.textContent = "Show";
      }
    };
  
    passwordInput.addEventListener("input", () => {
      const value = passwordInput.value;
  
      // Check individual requirements
      Object.entries(requirements).forEach(([key, regex], index) => {
        const element = passwordRequirements[index];
        if (regex.test(value)) {
          element.classList.add("valid");
          element.classList.remove("invalid");
        } else {
          element.classList.add("invalid");
          element.classList.remove("valid");
        }
      });
  
      // Update password strength
      const isWeak = value.length > 0 && value.length < 6;
      const isModerate = value.length >= 6 && /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);
      const isStrong = value.length >= 8 && Object.values(requirements).every((regex) => regex.test(value));
  
      strengthBar.weak.style.backgroundColor = isWeak ? "red" : "#ddd";
      strengthBar.moderate.style.backgroundColor = isModerate ? "yellow" : "#ddd";
      strengthBar.strong.style.backgroundColor = isStrong ? "green" : "#ddd";
    });
  
    confirmPasswordInput.addEventListener("input", () => {
      const passwordsMatch = confirmPasswordInput.value === passwordInput.value;
      confirmError.textContent = passwordsMatch ? "" : "Passwords do not match!";
    });
  
    togglePassword.addEventListener("click", () => toggleVisibility(passwordInput, togglePassword));
    toggleConfirmPassword.addEventListener("click", () => toggleVisibility(confirmPasswordInput, toggleConfirmPassword));
  });
  