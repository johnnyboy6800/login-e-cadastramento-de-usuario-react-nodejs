import React from "react"
import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Cadastro() {
    const [cnome, setCNome] = useState('');
    const [cemail, setCEmail] = useState('');
    const [csenha, setCSenha] = useState('');
    const navigate = useNavigate();
    function cadastre(event) {
        event.preventDefault();
        const creating = axios.post('//localhost:8000/cadastro', {cnome, cemail, csenha})
        .then(res => console.log(res), navigate('/login', alert("cadastramento realizado com sucesso")))
        .catch(err => console.log(err))
    }
    return (
        <div className="backimageC">
            <div className="content">        
                <div className="input-group mb-3">
                <form onSubmit={cadastre}>
                    <br />
                    <h3>Realize seu cadastro:</h3>
                    <label htmlFor="cnome">Nome: </label>
                    <input id="cnome" className="form-control" type="text" onChange={e => setCNome(e.target.value)} /><br /><br/>
                    <label htmlFor="">Email:</label>
                    <input id="cemail" className="form-control" type="email" onChange={e => setCEmail(e.target.value)}/><br /><br />
                    <label htmlFor="senha">Senha:</label>
                    <input id="csenha" className="form-control" type="password" onChange={e => setCSenha(e.target.value)}/><br /><br />
                    <button className="btn btn-outline-primary">Cadastre-se</button>
                    <br />
                    <h3> Ou faça o <Link to={"/login"}>Login</Link></h3> 
                </form>
                </div>
                </div>
            </div>
    )
}