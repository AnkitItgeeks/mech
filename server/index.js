// Import required packages
const express = require('express');
const cloudinary = require('cloudinary').v2;
const Project = require("./models/project");
const app = express();
const mongoose = require("mongoose")
require('dotenv').config();

// Connect to the database
mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const multer = require('multer');
const UserModel = require('./models/User');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + `${Date.now()}.jpg`)
  }
})

const upload = multer({ storage: storage })

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///////////////////// Image upload endpoint////////////////////////////
app.post('/upload-image', upload.single('file'), async (req, res) => {
  const file = req.file;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'Mech2',
      resource_type: 'auto',
    });

    const imageUrl = result.secure_url;
    const project = await Project.create({
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error uploading image' });
  }
});
///////////////////////////////////Login//////////////////////////////
app.post("/admin", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The password is incorrect")
        }
      } else {
        res.json("No record existed")
      }
    })
})
///////////////////////////////////Data//////////////////////////////
app.get('/data', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});