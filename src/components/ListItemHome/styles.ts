import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1px auto 16px;
  padding: 16px;
  width: 99%;
`;

export const IconBox = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 13px;
  width: 90px;
`;

export const Icon = styled.Image``;

export const TextBox = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${Platform.OS === 'android' ? '20px' : '24px'};
  margin-bottom: 6px;
`;

export const TextContent = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${Platform.OS === 'android' ? '13px' : '14px'};

  width: 185px;
`;
