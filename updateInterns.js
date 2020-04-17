const mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";
const fs=require('fs');
const internCollection=require('./interns.js');

//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("Omowonuola");
    //create collection

        dbCol.collection('myMovies').updateOne({movie:"The Banker"}, {$set: {movie:"Miracle in cell n0.7", year:"2019", rating:9}}, function(err, result){
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
