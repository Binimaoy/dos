<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $cardnumber = htmlspecialchars($_POST['cardnumber']);
    $name = htmlspecialchars($_POST['name']);
    $birthday = htmlspecialchars($_POST['birthday']);
    $sex = htmlspecialchars($_POST['sex']);
    $address = htmlspecialchars($_POST['address']);
    $phone = htmlspecialchars($_POST['phone']);
    $secondary_phone = htmlspecialchars($_POST['secondary_phone']);
    $email = htmlspecialchars($_POST['email']);
    $secondary_email = htmlspecialchars($_POST['secondary_email']);
    $college = htmlspecialchars($_POST['college']);
    $course = htmlspecialchars($_POST['course']);
    $registration_date = htmlspecialchars($_POST['registration_date']);
    $expiry_date = htmlspecialchars($_POST['expiry_date']);

    
    echo "Registration Successful! Here are the details:<br>";
    echo "Card Number: $cardnumber<br>";
    echo "Name: $name<br>";
    echo "Birthday: $birthday<br>";
    echo "Sex: $sex<br>";
    echo "Address: $address<br>";
    echo "Phone: $phone<br>";
    echo "Secondary Phone: $secondary_phone<br>";
    echo "Email: $email<br>";
    echo "Secondary Email: $secondary_email<br>";
    echo "College: $college<br>";
    echo "Course: $course<br>";
    echo "Registration Date: $registration_date<br>";
    echo "Expiry Date: $expiry_date<br>";
}
?>
