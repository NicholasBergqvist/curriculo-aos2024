const curriculoModel = (sequelize, { DataTypes }) => {
  const Curriculo = sequelize.define("curriculo", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    curriculoId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    graduacao: {
      type: DataTypes.STRING,
    },
    sobre: {
      type: DataTypes.STRING,
    },
    habilidades: {
      type: DataTypes.STRING,
    },
    especializacoes: {
      type: DataTypes.STRING,
    },
  });
  return Curriculo;
};
export default curriculoModel;
