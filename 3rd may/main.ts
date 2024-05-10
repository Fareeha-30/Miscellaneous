// let user1 ={
//     name : "Fareeha",
//     age : 25,
// };
// //console.log(user1.name); //option 1 
// console.log(user1["name"]); //option 2

// let user1: {
//     name: string;
//     age : number;
//     role :string;
// };
// user1= {
//     name : "fareeha",
//     age : 25,
//     role : "Daughter",
// };

// console.log(user1);


// let user2: {
//     name: string;
//     age: number;
//     role: string;

// };
// user2={
// name : "Madiha",
//     age : 28,
//     role : "Daughter",
// };
// console.log(user2);

// type User= {
//     name :string
//     age : number
//     role : string

// }
// let user1:User={
//     name: "fareeha",
//     age: 25,
// role: "Daughter",
// };
// console.log(user1.name);(. KO nOTATION KEHTAY HAIN)
// console.log(user1["name"]);
//-------------------------------------------------------------------

// Type Generation ={
//     name:string;
//     age:number;
    
//     parent:{
//         parentName:""
//     }

// } complete from cell pics

// let generation: Generation ={}
// console.log(generation.parent.parentAge)

/////////////////////////////////

// let dress={
//     name:"cotton",
//     embroidary:{embrioded:"yes",
//         unembrioded:"yes"},
//     };
//     console.log(dress.embroidary.unembrioded);

//type literal

// let trafficLight: "red" |
// "yellow" | "green" = "green";

// console.log(trafficLight);

// let gender: "male" | "female" = "female";

// console.log(gender)


type Student = {
name : string;
rollNumber:number

};

let student1: Student={
    name: "fareeha",
    rollNumber: 2951
}
type Teacher={
    name: string;
    exp: number;
};

let teacher1: Teacher={
    name: "zakia",
    exp: 25,
};
// & this is intersaction in TS both typer together

let both1: Teacher & Student = {
    name: "fareeha",
    rollNumber: 2951,
exp : 25

};
console.log(both1);
