import React from 'react';
import {
  Container,
  Date,
  Header,
  Hour,
  InitialTextContent,
  SubHeader,
  SubTitle,
  TextContent,
  Title,
  MainContentBox,
  DoneBtn,
  DoneBtnText,
} from './styles';

export interface ListItemQueriesProps {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  hour: string;
  content: string;
}

interface Props {
  data: ListItemQueriesProps;
  marginFooter: boolean;
  isDoneBtn: boolean;
}

export function ListItemQueries({
  data,
  marginFooter,
  isDoneBtn,
  ...rest
}: Props) {
  return (
    <Container marginFooter={marginFooter} {...rest}>
      <MainContentBox>
        <Header>
          <Title>{data.title}</Title>
          <Date>{data.date} </Date>
        </Header>
        <SubHeader>
          <SubTitle>{data.subtitle} </SubTitle>
          <Hour>{data.hour} </Hour>
        </SubHeader>
        {!isDoneBtn && (
          <TextContent numberOfLines={2} ellipsizeMode="tail">
            <InitialTextContent>Motivo: </InitialTextContent>
            {data.content}
          </TextContent>
        )}
      </MainContentBox>
      {isDoneBtn && (
        <DoneBtn>
          <DoneBtnText>Finalizar</DoneBtnText>
        </DoneBtn>
      )}
    </Container>
  );
}
