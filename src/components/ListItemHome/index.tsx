import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Icon,
  IconBox,
  TextBox,
  TextContent,
  Title,
} from './styles';

export interface ListItemHomeProps {
  title: string;
  text: string;
  icon: JSX.Element;
}

interface Props extends TouchableOpacityProps {
  data: ListItemHomeProps;
}

export function ListItemHome({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconBox>{data.icon}</IconBox>
      <TextBox>
        <Title>{data.title}</Title>
        <TextContent>{data.text}</TextContent>
      </TextBox>
    </Container>
  );
}
