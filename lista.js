// QUESTÃO 1

function checkArray(arr){
    if (Array.isArray(arr)){
        return true;
    } else {
        return false;
    }
}

// QUESTÃO 2

function cloneArray(arr){
    let newArr = arr.slice();
    
    return newArr;
}

// QUESTÃO 3

function firstArraysItems(n, arr){
    let resultArr = []; 

    for (let i = 0; i < n; i ++){
        num = arr[i];
        resultArr.push(num);
    }

    return resultArr
}

// QUESTÃO 4

function lastArraysItems(n, arr){
    let resultArr = [];

    for (let i = arr.length - n; i < arr.length; i++){
        num = arr[i];
        resultArr.push(num);
    }

    return resultArr
}

// QUESTÃO 5 

function mashupArray(arr){
    let newArr = arr.join('');
    
    return newArr;
}

// QUESTÃO 6

function separateEvens(n){
    let numString = n.toString();
    let result = "";

    for (let i = 0; i < numString.length; i++) {
        result += numString[i];

        if (numString[i] % 2 === 0 && numString[i + 1] % 2 === 0) {
            result += "-";
        }
    }

    return result;
}

// QUESTÃO 7

function mostFrenquecy(arr){
    let maxCount = 0;
    let count;
    let indexItemMostFrequence = 0;

    for (let i = 0; i < arr.length; i++){
        count = 0;

        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]){
                count++;
            }
        }

        if (count > maxCount){
            maxCount = count;
            indexItemMostFrequence = i;
        }
    }

    return arr[indexItemMostFrequence];
}

// QUESTÃO 8

function removeDuplicated(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// QUESTÃO 9 

function sumArrays(arr1, arr2){
    let newArr = [];

    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i] + arr2[i]);
    }

    return newArr;
}

// QUESTÃO 10

function mixArrays(arrStack, arrAdd){
    let newArr = arrStack.slice();

    for (let i = 0; i < arrAdd.length; i++){
        newArr.push(arrAdd[i]);
    }

    return console.log(newArr);
}