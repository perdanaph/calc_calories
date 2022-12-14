const { Admin } = require('../models');
const { sign, verify } = require('../utils/jwt');
const encrypt = require('../utils/encrypt');

exports.registerAdmin = async (req, res, next) => {
  const { nama, email, password } = req.body;
  try {
    const data = await Admin.create({
      nama,
      email,
      password,
    });

    return res.status(201).json({
      message: 'Success',
      data: {
        nama: data.nama,
        email: data.email,
      },
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
