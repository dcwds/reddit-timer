import React from 'react';
import { Link } from 'react-router-dom';
import productImage from './product.png';
import * as S from './hero.style';

const Hero = () => (
  <S.Hero>
    <h1>No reaction to your reddit posts?</h1>
    <p>Great timing, great results! Find the best time to post on your subreddit.</p>
    <S.CTAButton to="/search/javascript">Show me the best time</S.CTAButton>

    <p>/r/javascript</p>

    <Link to="/search/javascript">
      <img src={productImage} alt="product" />
    </Link>
  </S.Hero>
);

export default Hero;
