import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@eventmaster.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Matthew McEver',
        email: 'Matthew@eventmaster.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mary Poppins',
        email: 'Mary@eventmaster.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users