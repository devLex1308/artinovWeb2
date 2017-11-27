use test
db.users.save( { name: "Tom" } )
db.users.find()


db.users.save({
    "name": "Bill",
    "surname": "Gates",
    "age": "48",
    "company": {
        "name" : "microsoft",
        "year" : "1974",
        "price" : "300000"
        }
})

db.users.save({"name": "Bill","surname": "Gates","age": "48","company": {"name" : "microsoft","year" : "1974","price" : "300000"}})




{
    "name": "Tom",
    "birthday": "1985.06.28",
    "place" : "Vashington",
    "languages" :[
        "english",
        "german",
        "spanish"
    ]
}

db.users.save({"name": "Tom","birthday": "1985.06.28","place" : "Vashington","languages" :["english","german","spanish"]})


{"age" : "28"}
{"age" : 28}

db.stats()
db.users.stats()


insertOne()
insertMany()
insert()


db.users.insertOne({"name": "Tom", "age": 28, languages: ["english", "spanish"]}) 

db.users.insertMany([{"name": "Bob", "age": 26, languages: ["english", "frensh"]}, {"name": "Alice", "age": 31, languages:["german", "english"]}])

db.users.insert({"name": "Tom", "age": 28, languages: ["english", "spanish"]})

db.users.renameCollection("new_name") 

db.createCollection("accounts")
db.createCollection("profile", {capped:true, size:9500})
db.createCollection("profile", {capped:true, size:9500, max: 150})

db.users.find().pretty()



db.users.insertOne({"name": "Tom", "age": 28, languages: ["english", "spanish"]})
db.users.insertOne({"name": "Bill", "age": 32, languages: ["english", "french"]})
 db.users.insertOne({"name": "Tom", "age": 32, languages: ["english", "german"]}) 

db.users.find({name: "Tom"}) 

db.users.find({name: "Tom", age: 32})
db.users.find({languages: "english"}) 
db.users.find({languages: ["english", "german"]})
db.users.find({languages.0: "english"}) 

db.users.find({name: "Tom"}, {age: 1})
db.persons.find({name: "Tom"}, {age: 0})
db.users.find({name: "Tom"}, {age: true, _id: false})
db.users.find({}, {age: 1, _id: 0})

db.users.insert({"name": "Alex", "age": 28, company: {"name":"microsoft", "country":"USA"}})
db.users.find({"company.name": "microsoft"})

db.users.find().limit(3)
db.users.find().skip(3)

db.users.find().sort({name: 1})
db.users.find().sort({name: 1}).skip(3).limit(3)

db.users.find().sort({ $natural: -1 }).limit(5)

//Один елемент з масиву
db.users.find ({name: "Tom"}, {languages: {$slice : 1}})
//Один елемент з кінця
db.users.find ({name: "Tom"}, {languages: {$slice : -1}});


db.users.count()
db.users.find({name: "Tom"}).count()
db.users.find({name: "Tom"}).skip(2).count(true)
db.users.distinct("name")

$eq  ==
$gt >
$lt <
$gte >=
$lte <=

db.users.find({age: {$lt : 30}})
db.users.find({age: {$gt : 30}})
db.users.find ({age: {$gt : 30}})

db.users.find ({age: {$gt : 30, $lt: 50}})
db.users.find ({age: {$ne : 22}})

db.users.find ({age: {$eq : 22}})

db.users.find ({age: {$in : [22, 32]}})
db.users.find ({age: {$nin : [22, 32]}})

db.users.find ({age: {$all : [22, 32]}})
db.users.find ({age: {$all : [22]}})

db.users.find ({languages: {$all : ["english", "french"]}})
db.grades.insertMany([{student: "Tom", courses:[{name: "Java", grade: 5}, {name: "MongoDB", grade: 4}]},{student: "Alice", courses:[{name: "C++", grade: 3}, {name: "MongoDB", grade: 5}]}]) 

db.grades.find({courses: {$elemMatch: {name: "MongoDB", grade: {$gt: 3}}}})


db.users.find ({languages: {$size:2}})

