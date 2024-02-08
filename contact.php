<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your@email.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    mail($to, $subject, $email_message, $headers);

    // Redirect to a thank you page or display a success message
    header("Location: thank_you.html");
    exit;
}
?>
