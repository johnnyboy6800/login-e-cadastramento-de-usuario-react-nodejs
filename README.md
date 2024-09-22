# login-e-cadastramento-de-usuario-react-nodejs
Site de login e cadastramento de usuário criado em react e nodejs como backend server. Para o banco de dados foi utilizado mysql. O site também possui uma pagina de perfil de usuário que é renderizada após o login ser efetuado.


# Para realizar as requisições no front-end, eu utilizei fetching e a biblioteca axios: 
Exemplo utilizando fetch:
```
const handlersubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('//localhost:8000/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, senha}),
        })
```


Exemplo utilizando axios:
```
  function cadastre(event) {
        event.preventDefault();
        const creating = axios.post('//localhost:8000/cadastro', {cnome, cemail, csenha})
        .then(res => console.log(res), navigate('/login', alert("cadastramento realizado com sucesso")))
        .catch(err => console.log(err))
    }
```


# Para o banco de dados foi utilizado Mysql
sudo apt install mysql-server

# Nodejs foi utilizado como escolha para o backend
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Página de login 100% funcional
![Screenshot from 2024-09-18 19-37-41](https://github.com/user-attachments/assets/0a3f4d3d-66a2-418b-9b4f-3584023f8670)


# Página de cadastro de usuário
![Screenshot from 2024-09-18 19-38-37](https://github.com/user-attachments/assets/af77e1e9-b754-4438-8527-31ff1df83777)


# Página de perfil de usuário
![Screenshot from 2024-09-18 19-38-14](https://github.com/user-attachments/assets/d966fec9-717e-4f71-a7ed-0e36ae6f6a70)

# Password encryption usando bcrypt
```
  db.query(email, [req.body.cemail], (err, result) => {
    if (err) {
        return res.json({ success: false, message: "Erro ao verificar email." });
    }
    if (result.length > 0) {
        // Se o email já existe
        return res.json({ success: false, message: "Usuário já existente." });
    } else {
        
        bcrypt.genSalt(saltRounds, (err, salt) => {     // geração de salt
          if (err){
            return res.json({message: "ocorreu um erro no gensalt"})
          } else {
            return console.log("salt gen realizado")
          }
          });
        bcrypt.hash(lsenha, saltRounds, (err, hash) => {    // password hashing
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

```

Resultado final:  
![Screenshot from 2024-09-22 19-08-42](https://github.com/user-attachments/assets/41328ad5-68d0-4c19-b1fd-23f878b2c59a)





      
