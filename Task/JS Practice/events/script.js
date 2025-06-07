 // This function logs events to the event log section
 function logEvent(msg) {
    const logList = document.getElementById('logList');
    const li = document.createElement('li');
    const time = new Date().toLocaleTimeString(); // Get current time
    li.textContent = `[${time}] ${msg}`; // Create log message
    logList.prepend(li); // Add to the top of the log
  }
  // Mouse click event handler
  function handleClick() {
    logEvent("Button clicked");
  }
  // Mouse double-click event handler
  function handleDoubleClick() {
    logEvent("Button double-clicked");
    showMessage(); // Show message after double click
  }

  // Mouse down event handler
  function handleMouseDown() {
    logEvent("Mouse down"); // Log mouse down event
  }

  // Mouse up event handler
  function handleMouseUp() {
    logEvent("Mouse up"); // Log mouse up event
  }

  function startVibration() {
    // Add vibration animation to the button when mouse enters
    let btn = document.getElementById('clickMe');
    btn.style.background = "#00ffd0";
    btn.style.color = "#111";
    btn.style.animation = 'vibrate 0.3s linear infinite';
  }

  function stopVibration() {
    // Stop the vibration animation when mouse leaves
    let btn = document.getElementById('clickMe');
    btn.style.background = "#222";
    btn.style.color = "#00ffd0";
    btn.style.animation = 'none';
  }

  function hoverStart() {
    document.getElementById('hoverBox').classList.add('hovered');
    logEvent("Mouse entered hover area");
  }

  function hoverEnd() {
    document.getElementById('hoverBox').classList.remove('hovered');
    logEvent("Mouse left hover area");
  }

  function handleBoxDoubleClick() {
    const box = document.getElementById('hoverBox');
    box.classList.toggle('doubleClicked');
    logEvent("Box double-clicked");
  }

  function logKey(e) {
    const box = document.getElementById('keyLogBox');
    const key = e.key === " " ? "[SPACE]" : e.key;
    box.value += key;
    logEvent(`Key Down: ${key}`);
  }

  function logKeyUp(e) {
    logEvent(`Key Up: ${e.key}`);
  }

  function showMessage() {
    const message = document.getElementById('hiddenMessage');
    message.style.display = 'inline';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }

  // Validation Functions
  function validateName() {
    const name = document.getElementById('nameInput').value;
    const errorDiv = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/;

    if (!nameRegex.test(name)) {
      errorDiv.textContent = "Only alphabets allowed, max two words.";
      return false;
    }
    errorDiv.textContent = "";
    return true;
  }

  function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const errorDiv = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{3}$/;

    if (!emailRegex.test(email)) {
      errorDiv.textContent = "Please enter a valid email (e.g. abc@xyz.com)";
      return false;
    }

    errorDiv.textContent = "";
    return true;
  }

  function validatePhone() {
    const phone = document.getElementById('phoneInput').value;
    const errorDiv = document.getElementById('phoneError');
    const phoneRegex = /^[0-9]{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      errorDiv.textContent = "Phone number must be 10 digits.";
      return false;
    }
    errorDiv.textContent = "";
    return true;
  }

  function validateWebsite() {
    let website = document.getElementById('websiteInput').value.trim();
    const errorDiv = document.getElementById('websiteError');

    // If user didn't include http:// or https://, add https:// by default
    if (website && !website.startsWith('http://') && !website.startsWith('https://')) {
      website = 'https://' + website;
      document.getElementById('websiteInput').value = website; // Update input field
    }

    const websiteRegex = /^(https?:\/\/)?(www\.)?[\w\-]+\.[\w\-]+\.[a-zA-Z]{2,3}$/;

    if (website && !websiteRegex.test(website)) {
      errorDiv.textContent = "Enter a valid URL (e.g. www.example.com)";
      return false;
    }

    errorDiv.textContent = "";
    return true;
  }


  function submitForm(e) {
    e.preventDefault();
    

    const validName = validateName();
    const validEmail = validateEmail();
    const validPhone = validatePhone();
    const validWebsite = validateWebsite();

    if (validName && validEmail && validPhone && validWebsite) {
      logEvent("Form submitted successfully");
      alert("Form submitted successfully!");
      e.target.reset();
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
    } else {
      logEvent("Form submittion unsuccessful");
      alert("Please correct the errors before submitting.");
    }
  }