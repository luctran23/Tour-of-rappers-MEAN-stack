var Rapper = require('../models/rapper.model');

module.exports.index = async (req, res) => {
    try {
        const rappers = await Rapper.find();
    res.json(rappers);
    }catch (err){
        res.json( { message: err });
    }
};
module.exports.specific = async (req, res) => {
    try {
        const rapper = await Rapper.findById(req.params.id);
        res.json(rapper);
    } catch (error) {
        res.json({message: error });
    }
    
};