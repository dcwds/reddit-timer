import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from './logo-full.png';
import logoMark from './logo-mark.png';

const Logo = ({ asMark = false }) => (
  <Link to="/">
    <img src={asMark ? logoMark : logoFull} alt="logo" />
  </Link>
);

export default Logo;
