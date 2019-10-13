var restify = require('restify');
var mongojs = require("mongojs");

var ip_addr = '127.0.0.1';
var port    =  '8080';
 
var server = restify.createServer({
    name : "myapp"
});
 
server.use(restify.queryParser());  
server.use(restify.bodyParser());
server.use(restify.CORS());

var connection_string = '127.0.0.1:27017/myapp';

var db = mongojs(connection_string, ['myapp']);   
var employees = db.collection("employees");
// employees.ensureIndex( { id: 1 });
var PATH = '/employees';
//Fetches all the records in the database...
server.get({path: PATH, version : '0.0.1'}, usersList);

//Posts the new record, which is embedded with the post server call...
server.post({path: PATH, version : '0.0.1'}, addUser);

//Fetch the record based on the primary key attached with url...
server.get({path: PATH+'/:id', version : '0.0.1'}, getUser);

//Update the existing record, by the primary key...
server.put({path: PATH+'/:id', version : '0.0.1'}, updateUser);

//Delete the existing record, by the primary key...
server.del({path: PATH+'/:id', version : '0.0.1'}, deleteUser);


var BASE = '/users'
//Emergency - to reset the database
server.get({path: BASE+'/reset', version : '0.0.1'}, resetDatabase);

function deleteUser(req, res, next)
{
  res.setHeader('Access-Control-Allow-Origin','*');
   console.log('<---->'+req.params.id);
  employees.remove( {_id: mongojs.ObjectId(req.params.id)}, function(err,success){

    if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
  });
}


function addUser(req , res , next)
{
    var user = {};
     // user.id = req.params.id; 
    user.fname = req.params.fname;
    user.lname = req.params.lname;
    user.age = req.params.age;
    
 
    res.setHeader('Access-Control-Allow-Origin','*');  

    employees.save(user , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(201 , user);
    
            return next();
        }else{
            return next(err);
        }
    });
}
function resetDatabase(req , res , next)
{
    res.setHeader('Access-Control-Allow-Origin','*');  
    employees.drop(function(err,success){

    if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
  });
   
}

function updateUser(req , res , next)
{
    var user = {};
     // user.id = req.params.id; 
    user.fname = req.params.fname;
    user.lname = req.params.lname;
    user.age = req.params.age;
    
 
    res.setHeader('Access-Control-Allow-Origin','*');  

    employees.update({_id : mongojs.ObjectId(req.params.id)},user,  function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(201 , user);
    
            return next();
        }else{
            return next(err);
        }
    });
}


function usersList(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    employees.find().sort({postedOn : -1} , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
 
    });
 
}



function getUser(req, res , next){

    res.setHeader('Access-Control-Allow-Origin','*');
   

   console.log('inside get Comments'+req.params.id );
   employees.findOne({ _id : mongojs.ObjectId(req.params.id)} , function(err , success){
           
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            
            res.send(200,success);
            return next();
        }
        else{
            return next(err);
        }
    });

}



server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});
