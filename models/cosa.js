module.exports = function(sequelize, DataTypes) {
    var Cosa = sequelize.define('Seiu_city_email_tbl', {
      seiu_city_email_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      seiu_city_email_last_name: DataTypes.STRING,
      seiu_city_email_first_name: DataTypes.STRING,
      seiu_city_email_email_address: DataTypes.STRING
    });
    return Cosa;
  };