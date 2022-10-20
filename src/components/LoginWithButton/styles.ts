import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface backgroundColorProps {
  backgroundColor: string;
}

export const Container = styled(RectButton)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#ffff'};
  ${(props) =>
    props.backgroundColor
      ? css`
          border: 2px solid ${props.backgroundColor};
        `
      : css`
          border: 2px solid ${({ theme }) => theme.colors.text_dark};
        `};
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 18px;
  padding: 16px;
  width: 100%;
`;

export const Icon = styled.Image`
  left: 16px;
  position: absolute;
  top: 16px;
`;

export const Title = styled.Text<backgroundColorProps>`
  color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors.shape : theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;
