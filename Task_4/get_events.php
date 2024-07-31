<?php
include 'db.php';

$user_id = 1; // Hardcoded for simplicity, should be retrieved from session or token

$sql = "SELECT * FROM events WHERE user_id='$user_id'";
$result = $conn->query($sql);
$events = [];
while($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode($events);
$conn->close();
?>
