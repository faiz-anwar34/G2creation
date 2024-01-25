<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $rating = $_POST['rating'];
    $suggestions = $_POST['suggestions'];

    $to = "faizanwar23122006@gmail.com";
    $subject = "New suggestion from web";
    $message = "Name: " . $name . "\r\n"
               . "Email: " . $email . "\r\n"
               . "Rating: " . $rating . "\r\n"
               . "Suggestions: " . $suggestions;
    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your suggestion!";
    } else {
        echo "There was an error sending your suggestion. Please try again later.";
    }
?>