db.users.find ({age: {$type:"string"}})
db.users.find ({age: {$type:"number"}})
db.users.find ({name: {$regex:"b"}})
db.users.find ({$or : [{name: "Tom"}, {age: 22}]})

db.users.find ({name: "Tom", $or : [{age: 22}, {languages: "german"}]})
db.users.find ({$or : [{name: "Tom"}, {age: {$gte:30}}]})
db.users.find ({$and : [{name: "Tom"}, {age: 32}]})
db.users.save({name: "Eugene", age : 29, languages: ["english", "german", "spanish"]})

db.users.update({name : "Tom"}, {name: "Tom", age : 25}, {upsert: true})


db.users.update({name : "Tom", age: 29}, {$set: {age : 30}})
db.users.update({name : "Tom", age: 29}, {$set: {salary : 300}})
db.users.update({name : "Tom"}, {$set: {name: "Tom", age : 25}}, {multi:true})
db.users.update({name : "Tom"}, {$inc: {age:2}})

 db.users.update({name : "Tom"}, {$unset: {salary: 1}})
 db.users.updateOne({name : "Tom", age: 29}, {$set: {salary : 360}})
 db.users.updateMany({name : "Tom"}, {$set: {salary : 560}})

 db.users.remove({name : "Tom"})

 db.users.remove({name : "Tom"}, true)
db.users.remove({})

db.users.drop()

db.dropDatabase()

db.users.createIndex({"name" : 1})
db.users.createIndex({"name" : 1}, {"unique" : true})



-------------------------------------------------------

 var MongoClient = require("mongodb").MongoClient; 

  mongoClient.connect("mongodb://localhost:27017/test", function(err, db){

	 if(err){
		 return console.log(err);
	 }

	 db.close();
 });


 var mongoClient = require("mongodb").MongoClient;

 var url = "mongodb://localhost:27017/usersdb";
 mongoClient.connect(url, function(err, db){
	
	 var collection = db.collection("users");
	 var user = {name: "Tom", age: 23};
	 collection.insertOne(user, function(err, result){
		
		 if(err){ 
			 return console.log(err);
		 }
		 console.log(result.ops);
		 db.close();
	 });
 });

 ---------------------------------------------------------------------

  var mongoClient = require("mongodb").MongoClient;

 var users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
 var url = "mongodb://localhost:27017/usersdb";
 mongoClient.connect(url, function(err, db){
	
	 db.collection("users").insertMany(users, function(err, results){
			
		 console.log(results);
		 db.close();
	 });
 });

 -------------------------------------------------------------------------

 var mongoClient = require("mongodb").MongoClient;

 var url = "mongodb://localhost:27017/usersdb";
 mongoClient.connect(url, function(err, db){
	
	 if(err) return console.log(err);
	
	 db.collection("users").find().toArray(function(err, results){
			
		 console.log(results);
		 db.close();
	 });
 });

 -------------------------------------------------------------------------

 var mongoClient = require("mongodb").MongoClient;
 
var users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
var url = "mongodb://localhost:27017/usersdb";
mongoClient.connect(url, function(err, db){
     
    db.collection("users").insertMany(users, function(err, results){
             
        console.log(results);
        db.close();
    });
});


------------------------------------------------------------------------------

var mongoClient = require("mongodb").MongoClient;
 
var url = "mongodb://localhost:27017/usersdb";
mongoClient.connect(url, function(err, db){
     
    if(err) return console.log(err);
     
    db.collection("users").find().toArray(function(err, results){
             
        console.log(results);
        db.close();
    });
});


--------------------

db.collection("users").find({name: "Tom"}).toArray(function(err, results){
             
    console.log(results);
    db.close();
});

---------------------

db.collection("users").find({name: "Tom", age: 23}).toArray(function(err, results){
             
    console.log(results);
    db.close();
});

-----------------------

mongoClient.connect(url, function(err, db){
     
    if(err) return console.log(err);
     
    db.collection("users").findOne(function(err, doc){
             
        console.log(doc);
        db.close();
    });
});

