var context = '';
var generateID = Math.floor(Math.random() * 10000);

timeID = [ // timeID not available by API call?
    {
      "id": 10,
      "timestring": "7:00"
    },
    {
      "id": 20,
      "timestring": "8:00"
    },
    {
      "id": 30,
      "timestring": "9:00"
    },
    {
      "id": 40,
      "timestring": "10:00"
    },
    {
      "id": 50,
      "timestring": "11:00"
    },
    {
      "id": 60,
      "timestring": "12:00"
    },
    {
      "id": 70,
      "timestring": "13:00"
    },
    {
      "id": 80,
      "timestring": "14:00"
    },
    {
      "id": 90,
      "timestring": "15:00"
    },
    {
      "id": 100,
      "timestring": "16:00"
    }
  ]

$(function() {
    $.each(timeID, function(i) {
        $('#selectTime').append(`<option value="${timeID[i].id}">${timeID[i].timestring}</option>`);
    });

    const userURL = 'http://localhost:4000/api/v1/user/';

    fetch(userURL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            $('#userID').val(data[0].id);
            if (!(data[0].car_model == null) || !(data[0].car_make == null) || !(data[0].carm_year == null)) {
                $('#carMake').val(data[0].car_year + " " + data[0].car_make + " " + data[0].car_model);
            } else {
                $('#carMake').val('');
            }
        })
        .catch(function(err) {
            console.log(err);
        })
        
    // dynamically fill select field for services
    const serviceURL = 'http://localhost:4000/api/v1/service/';
    fetch(serviceURL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => data.json())
        .then(data => {
            $.each(data, function(i) {
                $('#selectService').append(`<option value="${data[i].id}">${data[i].name}</option>`);
                $('select').formSelect(); // FOR THE LOVE OF GOD DO NOT MOVE
            });
        })
        .catch(function(err) {
            console.log(err);
        })
        $('select').formSelect(); // FOR THE LOVE OF GOD DO NOT MOVE
});

$('#sub').click((event) => {
    event.preventDefault(); // stops button submission
    $('#welcome-message').remove();
    let userMsg = $('#message').val();
    //console.log(userMsg);
    $('#message-box').append(`<div class="card-panel teal lighten-2 grid-example col s12">User: ${userMsg}</div>`)
    let postBody = {
        sessionId: generateID,
        query: userMsg,
        contexts: context
    }
    postBody = JSON.stringify(postBody)
    const url = 'http://localhost:4000/api/v1/dialog-flow';
    console.log(postBody)
    fetch(url, {
        method: 'POST',
        body: postBody,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => data.json())
        .then(data => {
            /* ADD RESPONSE TEXT TO MESSAGE BOX AND SAVE CONTEXT IF CONTEXT EXISTS */
            $('#message').val("");
            $('#message-box').append(`<div class="card-panel teal lighten-5 grid-example col s12">DialogFlow: ${data.response}</div>`)
        })
        .catch(function(err) {
            console.log(err);
        })
})

$('#submit-appointment').click((event) => {
    event.preventDefault(); // stops button submission
    let postAppointment = {
        id: $("#userID").val() + Math.floor(Math.random() * 100000),
        time_id: $("#selectTime").val(),
        date: Date.parse($('#dateSlot').val()),
        user_id: $('#userID').val(),
        service_id: $('#selectService').val()
    }
    fetch('/api/v1/slots/', {
        method: 'POST',
        body: JSON.stringify(postAppointment),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(data => data.json()
        .then(data => {
            document.location.replace(`/confirmation?id=${data.id}&service_id=${data.service_id}`);
        })
        .catch(function(err) {
            console.log(err);
        })
    )
});
