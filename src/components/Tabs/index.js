import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Tab, Item, Title } from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.1],
          extrapolate: 'clamp',
        }),
      }}
    >
      <Tab>
        <Item>
          <Icon name="person-add" size={20} color="#fff" />
          <Title>Indicare amici</Title>
        </Item>
        <Item>
          <Icon name="chat-bubble-outline" size={20} color="#fff" />
          <Title>Carica</Title>
        </Item>
        <Item>
          <Icon name="arrow-downward" size={20} color="#fff" />
          <Title>Depositar</Title>
        </Item>
        <Item>
          <Icon name="arrow-upward" size={20} color="#fff" />
          <Title>Transferir</Title>
        </Item>
        <Item>
          <Icon name="lock" size={20} color="#fff" />
          <Title>Indicar amigos</Title>
        </Item>
        <Item>
          <Icon name="person-add" size={20} color="#fff" />
          <Title>Bloquear cartão</Title>
        </Item>
      </Tab>
    </Container>
  );
}
