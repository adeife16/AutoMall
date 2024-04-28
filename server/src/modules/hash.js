const crypto = require('crypto');
const bcrypt = require('bcrypt');

function generateHash(input) {
    try {
        const inputString = String(input);

        const hash = crypto.createHash('sha512');
        hash.update(inputString, 'utf-8');
        return hash.digest('hex');
    }
    catch (error) {
        console.error('Error generating hash:', error.message);
        return null; // or throw the error if you want to handle it elsewhere
    }
}

async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Function to compare a password with a hashed password
async function comparePasswords(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

module.exports = {
    generateHash: generateHash,
    hashPassword: hashPassword,
    comparePasswords: comparePasswords
};
