import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Login } from './Auth/Login';
import { Main } from './Main/Main';
import { ViewLesson } from './ViewLesson/ViewLesson';


export const WorkSpace = () => {
    return (
        <Layout className="app-content">
            <Routes>
                <Route path={"/nur_mubarak_test"}>
                    <Route index element={<Main/>}/>
                    <Route path="lesson/:id" element={<ViewLesson/>}/>
                </Route>
                <Route path={"/nur_mubarak_test/login"} element={<Login/>} />
            </Routes>
        </Layout>
    );
};