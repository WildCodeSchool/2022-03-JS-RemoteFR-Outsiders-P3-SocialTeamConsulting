const formidable = require("formidable");

const fileMiddleware = (req, res, next) => {
  const form = new formidable.IncomingForm({
    uploadDir: "./uploads",
    keepExtensions: true,
    multiples: true,
  });

  const files = [];
  const fields = [];

  form.on("field", (field, value) => {
    fields.push([field, value]);
  });
  form.on("file", (field, file) => {
    files.push([field, file]);
  });
  form.on("end", () => {
    console.warn("done");
  });

  /* eslint-disable */
     form.parse(req, (err, fields, files) => {
   /* eslint-enable */
    if (err) {
      res.status(500).json({ validationErrors: [{ message: err.message }] });
    } else {
      req.body = fields;
      req.files = files;
      next();
    }
  });
};

module.exports = fileMiddleware;
