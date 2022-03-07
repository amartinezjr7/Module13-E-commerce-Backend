const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      DataTypes:INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id:{
      type:DataTypes.INTEGER,
      // needs references the product models is
    },
    tag_id:{
      type:DataTypes.INTEGER,
      // references tag model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
