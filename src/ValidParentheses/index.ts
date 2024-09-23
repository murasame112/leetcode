function isValid(s: string): boolean {
    const startStack: string[] = s.split('');
    const finalStack: string[] = [];

    if (killOdd(s)) {
        return false;
    }

    let length = startStack.length;
    for (let i = 0; i <= length; i++) {
        if (
            checkBrackets(
                startStack[startStack.length - 1],
                finalStack[finalStack.length - 1]
            )
        ) {
            startStack.pop();
            finalStack.pop();
        } else {
            if (startStack.length > 0) {
                let bracket = startStack.pop();
                finalStack.push(bracket!);
            } else {
                if (finalStack.length > 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }

    return false;
}

function checkBrackets(a: string, b: string) {
    if (a === '(' && b === ')') return true;
    if (a === '[' && b === ']') return true;
    if (a === '{' && b === '}') return true;
    return false;
}

function killOdd(a: string) {
    if (a.length % 2 === 0) {
        return false;
    }
    return true;
}

//const s = "()[]{})";
const s = '([]{})';
console.log(isValid(s));
