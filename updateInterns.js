const mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";

//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("myMoviesCollection");
    //update collection
        dbCol.collection('myMovies').updateOne(
            {movie:"The Banker"}, 
            {
                $set: {movie:"Miracle in cell n0.7", year:"2019", rating:9},
                $currentDate:{lastModified:true}
            }, function(err, res){
            if (err) throw err;
            console.log("updated collection, changed the bank document to miracles in cell no.7");
            console.log(res);
            db.close();
        });
        dbCol.collection('myMovies').findOne({}, function(err, result){
            if(err) throw err;
            console.log(result);
            db.close();
        });

    });
