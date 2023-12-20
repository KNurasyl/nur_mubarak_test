import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Login } from './Auth/Login';


export const WorkSpace = () => {
    return (
        <Layout className="app-content">
            <Routes>
                <Route path={"/"} element={null} />
                <Route path={"/login"} element={<Login/>} />
            </Routes>
        </Layout>
    );
};