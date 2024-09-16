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
![Screenshot from 2024-09-16 20-12-53](https://github.com/user-attachments/assets/9c0c9b6b-8086-4bb5-aff0-425e4791c509)
![Screenshot from 2024-09-16 20-14-03](https://github.com/user-attachments/assets/7248b670-8b5e-4379-a9ff-5cebd3e7ac31)

# Página de cadastro de usuário
![Screenshot from 2024-09-16 20-15-25](https://github.com/user-attachments/assets/ee03341f-958f-4a5d-9a96-fb7677dd341f)

# Página de perfil de usuário
![Screenshot from 2024-09-16 20-18-59](https://github.com/user-attachments/assets/f8201061-4bd5-47a6-a965-48e676ebba76)





      
