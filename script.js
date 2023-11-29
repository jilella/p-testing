 <script defer>
        function submitForm() {
            // Get the value of time_in_hospital input
            var timeInHospital = document.getElementById("time_in_hospital").value;

            // Convert the value to a number and check if it's less than 5
            var result = parseInt(timeInHospital) < 5 ? 0:1

            // Display the result (you can modify this part based on your requirements)
            alert("Result: " + result);
        }
    </script>
