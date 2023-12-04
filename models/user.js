const db = require("./db");

const usersGetQuery = async () => {
    try {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM USERS;',  function (err, result) {
                if(err) throw err
                console.log(result)
                resolve(result);
            }); 
          });
        
    } catch (error) {
        throw error
    }
   
}
const usersPostQuery = (request) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO USERS (name,phone,email) VALUES('${request.name}','${request.phone}','${request.email}');`, function(err,result){
            if(err) throw err
            resolve(result);
        });
      });
   
   
}
const usersPutQuery = (request,id) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE users SET name='${request.name}',phone='${request.phone}',email='${request.email}' WHERE id = ${id}`, function(err,result){
            if(err) throw err
            resolve(result);
        });
    });
}
const usersDeleteQuery = (id) => {
    return new Promise((resolve, reject) => {
    db.query(`DELETE FROM users WHERE id = ${id}`, function(err,result){
        if(err) throw err
        resolve(result);
    });
    }); 
}
module.exports = {
    usersGetQuery  ,
    usersPostQuery,
    usersPutQuery,
    usersDeleteQuery
}