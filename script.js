<script>
        function submitForm() {
            var age = document.getElementById('age').value;
            var gender = document.getElementById('gender').value;
            var race = document.getElementById('race').value;
            var time_in_hospital = document.getElementById('time_in_hospital').value;
            var glucose_levels = document.getElementById('glucose_levels').value;
            var patient_nbr = document.getElementById('patient_nbr').value;

            // Do something with the collected values, e.g., send to a server
            console.log("Age: " + age);
            console.log("Gender: " + gender);
            console.log("Race: " + race);
            console.log("Time in Hospital: " + time_in_hospital);
            console.log("Glucose Levels: " + glucose_levels);
            console.log("Patient Number: " + patient_nbr);
        }
    </script>
