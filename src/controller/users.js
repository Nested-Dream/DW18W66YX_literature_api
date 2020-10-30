const { Users, Literature, usersLiteratures } = require("../../models");

exports.read = async (req, res) => {
  try {
    const user = await Users.findAll({
      include: {
        model: Literature,
        as: "literatures",
        through: {
          model: usersLiteratures,
          as: "data",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        exclude: ["createdAt", "updatedAt"],
      },
      exclude: ["createdAt", "updatedAt"],
    });
    res.status(200).send({
      message: "Users data has successfully loaded",
      data: { user },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR :(",
      },
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Users.update(
      {
        avatar: req.file.filename,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!updated)
      return res.status(404).send({
        status: "fail",
        message: "User not found!",
        code: 404,
      });

    const data = await Users.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: `User updated successfully`,
      data,
      path: req.file.path,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
      code: 500,
    });
  }
};

exports.specific = async (req, res) => {
  try {
    const { id } = req.params;
    const loadUser = await Users.findOne({
      where: { id },
      include: {
        model: Literature,
        as: "literatures",
        through: {
          model: usersLiteratures,
          as: "data",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        exclude: ["createdAt", "updatedAt"],
      },
      exclude: ["createdAt", "updatedAt", "password"],
    });
    res.status(200).send({
      message: `user with id : ${id} has succesfully loaded`,
      data: { loadUser },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
      code: 500,
    });
  }
};
