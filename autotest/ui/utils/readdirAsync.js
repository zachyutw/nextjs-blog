const fs = require('fs');
const readdirAsync = function (directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, filenames = []) => {
            if (err) reject(err);
            //sort with filename
            else resolve(filenames.sort((a, b) => a - b));
        });
    });
};

module.exports = readdirAsync;
