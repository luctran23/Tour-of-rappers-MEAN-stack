var Rapper = require('../models/rapper.model');

module.exports.index = async (req, res) => {
    try {
        const rappers = await Rapper.find();
    res.json(rappers);
    }catch (err){
        res.json( { message: err });
    }
};
