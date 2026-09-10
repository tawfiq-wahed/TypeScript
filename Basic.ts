let  numbers:number[]=[1,2,3]
for(const a of numbers)
{
    console.log(a);
}
for(let i:number=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
numbers.forEach((number) => {
    console.log(number);
});
for(const number of numbers)
{
    console.log(number);
}