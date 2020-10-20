const { Users,Literature,usersLiteratures } = require("../../models");
const Joi = require("@hapi/joi");

exports.read = async (req,res) =>{
    try {
        const loadLiterature = await Literature.findAll({
            include:{
                model: Users,
                as: "users",
                through:{
                    model: usersLiteratures,
                    as: "data",
                    attributes:{
                        exclude:["createdAt", "updatedAt"]
                    }
                },
                attributes:{
                        exclude:["createdAt", "updatedAt", "password"]
                }                
            },
            attributes:{
                exclude:["createdAt", "updatedAt"]
            }
        })
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
}

exports.create = async (req,res) =>{
    try {
        const {title,author,publication,pages,ISBN,aboutBook,status,userId} = req.body;

        const schema = Joi.object({
            uploadBy: Joi.number(),
            title: Joi.string().required(),
            author: Joi.string().required(),
            publication: Joi.string().required(),
            pages: Joi.number().required(),
            ISBN: Joi.string().required(),
            status: Joi.string().required(),            
        })

        const {error} = schema.validate(req.body);

        if(error){
            return res.status(400).send({
                error:{
                    message : error.details[0].message,
                }
            })
        }

        const literatureCreated = await Literature.create({
            ...req.body,
            file: req.files.file[0].filename,
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
}

exports.detail = async (req,res) =>{
    try {
        const {id} = req.params;
        const detailLiterature = await Literature.findOne({
            where:{id},
            include:{
                model: Users,
                as: "users",
                through:{
                    model: usersLiteratures,
                    as: "data",
                    attributes:{
                        exclude:["createdAt", "updatedAt"]
                    }
                },
                attributes:{
                        exclude:["createdAt", "updatedAt", "password"]
                }                
            },
            attributes:{
                exclude:["createdAt", "updatedAt"]
            }
        })
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
}