import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

const User = sequelize.define("manager", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
 
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profileImageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  employee_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  grade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  reporting_manager: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  hod: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date_of_joining: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date_of_birth: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  blood_group: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emergency_contact_no: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emergency_contact_person: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bank_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  account_no: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ifsc_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  account_holder_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emergency_contact_no: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ctc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  salary_status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isAuthorized: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
