const catchAsync = require('./../utils/catchAsync');
const fetch = require('node-fetch');
const { response } = require('express');

exports.sendToDF = catchAsync(async (req, res, next) => {
    const userResponse = req.body;
    //console.log(req.body);
    fetch('https://ai-pointment.ethanharsh.com/',
        {
            method: 'POST', body: JSON.stringify(userResponse), headers: {
                'Content-Type': 'application/json',
                'apiKeyStr': process.env.API_KEY
            }
        }
    )
        .then(result => result.json())
        .then(data => {
            console.log(data.intentResponse.queryResult.intent.displayName);
            console.log(data.intentResponse.queryResult);

            const response = data.intentResponse.queryResult.fulfillmentText;
            const context = data.intentResponse.queryResult.outputContexts;

            res.status(200).json({
                response,
                context
            });
        });
})