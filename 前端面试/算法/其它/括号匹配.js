// () [] {}
function isMatch(str) {
    let queue = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '{' || str[i] === '(' || str[i] === '[' ) {
            queue.push(str[i]);
        }
        if(str[i] === '}') {
            let sign = queue.pop();
            if(queue.length <= 0 || sign !=='{') return false;
        }

        if(str[i] === ')') {
            let sign = queue.pop();
            if(queue.length <= 0 || sign !== '(') return false;
        }

        if( str[i] === ']') {
            let sign = queue.pop();
            if(queue.length <= 0 || sign !== '[') return false;
        }
    }
    return queue.length > 0 ? false : true;
}

console.log(isMatch('()'));


