const db = require("../db");
const responseHanlder = require("../utils/responsehandler");

const CreateEbook = (req, res, next) => {
  try {
    const sql =
      "INSERT INTO ebook (ebook_title,ebook_author,ebook_genre,ebook_review,ebook_favorite) VALUES (?,?,?,?,?)";

    const params = [
      req.body.ebook_title,
      req.body.ebook_author,
      req.body.ebook_genre,
      req.body.ebook_review,
      req.body.ebook_favorite,
    ];

    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      responseHanlder.success(res, "Success", 200);
    });
  } catch (e) {
    next(e);
  }
};
const GetEbooks = (req, res, next) => {
  try {
    const sql = "SELECT * FROM ebook";

    db.all(sql, [], (err, rows) => {
      if (err) {
        responseHanlder.failure(res, err.message, 400);
        return;
      }
      responseHanlder.success(res, rows, 200);
    });
  } catch (e) {
    next(e);
  }
};
const UpdateEbooks = (req, res, next) => {
  try {
    const sql = `UPDATE ebook set 
    ebook_title = COALESCE(?,ebook_title), 
    ebook_author = COALESCE(?,ebook_author), 
    ebook_genre = COALESCE(?,ebook_genre),
    ebook_review = COALESCE(?,ebook_review),
    ebook_favorite = COALESCE(?,ebook_favorite)
    WHERE e_id = ${req.params.id}`;
    const params = [
      req.body.ebook_title,
      req.body.ebook_author,
      req.body.ebook_genre,
      req.body.ebook_review,
      req.body.ebook_favorite,
    ];
    db.run(sql, params, (err, rows) => {
      if (err) {
        responseHanlder.failure(res, err.message, 400);
        return;
      }
      responseHanlder.success(res, rows, 200);
    });
  } catch (e) {
    next(e);
  }
};
const DeleteEbooks = (req, res, next) => {
  try {
    const sql = `DELETE FROM ebook WHERE e_id = ?`;

    db.run(`DELETE FROM ebook WHERE e_id = ?`, req.params.id, (err, rows) => {
      if (err) {
        responseHanlder.failure(res, err.message, 400);
        return;
      }
      responseHanlder.success(res, rows, 200);
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  CreateEbook,
  GetEbooks,
  UpdateEbooks,
  DeleteEbooks,
};
