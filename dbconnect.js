var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/Omowonuola";

mongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("database created by Omowonuola");
    db.close();
});