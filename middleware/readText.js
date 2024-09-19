const fs = require('fs/promises');

module.exports = async (filePath) => {
    try {
        const text = await fs.readFile(filePath, 'utf-8');
        return text;
    } catch (err) {
        throw new Error(`Не вдалося знайти файл`);
    }
};
