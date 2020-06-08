//importar a dependência do sql3    
const sqlite3 = require ("sqlite3").verbose ()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database ("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados para nossas operações
//db.serialize (() => {
    //criar uma tabela com comando sql, usa a cráse pra não parecer que é texto, mas é comando sqlite
//    db.run (`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            adress TEXT,
//            adress2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `)
//    // inserir dados na tabela (com sql)
//    const query = `
//        INSERT INTO places (
//            image,
//            name,
//            adress,
//            adress2,
//            state,
//            city,
//            items
//        ) VALUES (?,?,?,?,?,?,?);
//    `
//    const values = [
//            "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//            "Papersider",
//            "Guilherme Gemballa, Jardin América",
//            " Número 260",
//            "State",
//            "Rio do Sul",
//            "Resíduos Eletrônicos e Lâmpadas"
//    ]
//    function afterInsertData (err) {
//        if (err) {
//            return console.log (err)
//        }
//        console.log ("Cadastrado com sucesso")
//        console.log (this)
//    }
//    db.run (query, values, afterInsertData)
//    consultar os dados da tabela (com sql)
//    db.all (`SELECT name FROM places`, function (err, rows) {
//        if (err) {
//            return console.log(err)
//        }
//        console.log ("Aqui estão seus registros: ")
//        console.log(rows)
//    })
//    deletar um dado da tabela(não vai ser utilizado no nosso caso, é apenas para aprendizado) (com sql)
   //db.run (`DELETE FROM places WHERE id = ?`, [0], function (err) {
       //if (err) {
            //return console.log (err)
      // }
        //console.log ("Registro deletado com sucesso")
  // })
//})