import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Corolla() {
    return (
        <div>
            <img src="/carros/corolla-gr-sport.png" alt="" width={600}/>
            <p>R$36.000 <br /> Corolla gr sport 2021</p>
            <center> <p>Ficha técnica</p> </center>
            <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Motor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>tipo</td>
                    <td>4 cilindros em linha</td>
                </tr>
                <tr>
                    <td>Valvulas</td>
                    <td>16 (4 por cilindro)</td>
                </tr>
                <tr>
                    <td>Alimentação</td>
                    <td> Injeção eletrônica direta e indireta multiponto</td>
                </tr>
                <tr>
                    <td>Posição</td>
                    <td>Transversal / Dianteiro</td>
                </tr>
                <tr>
                    <td>Combustivel</td>
                    <td>Etanol / Gasolina</td>
                </tr>
                <tr>
                    <td>Potência(cv)</td>
                    <td>177 (E) / 169 (G)</td>   
                </tr> 
                <tr>
                    <td>Cilindradas(cm3)</td>
                  
                    <td>1986</td>             
                </tr>
                <tr>
                    <td>Torque(Kfg.m)</td>
                    <td>21,4 (E) / 21,4(G)</td>    
                </tr>
                <tr>
                    <td>Direção</td>
                    <td>Elétrica</td>
                </tr>
                <tr>
                    <td>Tração</td>
                    <td>Dianteira</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Corolla;