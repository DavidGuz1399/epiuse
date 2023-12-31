const { Router } = require('express')
const {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
} = require("../controllers/user")
const router = Router();
router.get("/",usersGet);
router.post("/",usersPost);
router.put("/:id",usersPut);
router.delete("/:id",usersDelete);

module.exports = router;