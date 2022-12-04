const {client} = require('./dbConfig.js');
//  Database_Local = 'mongodb://localhost:27017' 
//  Database_Local = 'mongodb://localhost:27017';
//  localhost লিখে দিলে বা ‍শেষে সেমিকোলন দিলে run করে না কেন এইটা ঠিক বুঝলাম না ভাই আর CRUD নিয়ে যে প্রশ্নগুলো আছে সেগুলো কি আপনার কাছ থেকে জানার সুযোগ সামনে হবে ভাই?

// for insertOne
// const insertSingleDoc=async()=>{
// try {
//     const database = client.db('CRUD_OPERATION');
//     const collection = database.collection('Docs');
//     const doc = {
//         Name:'Biplob Kundu',
//         Age:29,
//         Education:'B.Sc.Engg.',
//         Learning:'MERN Stack' 
//     }
//     const result = await collection.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
// } 
// catch (error) {
//     console.log(error);
// }
// finally{
//     await client.close();
// }
// }
// insertSingleDoc();


// for insertMany
const insertMultipleDoc=async()=>{
try {
    const database = client.db('CRUD_OPERATION');
    const collection = database.collection('Docs');
    const doc = [
        {
            Name:'Hulo',
            Age:15,
            Education:'Class 9',
            Learning:'MERN Stack' 
        },
        {
            Name:'Vevlai',
            Age:08,
            Education:'Class 4',
            Learning:'MERN Stack' 
        },
        {
            Name:'Nut',
            Age:12,
            Education:'Class 6',
            Learning:'MERN Stack' 
        },
        {
            Name:'Boltu',
            Age:12,
            Education:'Class 6',
            Learning:'MERN Stack' 
        }
    ]
    const result = await collection.insertMany(doc);
    console.log(`${result.insertedCount} documents were inserted`);
} 
catch (error) {
    console.log(error);
}
finally{
    await client.close();
}
}
insertMultipleDoc();