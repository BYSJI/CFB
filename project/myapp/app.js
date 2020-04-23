#!/usr/bin/node

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());

app.all('*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

//注册
app.post('/api/register',function(req,res){
     console.log('register');
  body=req.body;
     console.log('body.tel:',body.tel);
  db.query('select * from register where account=?',[body.tel],function(err,result){
      if(err){
        res.status(500).end('DB ERROR!');
      }if(result[0]){
        res.send('1');
      }else{
        res.send('0');
        db.query('insert into register(account,password) values(?,?)',[body.tel,body.pwd],(err,result)=>{
          if(err){
            res.status(500).end('DB ERROR!');
          }
          db.query('select * from register where account=?',[body.tel],(err,result)=>{
            if(err){
              res.status(500).end('DB ERROR!');
            }else{
              // console.log(result);
              uid=result[0].uid;
              db.query('insert into user_info(uid,avatar,bid) values(?,"moren.jpg",1)',[uid],(err,result)=>{
                if(err){
                  res.status(500).end('DB ERROR!');
                }
                // console.log(result);
              });
            }
          });
        });           
      }
  });
});

//登录
app.post('/api/login',function(req,res){
	var chunk='';
  const sql='select * from register where account=?';   
	req.on('data',(data)=>{
		chunk=JSON.parse(data);	
    db.query(sql,[chunk.tel],(err,result)=>{
      if(err){
          res.status(500).end('DB ERROR!');
      }else{
        res.send(result);
      }
    });
  });
});

//登陆次数
app.post('/api/login/count',function(req,res){
  req.on('data',(data)=>{
    uid = JSON.parse(data).uid;
    db.query('select * from register where uid=?',[uid],function(err,result){
      if(err){res.status(500).send('DB ERROR!');}
      else{
        count = result[0].loginCount;
        // console.log('count:',count);
        if(count==0){
          // console.log('count:',count);
          res.send('0');
          db.query('update register set loginCount=? where uid=?',[count+1,uid],function(err,result){
            if(err){
                res.status(500).end('DB ERROR!');
            }
          });
        }        
      }
    });    
  })
});

// get
function get(sql, path) {
    app.get('/api/' + path, function (req, res) {
        db.query(sql, function (err, result) {
            if (err) {
                console.error(err);
            }
            // console.log('result:',result);
            res.send(result);
        })
    })
}
//post
function post(sql, url) {
    var options = [];
    app.post('/api/' + url, function (req, res) {
        var body = req.body;
        options = [];
        for (var i in body) {
            options.push(body[i]);
        }
        // console.log('options',options);
        db.query(sql, [...options], function (err, result) {
            if (err) {
                res.send(err);
            }
            // console.log('result:',result);
        });
    });
}


app.listen(8080, () => console.log('Example app listening on port 8080!'))