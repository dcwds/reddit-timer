import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ asMark = false }) => (
  <Link to="/">
    <img src={`./logo-${asMark ? 'mark' : 'full'}.png`} alt="logo" />
  </Link>
);

export default Logo;
