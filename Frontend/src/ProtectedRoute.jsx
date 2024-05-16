import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet,useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children, role}) => {

  const navigate = useNavigate();
     const {userToken} = useSelector(state=>state.auth)

        if(userToken !== null){
            return navigate('/login');
        }
          
  return (children ? children : <Outlet/>)
   
}

export default ProtectedRoute