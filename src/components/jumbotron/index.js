import React from 'react';

import { Container, Left, Right, Title, Text, Mid } from './styles/jumbotrom';

const Jumbotron = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};

Jumbotron.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Jumbotron.Centro = ({ children, ...restProps }) => {
  return <Mid {...restProps}>{children}</Mid>;
};

Jumbotron.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default Jumbotron;