import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40em;
  height: 15em;
  margin-left: -20em;
  margin-top: -7.5em;
  text-align: center;
  border-radius: 1.5em;
  background: #37BC9B;
`;

const Title = styled.h1`
  position: relative;
  top: 50%;
  margin-top: -0.6em;
  font-size: 5em;
  font-family: sans-serif;
  color: #F5F7FA;
`;

const Index = () => (
  <div>
    <Wrapper>
      <Title>this is redub</Title>
    </Wrapper>
  </div>
);

export default Index;
