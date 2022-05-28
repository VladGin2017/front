import { Link } from "react-router-dom";
import AuthUser from "../Auth/AuthAppRef";

const LoginPage = () => {
    
    return (
        <div>
            <AuthUser></AuthUser>
            <p>
                Если еще не зарегистрированы, то <Link to="/register">зарегистрируйтесь!</Link>
            </p>
        </div>
    )
}

export default LoginPage;