import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../hooks/auth";

const PrivateRoute = () => {
    const auth = useAuth()


    // const auth = false
    // console.log(auth)
    return (
        auth ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export default PrivateRoute;