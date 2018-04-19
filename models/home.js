module.exports = function(sequelize, DataTypes) {
    var Home = sequelize.define('Seiu_personal_tbl', {
        seiu_personal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        seiu_personal_last_name: DataTypes.STRING,
        seiu_personal_first_name: DataTypes.STRING,
        seiu_personal_work_phone: DataTypes.STRING,
        seiu_personal_home_phone: DataTypes.STRING,
        seiu_personal_cell_phone: DataTypes.STRING,
        seiu_personal_email_address: DataTypes.STRING,
        seiu_personal_home_address: DataTypes.STRING
    });
    return Home;
  };