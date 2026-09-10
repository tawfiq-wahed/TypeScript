//partial user
interface User {
    name: string;
    age: number;
}

type UpdateUser = Partial<User>;
type choose=Pick<User,"name">;
type baddibo=Omit<user,"age">;
type Users = Record<string, number>;

const users: Users = {
    Tawfiq: 1,
    Sami: 2
};