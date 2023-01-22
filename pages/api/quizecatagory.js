import nextConnect from 'next-connect';
import multer from 'multer';
const mongoose = require('mongoose');
var quizecat = require('./server_model/quizecat');
import cloudinary from './ass_file/cloudinary'


mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/shikhonschool')
  .then(data => {
    console.log("connecting successfully");
  })
  .catch(error => {
    console.log("error");
  })

export const config = {
  api: {
    bodyParser: false,
  },
};


const upload = multer({
  storage: multer.diskStorage({}),
});

const quizecatagory = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: "Sorry something Happened!" });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: "Not Allowed" });
  },
});



quizecatagory.use(upload.single('file'));

quizecatagory.post((req, res) => {

  try {

    cloudinary.uploader.upload(req.file.path, { resource_type: "image" })
      .then((response) => {
        const cataa = new quizecat({
          caname: req.body.caname,
          cat_img: response.url,
          public_allow: Number(req.body.public_allow)
        })

        cataa.save(function (err, result) {
          if (err) {
            res.status(200).json({ data: err })
          } else {
            res.status(200).json({ data: "success" });
          }
        })
      })




  } catch (err) {

  }




});



export default quizecatagory;

