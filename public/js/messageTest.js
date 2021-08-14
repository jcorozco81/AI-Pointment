var context = '';
var generateID = Math.floor(Math.random() * 10000);

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
            console.log(data);
            $('#message').val("");
            $('#message-box').append(`<div class="card-panel teal lighten-5 grid-example col s12">DialogFlow: ${data.response}</div>`)
        })
}).preventDefault()








// var context = '';

// $('#sub').click(() => {
//     let userMsg = $('#message').val();
//     $('#message').empty();
//     //console.log(userMsg);
//     $('#message-box').append(`<li class="right">User: ${userMsg}</li>`)
//     let postBody = {
//         sessionId: '12345',
//         query: userMsg,
//         contexts: context
//     }
//     postBody = JSON.stringify(postBody)
//     const url = 'http://localhost:4000/api/v1/dialog-flow';
//     //console.log(postBody)
//     fetch(url, {
//         method: 'POST',
//         body: postBody,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then(data => data.json())
//         .then(data => {
//             /* ADD RESPONSE TEXT TO MESSAGE BOX AND SAVE CONTEXT IF CONTEXT EXISTS */
//             //console.log(data);
//             $('#message-box').append(`<li class="left">DialogFlow: ${data.response}</li>`)
//         })
// })