import { Outlet } from "react-router-dom";
import Flex from "../components/Flex";
import React from "react";


const OuterLayout = () => {
    return (
      <Flex style={{height: '100vh'}} alignItems="center" justifyContent="center">
        <Outlet />
      </Flex>
  );
};

export default OuterLayout;