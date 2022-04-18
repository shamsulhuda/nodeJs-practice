const School = require('./school');

// register a listener for event
const school = new School();
school.on('bellRing', ({ period, text }) => {
    console.log(`The class is over becouse, ${period} ${text}`);
});
school.startPeriod();
