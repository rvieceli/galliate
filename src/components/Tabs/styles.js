import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const Tab = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const Item = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #fff;
`;
