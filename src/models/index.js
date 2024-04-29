import Sequelize from 'sequelize';
import curriculoModel from './curriculo';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
  
  const models = {
    Curriculo: curriculoModel(sequelize, Sequelize),
  };
  
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });
  
  export { sequelize };

  export default models;