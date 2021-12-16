// Задание 1

/* function getResult(num1,num2,num3) {
    let result = (num1 + num2) / num3;
    return result;
}

console.log(getResult(4,5,10)); */


// Задание 2

/* function getResult(a,b) {
    let result = a**b;
    return result;
}

console.log(getResult(4,3));
console.log(getResult(4,2)); */


// Задание 3

/* function Min(a,b) {
        if(a<b) {
            return a;
        }
    return b;
}

function Max(a,b) {
    if(a<b) {
        return b;
    }
return a;
}

console.log('Min ' + Min(23,14),'Max ' + Max(23,14)) */


// Задание 4

/* let i = +prompt('Введите начало массива', ''),
    j = +prompt('Введите конец массива', '');

function createArr(i,j) {
    let arr = [];
        for(; i <= j; i++) {
            arr.push(i);
        }
    return arr;
}

function getArr() {
    console.log(createArr(i,j))
}

getArr();
 */

// Задание 5

/* function isEven(a) {
        if (a%1 !== 0) {
            return ('Это не целое число')
        } else if (a % 2 == 0) {
            return true;
        }
    return false;
}

console.log(isEven(12)); */


// Задание 6
/* console.log('Задание 6-----------------------')

let Array = createArr(i,j);

function transfArr(Array) {
    let newArray = [];
        for(let i = 0; i < Array.length; i++) {
            if (isEven(Array[i])) {
                newArray.push(Array[i])
            }
        }
    return newArray
}

console.log(transfArr(Array)); */


// Задание 7

/* function getPyramid(height) {
    for(let i = 1; i <= height; i++) {
        for(let j = 0; j < i; j++) {
            if(arguments.length > 1) {
                document.write(arguments[1]);
            } else {   
                document.write(i);
            }
        } document.write(`<br />`)
    }
}

getPyramid(9); */


// Задание 8

/* function getTree(height) {
    for(let i = 1; i <= height; i++) {
        for(let k = 0; k < height - i; k++) {
            document.write('&nbsp;');
        }
        for(let j = 0; j < i; j++) {
                document.write('*');
            }
        document.write(`<br />`)
    }
}
getTree(9);

function getTreeReverse(height) {
    for(let i = 1; i <= height; i++) {
        for(let k = height; k > height - i; k--) {
            document.write('&nbsp;');
        }
        for(let j = height; j > i; j--) {
                document.write('*');
            }
        document.write(`<br />`)
    }
}
getTreeReverse(9); */


// Задание 9
// Задание 10
// Задание 11
// Задание 12
// Задание 13