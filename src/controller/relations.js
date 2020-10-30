const { usersLiteratures } = require("../../models");

exports.read = async (req, res) => {
  try {
    const loadRelations = await usersLiteratures.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Relation successfully loaded",
      data: { loadRelations },
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
    const loadRelations = await usersLiteratures.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id },
    });
    res.status(200).send({
      message: `Relation with id: ${id}successfully loaded`,
      data: { loadRelations },
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
    const createRelation = await usersLiteratures.create(req.body);
    res.status(200).send({
      message: "New relation has successfully created",
      data: {
        createRelation,
      },
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
    const { LiteratureId, UserId } = req.params;
    await usersLiteratures.destroy({
      where: {
        LiteratureId,
        UserId,
      },
    });
    res.status(200).send({
      message: `Relation with literaturId: ${LiteratureId} and userId: ${UserId} has successfully deleted`,
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
