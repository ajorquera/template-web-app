import { Outlet } from "react-router-dom";
import Flex from "../components/Flex";
import React from "react";
import bg from '../assets/imgs/bg-pattern.jpg';

const style = {
  backgroundImage: `url("${bg}"`,
  backgroundRepeat: 'repeat',
  backgroundSize: '500px 250px',
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: -1,
  filter: 'blur(2px) grayscale(100%)',
}

const OuterLayout = () => {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <div style={style} />
        <Outlet />
      </Flex>
  );
};

export default OuterLayout;