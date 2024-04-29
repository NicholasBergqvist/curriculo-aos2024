import { Sequelize } from "sequelize";

const curriculoModel = (sequelize,{DataTypes})=>{
    const Curriculo = sequelize.define('curriculo',{
        nome:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },
        curriculoId:{
            type: DataTypes.Integer,
            primaryKey:true,
            autoIncrement:true,
        },
        graduacao:{
            type:DataTypes.STRING
        },
        sobre:{
            type:DataTypes.STRING
        },
        habilidades:{
            type:DataTypes.STRING
        },
        especializacoes:{
            type:DataTypes.STRING
        }

    });
    return Curriculo;
};
export default curriculoModel;