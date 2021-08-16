console.log("loaded signup");

const updateUserInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');
  //console.log("You clicked me!");


  const first_name = document.querySelector('#first_name').value.trim();
  //console.log(first_name);

  const last_name = document.querySelector('#last_name').value.trim();
  //console.log(last_name);

  const phone = document.querySelector('#phone').value.trim();
  //console.log(phone);

  const address = document.querySelector('#address').value.trim();
  //console.log(address);

  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ first_name, last_name, phone, address }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //   document.location.replace('/profile');
  } else {
    alert("Test" + response.statusText);
  }
}

const updateCarInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');

  const car_make = document.querySelector('#make').value.trim();
  //console.log(car_make);

  const car_model = document.querySelector('#model').value.trim();
  //console.log(car_model);

  const year = document.querySelector('#year').value.trim();
  const car_year = parseInt(year);
  //console.log(car_year);

  // (first_name && last_name && phone && address && car_make && car_model && car_year) {
  console.log(id);

  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ first_name, last_name, phone, address, car_make, car_model, car_year }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //   document.location.replace('/profile');
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