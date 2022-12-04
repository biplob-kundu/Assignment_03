const { client } = require("./dbConfig.js");

const deleteMultipleDocs = async() => {
    try {
        const database = client.db("CRUD_OPERATION");
        const collection = database.collection("Docs");
        const query = {};
        const result = await collection.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents") 
    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
};
deleteMultipleDocs();