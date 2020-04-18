const mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";


//connect to database
mongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbCol=db.db("myMoviesCollection");
        //get the first document form the collection
        dbCol.collection('myMovies').findOne({}, (err, result)=>{
            if (err) throw err;
            console.log("Queried the first document in the collection");
            console.log(result);
            });

            //get the movie with a rating of "7"
            dbCol.collection('myMovies').find({rating:7}).toArray((err, result)=>{
                if (err) throw err;
                console.log("Got the document that has a rating of '7'");
                console.log(result);
            });
//get the list of movie titles alone
            dbCol.collection('myMovies').find({}, {projection: {_id:0, movie:1}}).toArray(function(err, result){
                if(err) throw err;
                console.log("got the list of movie title only");
                console.log(result);
                db.close(); 
            });

    });