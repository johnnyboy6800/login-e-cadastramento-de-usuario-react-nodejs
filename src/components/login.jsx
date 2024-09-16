import React, { useState } from "react"
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    

    const handlersubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('//localhost:8000/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, senha}),
        })
        const data = await response.json();

        if (data.success) {
            navigate('/usuario_page');
            alert("login realizado com sucesso", data.message);
            window.localStorage.setItem('token', data.token);
            console.log("login bem sucedido", data.token);

        } else {
            alert(data.message);
        }
       
    }
    

    return(
        <div className="backImage">
            <div className="content">
                <div className="input-group mb-3">     
                    <div className="input-group-prepend">
                    <h3>Realize seu Login:</h3>
                    <form id="for" onSubmit={handlersubmit}>
                            <label htmlFor="email" >Email: </label>
                            <input id="email" className="form-control" type="email" onChange={e => setEmail(e.target.value)}/>
                            <br /><br />
                            <label htmlFor="">Senha: </label>
                            <input id="lsenha" type="password" className="form-control" onChange={e => setSenha(e.target.value)}/> <br /><br />
                            <button className="btn btn-outline-primary">Fazer login</button>
                        </form>
                        <br />
                    <h3> Ou <Link to="/cadastro"> cadastre-se</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    )

}