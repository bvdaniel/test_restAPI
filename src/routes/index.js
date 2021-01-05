const {Router} = require('express');
const router = Router();

// routes
router.get('/test',(req, res) =>{
    const data = {
        "name": "Daniel",
        "web": "Orienta"
    };
    res.json (data);
});

module.exports = router;