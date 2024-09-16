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
  const datac = [req.body.cnome, req.body.cemail, req.body.csenha]
  const ins = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?); "
  
  db.query(ins, datac, (err, data) => {
    if (err) return res.json("error, houve um erro durante o cadastro");
    else {
      return res.json("cadastramento realizado com sucesso")
    }
    
  })

});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Sem token, acesso não autorizado

  // Verifica o token
  jwt.verify(token, 'token', (err, user) => {
      if (err) return res.sendStatus(403); // Token inválido

      req.userId = user.id; // O ID do usuário agora está disponível na requisição
      next();
  });
}


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