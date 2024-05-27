<?php
// backend.php

// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "portfolio_db"; // Ganti dengan nama database Anda

// Create connection
$conn = new mysqli($localhost, $username, $password, $portfolio_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the form data
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
    } else {
        // Save the form data to the database
        $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
        if ($conn->query($sql) === TRUE) {
            echo "Thank you for your message!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

// Close the database connection
$conn->close();
?>
