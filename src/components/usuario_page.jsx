import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./style.css";   

export default function UserPage() {
    const navigate = useNavigate();  
    const token = window.localStorage.getItem("token");
    let userId;
    let userEmail

    try {
        const decoded = jwtDecode(token);
        console.log("seu nome de usuario", decoded.nome)
        console.log("seu email", decoded.email )
        userId = decoded.nome;
        userEmail = decoded.email;

    } catch(error) {
        console.error("mais um erro :(", error)
    };

    const logout = () => {
        
        window.localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div className="center">
            <div className="greenBack" style={{paddingTop: "40px"}}>
                <center>
                <img src="/Assets/ProfilePicture.png" className="img-profile" alt="profile" />
                </center>
            </div>
                <div className="profileText">
                    {userId ? (
                    <h3 className="userimage">Bem vindo {userId}</h3>
                    ) : (
                        <p>erro no token</p>
                    )}
                    <p>Email: {userEmail}</p>
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
            </div>
            

    );
};