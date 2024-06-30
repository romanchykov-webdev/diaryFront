import {Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = () => {

    // const auth = false;
    const auth = false
    console.log(auth)
    return (
        auth ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export default PrivateRoute;