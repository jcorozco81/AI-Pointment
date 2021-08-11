const catchAsync = require('./../utils/catchAsync');
const fetch = require('node-fetch');

exports.message = catchAsync(async (req, res, next) => {
    const response = req.body;

    fetch('https://ai-pointment.ethanharsh.com/')
        .then(result => result.json())
        .then(data => {
            console.log(data);

            res.status(200).json({
                data
            });
        });
})