// import multer from 'multer'

// const upload = multer({storage:multer.diskStorage({})})

// export default upload


import path from 'path'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  cb(null, isValid);
};

const upload = multer({ storage, fileFilter });


export default upload
