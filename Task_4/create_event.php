<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


include 'db.php';

$title = $_POST['title'];
$description = $_POST['description'];
$date = $_POST['date'];
$user_id = 1; // Hardcoded for simplicity, should be retrieved from session or token

$sql = "INSERT INTO events (title, description, date, user_id) VALUES ('$title', '$description', '$date', '$user_id')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Event created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $conn->error]);
}

$conn->close();
?>
