const {
  CreateEbook,
  GetEbooks,
  UpdateEbooks,
  DeleteEbooks,
} = require("../controllers/ebookcontroller");

const router = require("express").Router();

router.post("/add", CreateEbook);
router.get("/all", GetEbooks);
router.patch("/update/:id", UpdateEbooks);
router.delete("/delete/:id", DeleteEbooks);

module.exports = router;
