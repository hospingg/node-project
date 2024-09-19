module.exports = (text) => {
        if(text === ''){
                throw new Error('Файл пустий');
        }
        return text.split("\n").filter(line => line !== '');
        
        
                
        
        
};
    