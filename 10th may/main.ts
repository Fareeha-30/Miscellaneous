//array

// let fruits = ["apple", "Mango", "Grapes","Kiwi"];//[index number (0,1,2,3)]

// fruits[1] = "orange"// if u want to change in between array (orange will replace mango)

// fruits.push("orange"); // push method add the to end

// let f1 = fruits.push("orange") // current length of array

// fruits.pop() // will remove the item from end

//------------------------------------------------------------------------------------------

// console.log(f1) // length of array

// console.log(fruits[1]); //if you want to print one fruit

// console.log(fruits); //for printing full array

// console.log(fruits.length) // the lenghth of this array is 4

// console.log(fruits[1],fruits[3]) //print with index number

// console.log(fruits.indexOf("Mango")); // give u the index number

// fruits.shift(); // same as pop // what ever is removing from array will return in this function

// console.log(fruits);

///----------------

// fruits.unshift("orange") // add in start of array
// console.log(fruits)

// slice methor.....................................

// let copyFruits = fruits.slice(1)
// console.log(copyFruits)  // it will start copy from index 2

// let copyFruits = fruits.slice(1 , 2) // only mango becoz mango start from 1 and end to 2
// console.log(copyFruits)

// let copyFruits = fruits.slice(1 , 3) // it will print mango and grapes

// console.log(copyFruits);

// console.log(fruits); //print all fruit

// let copyFruits = fruits.slice()
// console.log(fruits); //print all

//splice change in orignal array c

// fruits.splice(1) // will print till 1 it will print apple re,ove all
//fruits.splice(2) ... wil print till mango splice ask for starting point

// fruits.splice(1, 2) // it will remove mango and grapes(1(where u start),2 (how many you want to delete))


// fruits.splice(2,1 , "banana") //(2 meand start from index 2 , 1 means delete 1 element and , "banana" is add banana)
//(2 is index(where to start), 1 number of elements u want to delete, and 3rd is the element you want to add)


// fruits.splice(1 ,2 ,"orange")

// fruits.splice(3, 0 , "pineapple") // print : [ 'apple', 'Mango', 'Grapes', 'pineapple', 'Kiwi' ]
// console.log(fruits)

// let fruits = ["apple", "Mango", "Grapes","Kiwi" , "banana"];

// fruits.splice(2) or //it will  remove 2 onwards
// console.log(fruits)

// fruits.splice(1 , 4, "kiwi") or// fruit.splice(4,1) and fruit.splice(1,2)
// console.log(fruits)

// fruits.splice(2,2, "orange", "strawberry")
// console.log(fruits)

// tappleeee


// let fruits: [string , string] =["apple", "Mango",]; // limit the array u cant add more thm 2 fruits

// let fruits: [string , number] =["apple", 4]; // string define the array method of creating 


// let fruits: [string , boolean] =["apple", false];

// console.log(fruits)


// let num1 : any // you can add anything with this variable willnit give error but in terminal it can give errors
// num1 = 4
// num1 = ["1"]
// num1.xyz

// let num1 : unknown  //allw everythng but can show in error typer
// let num2 :number = 15

// num1 = num2
// num2 = num1 // it will show error bcoz type is unknown we cant assign this



