import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Thang Tran',
    email: 'thangtran@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Long Ly',
    email: 'longly@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
