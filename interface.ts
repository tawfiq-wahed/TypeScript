let user: {
    name: string;
    age: number;
};

 user= {
    name: "TAWFIQ",
    age: 25
};
console.log(user.name);
console.log(user.age);

interface user1{
    name:string;
    age : number;
}
const use:user1=
{
 name:"TAWFIQ",
    age:21

};
function printuser(use:user1):void
{
    console.log(use.name);
    console.log(use.age);
}
printuser(use);
type Role = {
    name: string;
    age: number;
};

const use1: Role = {
    name: "TAWFIQ",
    age: 21
};

console.log(use1.name);
console.log(use1.age);