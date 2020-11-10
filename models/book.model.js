const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    description: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
mongoose.plugin(slug);
module.exports = mongoose.model("Book", bookSchema);