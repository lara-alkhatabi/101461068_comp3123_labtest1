const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Change process to the new Logs directory
process.chdir(logDir);

// Create 10 log files and write some text in them
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
}
