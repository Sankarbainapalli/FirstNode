var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: '',  
database: "javatpoint"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
var values = [  
['1', 'sankar', '23', 'Hyderabad'],  
['2', 'Charan', '25', 'Hyderabad'],  
['3', 'krishna', '25', 'Hyderabad']  
];  
con.query(sql, [values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted: " + result.affectedRows);  
});  
});  