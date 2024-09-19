document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the table elements
    var showBtn = document.getElementById('showUserDataBtn');
    var userDataTable = document.getElementById('userDataTable');
    var tbody = userDataTable.querySelector('tbody');

    // Add click event to the button
    showBtn.addEventListener('click', function() {
        // Show the table when the button is clicked
        userDataTable.style.display = 'block';

        // Get today's date
        var today = new Date();
        var todayMonth = today.getMonth() + 1; // JavaScript months are zero-based
        var todayDay = today.getDate();

        // Get all the rows in the table body
        var tableRows = tbody.querySelectorAll('tr');

        // Array to store users who have a birthday today
        var birthdayUsers = [];

        // Iterate over each row to check the DOB
        tableRows.forEach(function(row) {
            var dobCell = row.cells[2]; // The DOB is in the third column (index 2)
            var dobValue = dobCell.textContent || dobCell.innerText;

            // Extract the month and day from the DOB (format: yyyy-mm-dd)
            var dobParts = dobValue.split('-');
            var dobMonth = parseInt(dobParts[1], 10); // Month part
            var dobDay = parseInt(dobParts[2], 10);   // Day part

            // Check if the DOB's month and day match today's month and day
            if (dobMonth === todayMonth && dobDay === todayDay) {
                // Highlight the row if the user's birthday is today by adding the class
                row.classList.add('birthday-highlight');

                // Add the user to the birthdayUsers array (first name and last name)
                var userInfo = row.cells[0].textContent + ' ' + row.cells[1].textContent;
                birthdayUsers.push(userInfo);
            }
        });

        // Display a popup with all users who have a birthday today
        if (birthdayUsers.length > 0) {
            alert('Users with a birthday today:\n' + birthdayUsers.join('\n'));
        } else {
            alert('No users have a birthday today.');
        }
    });
});
