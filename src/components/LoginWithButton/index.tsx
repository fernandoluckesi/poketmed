import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

interface Props extends TouchableOpacityProps {
  backgroundColor: string;
  iconSource: () => void;
  title: string;
}

export function LoginWithButton({
  title,
  iconSource,
  backgroundColor,
  ...rest
}: Props) {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      <Icon source={iconSource} />
      <Title backgroundColor={backgroundColor}>{title}</Title>
    </Container>
  );
}
