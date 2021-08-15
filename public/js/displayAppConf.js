$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}


$(function() {

    const slotsURL = `http://localhost:4000/api/v1/slots/${$.urlParam('id')}`;

    fetch(slotsURL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            $('#confirmationNumber').append(`<h2><stropng>AI-Pointment Confirmation #:</strong> ${data.id}`)
            $('#serviceMessage').append(`<h3><strong>Your service has been successfully scheduled for ${data.date}.</strong></h3>`)
        })
        .catch(function(err) {
            console.log(err);
        })
        

});