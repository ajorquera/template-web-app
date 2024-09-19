import { Outlet } from "react-router-dom";
import Flex from "../components/Flex";
import React from "react";


const OuterLayout = () => {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Outlet />
      </Flex>
  );
};

export default OuterLayout;