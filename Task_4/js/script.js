$(document).ready(function() {
    // Registration form submission
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        const name = $('#registerName').val();
        const email = $('#registerEmail').val();
        const password = $('#registerPassword').val();

        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                password: password
            },
            success: function(response) {
                try {
                    const data = JSON.parse(response);
                    alert(data.message);
                } catch (e) {
                    console.error("Error parsing response as JSON: ", e);
                    console.error("Response: ", response);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error: " + textStatus, errorThrown);
                console.error("Response: ", jqXHR.responseText);
            }
        });
    });

    // Login form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();

        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                try {
                    const data = JSON.parse(response);
                    alert(data.message);
                    if (data.success) {
                        loadEvents();
                    }
                } catch (e) {
                    console.error("Error parsing response as JSON: ", e);
                    console.error("Response: ", response);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error: " + textStatus, errorThrown);
                console.error("Response: ", jqXHR.responseText);
            }
        });
    });

    // Event form submission
    $('#eventForm').submit(function(e) {
        e.preventDefault();
        const title = $('#eventTitle').val();
        const description = $('#eventDescription').val();
        const date = $('#eventDate').val();

        $.ajax({
            url: 'create_event.php',
            type: 'POST',
            data: {
                title: title,
                description: description,
                date: date
            },
            success: function(response) {
                try {
                    const data = JSON.parse(response);
                    alert(data.message);
                    if (data.message === 'Event created successfully') {
                        $('#eventModal').modal('hide'); // Hide the modal after successful submission
                        loadEvents();
                    }
                } catch (e) {
                    console.error("Error parsing response as JSON: ", e);
                    console.error("Response: ", response);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error: " + textStatus, errorThrown);
                console.error("Response: ", jqXHR.responseText);
            }
        });
    });

    // Function to load events
    function loadEvents() {
        $.get('get_events.php', function(response) {
            try {
                const events = JSON.parse(response);
                $('#eventList').empty();
                events.forEach(event => {
                    $('#eventList').append(`
                        <li class="list-group-item">
                            <h5>${event.title}</h5>
                            <p>${event.description}</p>
                            <small>${event.date}</small>
                        </li>
                    `);
                });
            } catch (e) {
                console.error("Error parsing response as JSON: ", e);
                console.error("Response: ", response);
            }
        });
    }
});
