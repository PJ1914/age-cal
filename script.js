function calculateAge() {
    var dob = document.getElementById("dob").value;
    
    if (dob === "") {
        alert("Please enter your date of birth");
        return;
    }

    var dobDate = new Date(dob);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - dobDate.getFullYear();

    if (
        currentDate.getMonth() < dobDate.getMonth() ||
        (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())
    ) {
        age--;
    }

    var result = "Your age is: " + age + " years.";
    document.getElementById("result").innerHTML = result;
}
