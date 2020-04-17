const mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";
const fs=require('fs');


//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("Omowonuola");
    //create collection
        const movieCollection=[{movie:"The Banker", year:"2020", rating:8},
            {movie:"Bad Boys", year:"2020", rating:7},
            {movie:"The Hunt Year", year:"2020", rating:7},
            {movie:"Bloodshot", year:"2020", rating:7.5},
            {movie:"First Cow", year:"2020", rating:6.5}];

            dbCol.collection('myMovies').insertMany(movieCollection, (err, res)=>{
                if (err) throw err;
                console.log(movieCollection);
                db.close();
            })
       
      
    });
