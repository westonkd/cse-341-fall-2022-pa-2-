const getDB = require("../initializers/db");
const { ObjectId } = require("mongodb");

let contactsCollection;

const index = async (req, res) => {
  const collection = await _collection();
  const documents = await collection.find({}).toArray();

  res.json(documents);
};

const show = async (req, res) => {
  const collection = await _collection();
  const document = await collection
    .find({ _id: ObjectId(req.params.id) })
    .toArray();

  res.json(document[0]);
};

const _collection = async () => {
  if (contactsCollection) return contactsCollection;

  try {
    const db = await getDB();
    contactsCollection = db.collection("contacts");
    return contactsCollection;
  } catch (error) {
    console.error("Error getting contacts collection", error);
  }
};

module.exports = { index, show };
