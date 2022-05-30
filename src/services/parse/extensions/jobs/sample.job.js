// var schedule = require('node-schedule');

/**
 * Define background job
 */
Parse.Cloud.job("order66", function (request) {
    var date = new Date();
    console.log(`[${date}] sampleJob running`);
    return Promise.resolve(request);
});

/**
 * Define scheduling rules
 */
// schedule.scheduleJob('*/15 * * * * *', function () {
//     Parse.Cloud.startJob('order66');
// });
