const { Users, Literature, usersLiteratures } = require("../../models");
const Joi = require("@hapi/joi");

exports.read = async (req, res) => {
  try {
    const loadLiterature = await Literature.findAll({
      include: {
        model: Users,
        as: "users",
        through: {
          model: usersLiteratures,
          as: "data",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "literatures has successfully Loaded",
      data: { loadLiterature },
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

exports.create = async (req, res) => {
  try {
    const {
      title,
      author,
      publication,
      pages,
      ISBN,
      status,
      uploadBy,
      year,
      month,
    } = req.body;

    const schema = Joi.object({
      uploadBy: Joi.number(),
      title: Joi.string().required(),
      author: Joi.string().required(),
      publication: Joi.string().required(),
      pages: Joi.number().required(),
      ISBN: Joi.string().required(),
      status: Joi.string().required(),
      year: Joi.number(),
      month: Joi.string(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const literatureCreated = await Literature.create({
      ...req.body,
      year,
      file: req.files.file[0].filename,
      thumbnail: req.files.thumbnail[0].filename,
    });

    res.status(200).send({
      message: "New literature has successfully created",
      data: { literatureCreated },
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

exports.detail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailLiterature = await Literature.findOne({
      where: { id },
      include: {
        model: Users,
        as: "users",
        through: {
          model: usersLiteratures,
          as: "data",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: `literature with id: ${id} has successfully created`,
      data: { detailLiterature },
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

exports.filter = async (req, res) => {
  try {
    const { year } = req.params;
    const filterLiterature = await Literature.findAll({
      where: {
        year,
      },
      include: {
        model: Users,
        as: "users",
        through: {
          model: usersLiteratures,
          as: "data",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: `Literature with year pubclication : ${year} has succesfully loaded`,
      data: { filterLiterature },
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
    const id = req.params.id;
    const body = req.body;
    await Literature.update(
      {
        title: body.title,
        author: body.author,
        publication: body.publication,
        pages: body.pages,
        ISBN: body.ISBN,
        file: body.file,
        status: body.status,
      },
      { where: { id } }
    );
    res.status(200).send({
      message: `Book with id: ${id} has successfully updated`,
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

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Literature.destroy({
      where: { id },
    });
    res.status(200).send({
      message: `Book with id: ${id} has successfully deleted`,
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
