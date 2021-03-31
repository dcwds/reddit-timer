import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_SUBREDDIT } from '../../constants';
import * as S from './hero.style';
import productImage from './product.png';
import productImage2x from './product-2x.png';

const Hero = () => (
  <S.Hero>
    <S.Headline>No reaction to your reddit posts?</S.Headline>
    <S.Description>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.Description>
    <S.CTAButton to={`/search/${DEFAULT_SUBREDDIT}`}>Show me the best time</S.CTAButton>

    <S.DefaultSubreddit>
      /r/
      {DEFAULT_SUBREDDIT}
    </S.DefaultSubreddit>

    <Link to={`/search/${DEFAULT_SUBREDDIT}`}>
      <img
        srcSet={`${productImage}, ${productImage2x} 2x`}
        src={productImage2x}
        alt="product"
      />
    </Link>
  </S.Hero>
);

export default Hero;
