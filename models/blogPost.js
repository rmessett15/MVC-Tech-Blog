const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      // ?????????????????
      // get() {
      //   return moment(this.getDataValue('date_created')).format('DD/MM/YYYY h:mm:ss');
      // },
      // ?????????????????
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogPost",
  }
);

module.exports = BlogPost;

// ????????????????????
// Install moment npm i
// Include (require)
// Try using formatter in model
// Then pass it into handlebars (what was deleted)
// Save within dayjs format in json seed data
// Look into dayjs or moment and the difference
// ????????????????????
