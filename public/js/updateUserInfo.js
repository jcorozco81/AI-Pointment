console.log("loaded signup");
const loader = `    <div class="preloader-wrapper big active center" style="margin-top: 2rem;">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
        `

const updateUserInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');
  console.log(id);
  //console.log("You clicked me!");


  const first_name = $('#first_name').val();
  //console.log(first_name);

  const last_name = $('#last_name').val();
  //console.log(last_name);

  const phone = $('#phone').val();
  //console.log(phone);

  const address = $('#address').val();

  $('#user-update').empty().append(`<h1 class="info-heading">User Info</h1>`).append(loader);
  //console.log(address);
  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ first_name, last_name, phone, address }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  if (response.ok) {
    //   document.location.replace('/profile');
    $('#user-update').empty().append('Successfully updated!');
  } else {
    alert("Test" + response.statusText);
  }
}

const updateCarInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');
  //console.log(car_make);
  const car_make = $('#make').val();
  const car_model = $('#model').val();
  //console.log(car_model);

  const year = $('#year').val();
  const car_year = parseInt(year);
  //console.log(car_year);
  $('#car-update').empty().append(`<h1 class="info-heading">Car Info</h1>`).append(loader);

  console.log(id);

  console.log(car_make);
  console.log(car_model);
  console.log(car_year);

  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ car_make, car_model, car_year }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response.ok)
  if (response.ok) {
    $('#car-update').empty().append('Successfully updated!');
  } else {
    alert("Test" + response.statusText);
  }
}

window.onload = function () {
  console.log("loaded function signup");
  document
    .querySelector("#update")
    .addEventListener("click", updateUserInfo);

  document
    .querySelector("#update-car")
    .addEventListener("click", updateCarInfo);
}


let userId = $('#update').attr('user-id');
console.log(userId);
fetch(`/api/v1/slots/by-user/${userId}`)
  .then(data => data.json())
  .then(data => {
    console.log(data)
    if (data.length > 0) {
      $('#apts').empty();
      data.forEach(el => {
        const str = `<div class="appointment-slot"><h2 class="apt-date">${el.date}</h2><h3 class="apt-time">${el.timeid.timestring}-${parseInt(el.timeid.timestring) + 1}:00</h3><h4 class="apt-service">${el.service.name}</h4></div>`;
        console.log(el);
        console.log(str);
        $('#apts').append(str);
      })
    }
  })