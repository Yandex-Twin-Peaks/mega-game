import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import {
  UserTheme, User, Topics, Comments
} from './models';

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres'
};

export const sequelize = new Sequelize(sequelizeOptions);
sequelize.addModels([
  User,
  UserTheme,
  Topics,
  Comments
]);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
