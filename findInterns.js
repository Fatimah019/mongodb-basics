const mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";
const fs=require('fs');
const internCollection=require('./interns.js');


//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("Omowonuola");
    //create collection
       
            dbCol.collection('myMovies').findOne({}, (err, result)=>{
                if (err) throw err;
                console.log(result);
                db.close();
            });
            dbCol.collection('myMovies').find({}, {projection: {_id:0, movie:1}}).toArray(function(err, result){
                if(err) throw err;
                console.log(result);
                db.close();
            });

            var queryRate={rating:7};
            dbCol.collection('myMovies').find(queryRate).toArray((err, result)=>{
                if (err) throw err;
                console.log(result);
                db.close();
            });
    });