console.log("loaded login");


const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText)
        }
    }
};


window.onload = function () {
    console.log("loaded login function");
    document
        .querySelector('#login')
        .addEventListener('click', loginFormHandler);
}
