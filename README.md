<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Age Calculator By J.Pranay</title>
</head>
<body>
   
    <div class="container">
        <h1>Age Calculator</h1>
        <h2>By J.P</h2>
        <label for="dob">Enter your date of birth:</label>
        <input type="date" id="dob" max="<?php echo date('Y-m-d'); ?>">
        <button onclick="calculateAge()">Calculate Age</button>
        <p id="result"></p>
    </div>

    
    <script src="script.js"></script>
</body>
</html>
