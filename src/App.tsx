import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { WorkSpace } from "./components/WorkSpace";
import { useAppSelector } from "./store";
import { WorkHeader } from "./components/WorkHeader";
import { WorkFooter } from "./components/WorkFooter";
import "./styles/App.scss";

export const App = () => {
  const {auth: { isUserAuth }} = useAppSelector(state => state);

  return (
    <BrowserRouter>
      <Layout className="app-layout">
          <WorkHeader/>

          <Content>
            <WorkSpace />
          </Content>

          <WorkFooter/>
      </Layout>
    </BrowserRouter>
  );
};
