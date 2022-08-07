import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
// import { UserTheme, User, Topic, Comment } from '@/server/models';
import { UserTheme, User } from './models';


const proc = {
  env: {
    HOST: '127.0.0.1',
    BD_PORT: 5432,
    USERNAME: 'polzovatel',
    PASSWORD: '1234',
    DATABASE: 'sequelize_project_development',
    PORT: 8080

  }
};


const sequelizeOptions: SequelizeOptions = {
  host: proc.env.HOST,
  port: Number(proc.env.BD_PORT),
  username: proc.env.USERNAME,
  password: proc.env.PASSWORD,
  database: proc.env.DATABASE,
  dialect: 'postgres'
};

export const sequelize = new Sequelize(sequelizeOptions);
sequelize.addModels([User, UserTheme /* , Topic, Comment*/]);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
