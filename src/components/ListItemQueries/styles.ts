import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  marginFooter: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: ${({ marginFooter }) => (marginFooter ? '60px' : '16px')};
`;

export const MainContentBox = styled(TouchableOpacity)`
  border-radius: 8px;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: 16px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

export const SubHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

export const Hour = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

export const TextContent = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  margin-top: 10px;
  text-overflow: clip;
`;

export const InitialTextContent = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

export const DoneBtn = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
`;

export const DoneBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;
