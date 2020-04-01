var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var fs=require('fs');

//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("Omowonuola");

    //create a collection(table)
    dbCol.createCollection("Interns", (err, result)=>{
        if (err) throw err;
        console.log("Interns Collection Created");
        db.close();
    });
});