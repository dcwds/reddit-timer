import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './hero.style';
import productImage from './product.png';
import productImage2x from './product-2x.png';

const Hero = () => (
  <S.Hero>
    <h1>No reaction to your reddit posts?</h1>
    <p>Great timing, great results! Find the best time to post on your subreddit.</p>
    <S.CTAButton to="/search/javascript">Show me the best time</S.CTAButton>

    <S.DefaultSubreddit>/r/javascript</S.DefaultSubreddit>

    <Link to="/search/javascript">
      <img
        srcSet={`${productImage}, ${productImage2x} 2x`}
        src={productImage2x}
        alt="product"
      />
    </Link>
  </S.Hero>
);

export default Hero;
