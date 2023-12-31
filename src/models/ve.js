"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //https://sequelize.org/docs/v6/core-concepts/assocs/
      // định danh các mối quan hệ
      ves.belongsTo(models.chieus, {
        foreignKey: "id_chieu",
        // targetKey: "keyMap",
        // as: "positionData",
      });
      ves.belongsTo(models.qlcumraps, {
        foreignKey: "id_cumrap",
        // targetKey: "keyMap",
        // as: "genderData",
      });
      // ves.belongsTo(models.Allcode, {
      //   foreignKey: "positionId",
      //   targetKey: "keyMap",
      //   as: "positionData",
      // });
      // ves.belongsTo(models.Allcode, {
      //   foreignKey: "gender",
      //   targetKey: "keyMap",
      //   as: "genderData",
      // });
      // ves.belongsTo(models.Allcode, {
      //   foreignKey: "positionId",
      //   targetKey: "keyMap",
      //   as: "positionData",
      // });
      // ves.belongsTo(models.Allcode, {
      //   foreignKey: "gender",
      //   targetKey: "keyMap",
      //   as: "genderData",
      // });



      // ves.hasOne(models.Markdown, { foreignKey: "doctorId" });
      // ves.hasOne(models.Doctor_Infor, { foreignKey: "doctorId" });
      // ves.hasMany(models.Schedule, {
      //   foreignKey: "doctorId",
      //   as: "doctorData",
      // });
      // ves.hasMany(models.Booking, {
      //   foreignKey: "patientId",
      //   as: "patientData",
      // });
    }
  }
  ves.init(
    {
      // name_clinic: DataTypes.STRING,
      // fullname: DataTypes.STRING,
      Hten_KH: DataTypes.STRING,
      HTTT: DataTypes.STRING,
      Tongtien: DataTypes.INTEGER,
      SLghe: DataTypes.INTEGER,
      Ngaymuave: DataTypes.DATEONLY,
      id_KH: DataTypes.INTEGER,
      id_suatchieu: DataTypes.INTEGER,
      id_chieu: DataTypes.INTEGER,
      id_rap: DataTypes.INTEGER,
      id_cumrap: DataTypes.INTEGER,
      id_KM: DataTypes.INTEGER,
      id_NV: DataTypes.INTEGER,
      maCode: DataTypes.STRING,
      MaGD: DataTypes.INTEGER,
      ThoigianGD: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ves",
    }
  );
  return ves;
};
