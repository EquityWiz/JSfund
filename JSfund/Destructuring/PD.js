const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// 1 - Tesla
// 2 - Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

// 1 - Reference Error
// 2 - Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

// 1 - 12345
// 2 - undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// 1 - False
// 2 - True

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// 1 - value
// 2 - [1, 5, 1, 8, 3, 3]
// 3 - 1
// 4 - 5

let arr1 = [3,88,21,9,5,7,22,100,2,6,12,11,18,44,38,1,4]

function Sort(arr, p)
{
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = arr.length ; j >= 0; j--)
        {
            if(arr[i] > arr[p])
            {
                arr[j] = arr[i]
            }
            if(arr[j] < arr[p])
            {
                arr[i] = arr[j]
            }
            if(i == p)
            {
                Sort(arr, floor(p/2))
            }
            if(j == p)
            {
                Sort(arr, floor(p*1.5))
            }
        }
    }
    console.log(arr);
}

Sort(arr1, 7)