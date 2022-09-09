import bcrypt from 'bcryptjs';
import {  User } from '../models/user';

const seedUsers = async () => {
  await User.deleteMany({});
  await (
    await User.create({
      email:'admin@gmail.com',
      password: await bcrypt.hash('admin',10),
     
    }
    )
  ).save();
 
}

export default seedUsers