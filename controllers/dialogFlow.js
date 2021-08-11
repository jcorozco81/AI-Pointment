const catchAsync = require('./../utils/catchAsync');
const fetch = require('node-fetch');

exports.message = catchAsync(async (req, res, next) => {
    const response = req.body;

    fetch('https://ai-pointment.ethanharsh.com/')
        .then(res => res.text())
        .then(body => console.log(body));
})