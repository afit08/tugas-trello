const findAll = async (req,res) =>{
    try {
        const curriculum  = await req.context.models.curriculum.findAll({
            // include : [{
            //     model : req.context.models.countries
            // }]
        });
        return res.send(curriculum)
    } catch (error) {
        return res.status(404).send("not found")       
    }
}

const findOne  = async (req,res) => {
    try {
        const curriculum = await req.context.models.curriculum.findOne({
            where:{curr_id:req.params.id}
        })
        return res.send(curriculum)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default{
    findAll,
    findOne
}