const fs = require('fs');
module.exports = (req, res) => {
    const data = req.query.data;
    fs.appendFileSync('logs.txt', atob(data) + '\n');
    res.sendStatus(200);
};
