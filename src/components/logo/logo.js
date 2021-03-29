import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from './logo-full.svg';
import logoMark from './logo-mark.svg';

const Logo = ({ asMark = false }) => (
  <Link to="/"><img src={asMark ? logoMark : logoFull} alt="logo" /></Link>
);

export default Logo;
