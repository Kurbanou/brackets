module.exports = function check(str, bracketsConfig) {
  
  
    
    const openingToClosing = new Map();
    const closingToOpening = new Map();

    bracketsConfig.forEach(([open, close]) => {
        openingToClosing.set(open, close);
        closingToOpening.set(close, open);
    });

    const stack = [];

    for (const char of str) {
        if (openingToClosing.has(char)) {
            
            if (openingToClosing.get(char) === char && stack.length && stack[stack.length - 1] === char) {
                
                stack.pop();
            } else {
                
                stack.push(char);
            }
        } else if (closingToOpening.has(char)) {
            
            if (stack.length === 0 || stack[stack.length - 1] !== closingToOpening.get(char)) {
                
                return false;
            }
            stack.pop();
        }
    }

    
    return stack.length === 0;
}

