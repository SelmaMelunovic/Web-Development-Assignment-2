
const passwordInput = $("#password");
const strengthMeter = $("#password-strength-meter");
const strengthText = $("#password-strength-text");

passwordInput.on("input", function () {
    const password = passwordInput.val();
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    strengthMeter.css("width", `${strength * 25}%`);
    const strengthColors = ["red", "orange", "yellow", "green"];
    strengthMeter.css("background-color", strengthColors[strength - 1] || "red");

    const strengthTextValues = ["Weak", "Fair", "Good", "Strong"];
    strengthText.text(strengthTextValues[strength - 1] || "Very Weak");
});

const showNotification = (s_message,f_message,state) => {
    const notification = document.createElement('div')
    notification.classList.add("notification")

    if(state == "success"){
        notification.innerHTML = `
        <p id="s_notification">${s_message}</p>
        `
    }
    else{
        notification.innerHTML = `
        <p id="f_notification">${f_message}</p>
        `
    }

    document.body.appendChild(notification)

    setTimeout(() => {
        document.body.removeChild(notification)
    },3000)
}

showNotification("successful","","success")

$('#registration-form').on('submit', function(event) {
    event.preventDefault(); 

    const formData = $(this).serialize();  

    
    $.ajax({
        url: '/submit',  
        method: 'POST',
        data: formData,
        success: function(response) {
           
            toastr.success('Your data has been saved successfully!');
           
            $('#registration-form')[0].reset();
        },
        error: function(error) {
           
            toastr.error('There was an issue saving your data. Please try again.');
        }
    });
});