const { client } = require("./dbConfig.js");

const updateMultipleDoc = async () => {
  try {
    const database = client.db("CRUD_OPERATION");
    const collection = database.collection("Docs");
    const filter = {};
    const updateDoc = {
      $set: {
        isBeginner: true,
      },
    };
    const result = await collection.updateMany(filter, updateDoc);
    console.log(`Updated ${result.modifiedCount} documents`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
updateMultipleDoc();
