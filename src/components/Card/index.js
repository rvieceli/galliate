import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Menu from '../Menu';

import {
  Container,
  Wrapper,
  Header,
  Content,
  Footer,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Card({ translateY }) {
  let offset = 0;
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Wrapper
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Header>
            <Icon name="attach-money" size={20} color="#666" />
            <Icon name="visibility-off" size={20} color="#666" />
          </Header>
          <Content>
            <Title>Saldo disponivel</Title>
            <Description>R$ 6.142,25</Description>
          </Content>
          <Footer>
            <Annotation>
              Transferência de R$ 5.000,00 recebida 21 fev
            </Annotation>
          </Footer>
        </Wrapper>
      </PanGestureHandler>
    </Container>
  );
}
