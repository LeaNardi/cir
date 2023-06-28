import { User } from "./user";

let usuarios: User[];
usuarios = [
    {
        id: 1,
        email: 'leandroenardi@gmail.com',
        password: '123',
    },
    {
        id: 2,
        email: 'aldana@gmail.com',
        password: 'abc',
    }
];

export function chequear_usuario(user: User): boolean {
    for (const item of usuarios) {
        if (user.email === item.email && user.password === item.password) {
            return true;
        }
    }

    return false;
}