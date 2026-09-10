async function getUser(): Promise<string> {

    return "Tawfiq";

}
interface User {
    id: number;
    name: string;
}

async function getUser(): Promise<User[]> {

    return [
        {
            id: 1,
            name: "Tawfiq",
         
        },
        {
            id: 2,
            name: "Rahim",
        
        },
        {
            id: 3,
            name: "Karim",
       
        }
    ];
}

async function main() {

    const users = await getUser();

    users.forEach((user) => {
        console.log(user.id);
        console.log(user.name);
    });
}

main();