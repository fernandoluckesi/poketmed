import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 300px;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: 8px;
`;

export const ButtonsLogin = styled.View`
  margin-top: 64px;
  padding: 0 32px;
`;
