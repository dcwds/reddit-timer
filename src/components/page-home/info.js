import React from 'react';
import * as S from './info.style';
import Container from '../common/container';

const Info = () => (
  <Container>
    <S.Block id="how-it-works">
      <S.Heading>How it works</S.Heading>
      <S.List>
        <S.Item>We find the 500 top posts from the past year for a subreddit.</S.Item>
        <S.Item>The data is visualized in a heatmap grouped by weekday and hour of the day.</S.Item>
        <S.Item>See immediately when to submit your reddit post.</S.Item>
      </S.List>
    </S.Block>

    <S.Block id="about">
      <S.Heading>About</S.Heading>
      <p>
        This app was created during a course on
        {' '}
        <a href="https://profy.dev">profy.dev</a>
        {' '}
        with the goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, Asana, Zeplin, GitHub,
        pull requests and code reviews.
        {' '}
        <a href="https://profy.dev/employers">Click here for more information.</a>
      </p>
    </S.Block>
  </Container>
);

export default Info;
