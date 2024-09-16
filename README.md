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


      
