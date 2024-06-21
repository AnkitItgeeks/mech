const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const ProjectSchema = new Schema({
  title: String,
  price: String,
  description: String,
  imageUrl: String
});

// Create model for todo
const Project = new mongoose.model('project', ProjectSchema);

module.exports = Project;