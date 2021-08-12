var context = '';

$('#sub').click(() => {
    let userMsg = $('#message').val();
    $('#message').empty();
    //console.log(userMsg);
    $('#message-box').append(`<li class="right">User: ${userMsg}</li>`)
    let postBody = {
        sessionId: '12345',
        query: userMsg,
        contexts: context
    }
    postBody = JSON.stringify(postBody)
    const url = 'http://localhost:4000/api/v1/dialog-flow';
    //console.log(postBody)
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
            //console.log(data);
            $('#message-box').append(`<li class="left">DialogFlow: ${data.response}</li>`)
        })
})