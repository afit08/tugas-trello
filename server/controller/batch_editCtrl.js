const findAll = async (req,res) =>{
    try {
        const batch  = await req.context.models.batch.findAll({
            // include : [{
            //     model : req.context.models.countries
            // }]
        });
        return res.send(batch)
    } catch (error) {
        return res.status(404).send("not found")       
    }
}

const findAlll = async (req,res) =>{
    try {
        const talent_batch  = await req.context.models.talent_batch.findAll({
            // include : [{
            //     model : req.context.models.countries
            // }]
        });
        return res.send(talent_batch)
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
const update = async (req,res)=>{
    const {batch_name,batch_technology,batch_start_date,batch_end_date} = req.body
    try {
        const batch = await req.context.models.batch.update(
            {
                batch_name : batch_name,
                batch_technology : batch_technology,
                batch_start_date : batch_start_date,
                batch_end_date : batch_end_date
            },
            {returning : true, where :{batch_id : req.params.id}}
        )
        return res.send(batch)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

const updated = async (req,res)=>{
    const {taba_drop,taba_notes,taba_drop_date,taba_review,taba_tale_id,taba_batch_id} = req.body
    try {
        const talent_batch = await req.context.models.talent_batch.update(
            {
                taba_drop : taba_drop,
                taba_notes : taba_notes,
                taba_drop_date : taba_drop_date,
                taba_review : taba_review,
                taba_tale_id : taba_tale_id,
                taba_batch_id : taba_batch_id
            },
            {returning : true, where :{taba_id : req.params.id}}
        )
        return res.send(talent_batch)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default{
    update,
    updated,
    findAll,
    findAlll
}