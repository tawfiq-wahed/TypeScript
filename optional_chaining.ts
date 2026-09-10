interface user{
    name:string 
    address?:
    {
        city:string;
    }
}
const use1:user={
   name:"wahed",
   address:
   {
    city:"sylhet"
   }
}

   console.log(use1.address?.city)