module.exports = function(sequelize, DataTypes) {
    var People = sequelize.define('Cosa_seiu_tbl', {
        cosa_seiu_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cosa_seiu_last_name: DataTypes.STRING,
        cosa_seiu_first_name: DataTypes.STRING,
        cosa_seiu_middle_name: DataTypes.STRING,
        cosa_seiu_work_email: DataTypes.STRING,
        cosa_seiu_work_unit: DataTypes.STRING,
        cosa_seiu_work_title: DataTypes.STRING,
        cosa_seiu_work_phone: DataTypes.STRING,
        cosa_seiu_work_location: DataTypes.STRING,
        cosa_seiu_home_email: DataTypes.STRING,
        cosa_seiu_home_phone: DataTypes.STRING,
        cosa_seiu_cell_phone: DataTypes.STRING,
        cosa_seiu_home_address: DataTypes.STRING,
        cosa_seiu_home_city: DataTypes.STRING,
        cosa_seiu_home_zip: DataTypes.STRING
    });
    return People;
  };