var context = '';
console.log('active')

$('#sub').click(() => {
    let userMsg = $('#message').val();
    $('#message').val('');
    //console.log(userMsg);
    $('#middle-box').append(`<div class="cust-msg right"><p class="text-response-cust">${userMsg}</p><i class="material-icons face">account_circle</i></div>`)
    let postBody = {
        sessionId: '12345',
        query: userMsg,
        contexts: context
    }
    postBody = JSON.stringify(postBody)
    const url = '/api/v1/dialog-flow';
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
            console.log(data);
            $('#middle-box').append(`<div class="chat-bot-msg"><i class="material-icons face">face</i><p class="text-response">${data.response}</p></div>`)
        })
})
