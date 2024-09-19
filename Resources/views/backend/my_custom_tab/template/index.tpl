{block name="backend/my_custom_tab/template/index"}
    <div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="panel-title">Customer's Birthday Information</h1>
        </div>
        <div class="panel-body">
            <!-- Button to show all users and highlight birthdays -->
            <button id="showAllUsersBtn" class="btn btn-primary">Show All Users</button>

            <!-- Button to show only users with birthdays today -->
            <button id="showBirthdayUsersBtn" class="btn btn-success">Show Birthday Users</button>

            <!-- Table to display user information, initially hidden -->
            <div id="userDataTable" style="display: none; margin-top: 20px;">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foreach $users as $user}
                        <tr>
                            <td>{$user.firstname}</td>
                            <td>{$user.lastname}</td>
                            <td>{$user.birthday}</td>
                        </tr>
                    {/foreach}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Link to the external CSS and JavaScript files -->
    <link rel="stylesheet" type="text/css" href="{link file='backend/my_custom_tab/css/style.css'}">
    <script type="text/javascript" src="{link file='backend/my_custom_tab/js/show_user_data.js'}"></script>
{/block}
