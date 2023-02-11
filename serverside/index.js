const express = require("express");
const cors = require("cors");
const bodyparse = require("body-parser");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "payment"
});

app.use(bodyparse.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('my app server is using');
});

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_payment";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });

app.post("/api/sendmaize",(req,res) => {
    const{id,amount,paymenttime,status } = req.body;
    const sqlinsert = " INSERT INTO tbl_payment (id,amount,paymenttime,status) VALUES (?,?,?,?)";
    db.querry(sqlinsert,[id,amount,paymenttime,status],(error,result)=>{
        if(error){
            console.log("error",error);
            console.log("result",result);
            res.send(result);
        });
    });

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_borrow";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });
        
app.post("/api/sendmaize",(req,res) => {
    const{p_id,item,timetaken,returntime } = req.body;
    const sqlinsert = " INSERT INTO tbl_borrow (p_id,item,timetaken,returntime) VALUES (?,?,?,?)";
db.querry(sqlinsert,[id,item,timetaken,returntime],(error,result)=>{
if(error){
    console.log("error",error);
    console.log("result",result);
    res.send(result);
    }); 
    });

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_recommend";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });

app.post("/api/sendmaize",(req,res) => {
const{id,amount,paymenttime,status } = req.body;
const sqlinsert = " INSERT INTO tbl_recommend (id,addnew_materia,recommendto_service) VALUES (?,?,?)";
db.querry(sqlinsert,[id,addnew_materia,recommendto_service],(error,result)=>{
    if(error){
        console.log("error",error);
        console.log("result",result);
        res.send(result);
    });
});

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_checkout";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });
        
app.post("/api/sendmaize",(req,res) => {
    const{c_id,item,status } = req.body;
    const sqlinsert = " INSERT INTO tbl_checkout (c_id,item,status) VALUES (?,?,?)";
    db.querry(sqlinsert,[c_id,item,status],(error,result)=>{
        if(error){
            console.log("error",error);
            console.log("result",result);
            res.send(result);
        });
    });

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_user";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });
                
app.post("/api/sendmaize",(req,res) => {
    const{u_id,user_role,fully_name,sex,nationality,age } = req.body;
    const sqlinsert = " INSERT INTO tbl_user (u_id,user_role,fully_name,sex,nationality,age) VALUES (?,?,?,?,?,?)";
    db.querry(sqlinsert,[u_id,user_role,fully_name,sex,nationality,age],(error,result)=>{
        if(error){
            console.log("error",error);
            console.log("result",result);
            res.send(result);
        });
    });

app.get("api/maize",(req, res) => {
    const sqlquerry =" SELECT * FROM  tbl_search";
    db.querry(sqlquerry,(error, result )=> { 
        console.log("error",error);
        console.log("result",result);
        res.send (result);
    });
    });
    
app.post("/api/sendmaize",(req,res) => {
const{s_id,books,articles,slides,pastpapers } = req.body;
const sqlinsert = " INSERT INTO tbl_search (s_id,books,articles,slides,pastpapers) VALUES (?,?,?,?,?)";
db.querry(sqlinsert,[s_id,books,articles,slides,pastpapers],(error,result)=>{
    if(error){
        console.log("error",error);
        console.log("result",result);
        res.send(result);
    });
});


                
        

        

                    

            
    
            

