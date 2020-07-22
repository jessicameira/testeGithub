module.exports = (sequelize, DataTypes) => {
    const Favourite = sequelize.define('Favourite', {
      full_name: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      img_url: DataTypes.STRING,
    }, {tableName: 'favourites'});
  
    return Favourite;
  }