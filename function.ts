function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(2,3));

function greet(name: string, age?: number) {
    console.log(name);

    if (age) {
        console.log(age);
    }
}
function greet1(name:string="Guest")
{
    console.log(name);
}
greet("Tawfiq", 20);
greet("wahed");
greet1();