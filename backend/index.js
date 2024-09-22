import express from "express";
import cors from "cors";
import mysql from "mysql2";
import jwt from "jsonwebtoken";


export const db = mysql.createConnection({
    host: "localhost",
    user: "lucas",
    password: "lucassql",
    database: "crud"
});

const app = express();


app.use(express.json());
app.use(cors());
/*
app.get('login', (req, res) => {
  const userId = req.params.id; 
  res.send(`O id do usuário é: ${userId}`)
})
*/

app.post('/cadastro', (req, res) => {
  
  const lsenha = req.body.csenha;
  const lemail = req.body.cemail;
  const email = "select * from usuarios where email = (?)"
  const saltRounds = 10;
  
  db.query(email, [req.body.cemail], (err, result) => {
    if (err) {
        return res.json({ success: false, message: "Erro ao verificar email." });
    }
    if (result.length > 0) {
        // Se o email já existe
        return res.json({ success: false, message: "Usuário já existente." });
    } else {
        bcrypt.genSalt(saltRounds, (err, salt) => {
          if (err){
            return res.json({message: "ocorreu um erro no gensalt"})
          } else {
            return console.log("salt gen realizado")
          }
          });
        bcrypt.hash(lsenha, saltRounds, (err, hash) => {
          if (err){
            return res.json({message: "erro durante o hashing"})
          } 
          console.log("hashing realizado com sucesso")
          const ins = "insert into usuarios (nome, email, senha) values (?, ?, ?);"
          const dados= [req.body.cnome, req.body.cemail, hash]
          db.query(ins, dados, (err, result) => {
            if (err) {
                return res.json({ success: false, message: "Erro ao cadastrar usuário." });
            }
            return res.json({ success: true, message: "Cadastro realizado com sucesso!" });
        });
        })  
    }
});
});




app.post('/login', (req, res) =>  {
  const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = (?)"
  
  const bodies = [req.body.email, req.body.senha]

  console.log(bodies);

  db.query(sql, bodies, (err, data) => {
      if (err) {
        console.error("erro na consulta ao banco de dados", err)
        return res.status(500).json({success: false, message: "Erro no servidor"});
      }
      if (data.length > 0) {
        console.log(data);
        const user = data[0];
        const userId = user.nome;
        const userEmail = user.email;
        const token = jwt.sign({id: userId, nome: user.nome, email: userEmail}, 'seu-token', {expiresIn: '1h'})
  
          return res.json({success: true, token: token, message: "login realizado com sucesso"}), console.log(data);
    } else {
        return res.json({success: false, message: "Credenciais inválidas"})
    }
  })
});



app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
