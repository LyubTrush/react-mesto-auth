//этим компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи

import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...props }) {
    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
    )
}