---------------------


db.collection("users").findOne({name: "Bob"}, function(err, doc){
             
    console.log(doc);
});

----------------------

var mongoClient = require("mongodb").MongoClient;
 
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    if(err) return console.log(err);
     
    ldb.collection("users").deleteMany({name: "Tom"}, function(err, result){
             
        console.log(result);
        db.close();
    });
});

-----------------------------

mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    if(err) return console.log(err);
     
    db.collection("users").deleteOne({name: "Bob"}, function(err, result){
             
        console.log(result);
        db.close();
    });
});
---------------------------------
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    if(err) return console.log(err);
     
    db.collection("users").findOneAndDelete({age: 21}, function(err, result){
             
        console.log(result);
        db.close();
    });
});


-------------------------------------

var mongoClient = require("mongodb").MongoClient;
 
var users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
 
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    var col = db.collection("users");
    col.insertMany(users, function(err, results){
             
        col.findOneAndUpdate(
            {age: 21}, 
            { $set: {age: 25}}, 
            function(err, result){
                 
                console.log(result);
                db.close();
            }
        );
    });
});

--------------------------------------------------------------
var mongoClient = require("mongodb").MongoClient;
 
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    var col = db.collection("users");
    col.findOneAndUpdate(
        {name: "Bob"},              
        { $set: {name: "Sam"}},    
        {                              
            returnOriginal: false
        },
        function(err, result){
                 
            console.log(result);
            db.close();
        }
    );
});

-----------------------------------------------------------------------
var mongoClient = require("mongodb").MongoClient;
 
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    var col = db.collection("users");
    col.updateMany(
        {name: "Sam"},              
        { $set: {name: "Bob"}},    
        function(err, result){
                 
            console.log(result);
            db.close();
        }
    );
});


-----------------------------------------------------------------

var mongoClient = require("mongodb").MongoClient;
 
mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){
     
    var col = db.collection("users");
    col.updateOne(
        {name: "Tom"}, 
        { $set: {name: "Tom Junior", age:33}},
        function(err, result){
                 
            console.log(result);
            db.close();
        }
    );
});

----------------------------------------------------------------------

var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;
 
var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/usersdb";
 
app.use(express.static(__dirname + "/public"));
app.get("/api/users", function(req, res){
      
    mongoClient.connect(url, function(err, db){
        db.collection("users").find({}).toArray(function(err, users){
            res.send(users)
            db.close();
        });
    });
});
app.get("/api/users/:id", function(req, res){
      
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("users").findOne({_id: id}, function(err, user){
             
            if(err) return res.status(400).send();
             
            res.send(user);
            db.close();
        });
    });
});
 
app.post("/api/users", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var userName = req.body.name;
    var userAge = req.body.age;
    var user = {name: userName, age: userAge};
     
    mongoClient.connect(url, function(err, db){
        db.collection("users").insertOne(user, function(err, result){
             
            if(err) return res.status(400).send();
             
            res.send(user);
            db.close();
        });
    });
});
  
app.delete("/api/users/:id", function(req, res){
      
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("users").findOneAndDelete({_id: id}, function(err, result){
             
            if(err) return res.status(400).send();
             
            var user = result.value;
            res.send(user);
            db.close();
        });
    });
});
 
app.put("/api/users", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
    var id = new objectId(req.body.id);
    var userName = req.body.name;
    var userAge = req.body.age;
     
    mongoClient.connect(url, function(err, db){
        db.collection("users").findOneAndUpdate({_id: id}, { $set: {age: userAge, name: userName}},
             {returnOriginal: false },function(err, result){
             
            if(err) return res.status(400).send();
             
            var user = result.value;
            res.send(user);
            db.close();
        });
    });
});
  
app.listen(3000, function(){
    console.log("Сервер очікує підключення");
});

---------------------------------------------------------------

app.get("/api/users", function(req, res){
      
    mongoClient.connect(url, function(err, db){
        db.collection("users").find({}).toArray(function(err, users){
            res.send(users)
            db.close();
        });
    });
});