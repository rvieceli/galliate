import React from 'react';
import { StatusBar, Animated } from 'react-native';

import { Header, Card, Tabs } from './components';

import { Container } from './styles';

export default function App() {
  const translateY = new Animated.Value(0);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0093d0" />
      <Container>
        <Header />
        <Card translateY={translateY} />
        <Tabs translateY={translateY} />
      </Container>
    </>
  );
}
