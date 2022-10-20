import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background-color: ${({ theme, focused }) =>
    focused ? theme.colors.primary : theme.colors.secondary};
  border-radius: 30px;
  justify-content: center;
  height: 40px;
  margin-bottom: 48px;
  width: 40px;
`;

export const Icon = styled(Entypo)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 32px;
`;
