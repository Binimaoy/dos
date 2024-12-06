function validateForm() {
    const cardNumber = document.getElementById('cardnumber').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    if (!/^\d{9}$/.test(cardNumber)) {
        alert("Card number must be a 9-digit number.");
        return false;
    }

    
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (!/^\d{11}$/.test(phone)) {
        alert("Phone number must be a 11-digit number.");
        return false;
    }

    return true;
}


function validateForm() {
    const cardNumber = document.getElementById('cardnumber').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

  
    if (!/^\d{9}$/.test(cardNumber)) {
        alert("Card number must be a 9-digit number.");
        return false;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!/^\d{11}$/.test(phone)) {
        alert("Phone number must be a 11-digit number.");
        return false;
    }

    return true;
}

$('#registrationForm').submit(function (e) {
    e.preventDefault();

    const formData = {
        Card Number: $('#Card Number').val(),
        Name: $('#Name').val(),
        Birthday: $('#Birthday').val(),
        Sex: $('#Sex').val(),
        Address: $('#Address').val(),
        Phone Number: $('#Phone Number').val(),
        Secondary Phone Number: $('#Secondary Phone Number').val(),
        Email: $('#Email').val(),
        Secondary Email: $('#Secondary Emaile').val(),
        College: $('#College').val(),
        Course: $('#Course').val(),
        Registration Date: $('#Registration Date').val(),
        Expiry Date: $('#Expiry Date').val(),
        

        
    };

    $.ajax({
        url: 'http://10.10.139.82:8000/api/patrons',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function (response) {
            if (response.errors) {
                displayErrors(response.errors);
            } else {
                alert('Form submitted successfully!');
            }
        },
        error: function (xhr) {
            const response = xhr.responseJSON;
            if (response && response.errors) {
                displayErrors(response.errors);
            }
        }
    });
});
10.10.139.82
