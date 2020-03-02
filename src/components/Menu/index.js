import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Code,
  Nav,
  Item,
  Text,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="http://www.nubank.com.br/deposit"
          size={80}
          backgroundColor="#fff"
          color="#0093d0"
        />
      </Code>
      <Nav>
        <Item>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text>Me ajuda</Text>
        </Item>
        <Item>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text>Perfil</Text>
        </Item>
        <Item>
          <Icon name="credit-card" size={20} color="#fff" />
          <Text>Configurar cartão</Text>
        </Item>
        <Item>
          <Icon name="smartphone" size={20} color="#fff" />
          <Text>Configurações do app</Text>
        </Item>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
