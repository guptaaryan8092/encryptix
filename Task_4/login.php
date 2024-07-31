<?php
include 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo json_encode(["message" => "Login successful", "success" => true]);
    } else {
        echo json_encode(["message" => "Invalid password", "success" => false]);
    }
} else {
    echo json_encode(["message" => "No user found with this email", "success" => false]);
}

$conn->close();
?>
