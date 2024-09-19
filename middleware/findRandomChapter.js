const math = require('../math')

module.exports = (textArr) => {
    const randomIndex = math.getRandomInt(textArr.length);
    return textArr[randomIndex];
};