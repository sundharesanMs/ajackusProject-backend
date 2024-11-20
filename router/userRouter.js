const router = require('express').Router();
const User = require('../models/user'); 


router.post('/', async (req, res) => {
    const task = new User(req.body);
    try {
        const doc = await task.save();
        res.status(200).json({message: "create success", doc}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error saving task" });
    }
});
// get the data
router.get("/", async (req, res) => {
    try{
        const getdata = await User.find({});
        res.status(200).json(getdata); 
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error get result" });

    }
   
})
// eidt 
router.put("/:id", async (req, res) => {
    const putdata = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    console.log(putdata);
    res.status(200).json({ message: "edit", putdata })
})
router.delete('/:id', async (req, res) => {
    try {
        const doc = await User.findByIdAndDelete(req.params.id);
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting task" });
    }
});
module.exports = router