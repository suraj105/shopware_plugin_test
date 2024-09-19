document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the table elements
    var showAllBtn = document.getElementById('showAllUsersBtn');
    var showBirthdayBtn = document.getElementById('showBirthdayUsersBtn');
    var userDataTable = document.getElementById('userDataTable');
    var tbody = userDataTable.querySelector('tbody');

    // Function to reset the table (make all rows visible)
    function resetTable() {
        var rows = tbody.querySelectorAll('tr');
        rows.forEach(function(row) {
            row.style.display = '';  // Reset the display to default
            row.classList.remove('birthday-highlight');  // Remove highlight class
        });
    }

    // Add click event to show all users and highlight birthday users
    showAllBtn.addEventListener('click', function() {
        // Show the table
        userDataTable.style.display = 'block';

        // Reset the table to show all users
        resetTable();

        // Get today's date
        var today = new Date();
        var todayMonth = today.getMonth() + 1; // JavaScript months are zero-based
        var todayDay = today.getDate();

        // Track if any users have a birthday
        var birthdayUsers = [];

        // Iterate over each row to check the DOB and highlight birthday users
        tbody.querySelectorAll('tr').forEach(function(row) {
            var dobCell = row.cells[2]; // The DOB is in the third column (index 2)
            var dobValue = dobCell.textContent || dobCell.innerText;

            // Extract the month and day from the DOB (format: yyyy-mm-dd)
            var dobParts = dobValue.split('-');
            var dobMonth = parseInt(dobParts[1], 10); // Month part
            var dobDay = parseInt(dobParts[2], 10);   // Day part

            // Check if the DOB's month and day match today's month and day
            if (dobMonth === todayMonth && dobDay === todayDay) {
                // Highlight the row if the user's birthday is today
                row.classList.add('birthday-highlight');
                // Collect the username (assuming it's in the first column)
                var username = row.cells[0].textContent || row.cells[0].innerText;
                birthdayUsers.push(username);
            }
        });

        // Display the pop-up based on whether there are birthday users
        if (birthdayUsers.length > 0) {
            alert("Birthday today: " + birthdayUsers.join(', '));
        } else {
            alert("No one has a birthday today.");
        }
    });

    // Add click event to show only birthday users
    showBirthdayBtn.addEventListener('click', function() {
        // Show the table
        userDataTable.style.display = 'block';

        // Reset the table to show all users (initially hide all)
        resetTable();

        // Get today's date
        var today = new Date();
        var todayMonth = today.getMonth() + 1; // JavaScript months are zero-based
        var todayDay = today.getDate();

        // Track if any users have a birthday
        var birthdayUsers = [];

        // Iterate over each row to check the DOB and show only birthday users
        tbody.querySelectorAll('tr').forEach(function(row) {
            var dobCell = row.cells[2]; // The DOB is in the third column (index 2)
            var dobValue = dobCell.textContent || dobCell.innerText;

            // Extract the month and day from the DOB (format: yyyy-mm-dd)
            var dobParts = dobValue.split('-');
            var dobMonth = parseInt(dobParts[1], 10); // Month part
            var dobDay = parseInt(dobParts[2], 10);   // Day part

            // Check if the DOB's month and day match today's month and day
            if (dobMonth === todayMonth && dobDay === todayDay) {
                // Show the row if the user's birthday is today
                row.style.display = '';  // Ensure the row is visible
                // Collect the username (assuming it's in the first column)
                var username = row.cells[0].textContent || row.cells[0].innerText;
                birthdayUsers.push(username);
            } else {
                // Hide the row if the user's birthday is not today
                row.style.display = 'none';  // Hide the row
            }
        });

        // Display the pop-up based on whether there are birthday users
        if (birthdayUsers.length > 0) {
            alert("Birthday today: " + birthdayUsers.join(' , '));
        } else {
            alert("No one has a birthday today.");
        }
    });
});
