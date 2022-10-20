import React from 'react';
import { Container, Icon } from './styles';

interface Props {
  focused: boolean;
}

export function ButtonNew({ focused }: Props) {
  return (
    <Container focused={focused}>
      <Icon name="plus" />
    </Container>
  );
}
