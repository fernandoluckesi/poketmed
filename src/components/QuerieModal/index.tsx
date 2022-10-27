import React from 'react';
import { Alert, Modal } from 'react-native';
import {
  Container,
  Header,
  ReturnPageIcon,
  HeaderTitle,
  QuerieInfoBox,
  QuerieInfoTitle,
  QuerieInfo,
  InfoText,
  InfoTextTag,
  ReturnPageBtn,
  InfoTagBox,
  Content,
  FinishBtn,
  FinishBtnText,
  EditBtn,
  EditBtnText,
  DeleteBtn,
  DeleteBtnText,
  BtnsManagerBox,
} from './styles';

export interface QuerieModalInfos {
  id: number;
  type: string;
}

interface Props {
  infos: QuerieModalInfos;
  handleClickCloseModal: () => void;
}

export function QuerieModal({ infos, handleClickCloseModal }: Props) {
  return (
    <Container>
      <Header>
        <ReturnPageBtn>
          <ReturnPageIcon name="keyboard-arrow-left" />
        </ReturnPageBtn>
        <HeaderTitle>Consulta agendada</HeaderTitle>
      </Header>
      <Content>
        <QuerieInfoBox>
          <QuerieInfoTitle>Dados do médico(a):</QuerieInfoTitle>
          <QuerieInfo>
            <InfoText $isLabel>CRM:</InfoText>
            <InfoText>1845-RN</InfoText>
          </QuerieInfo>
          <QuerieInfo>
            <InfoText $isLabel>NOME:</InfoText>
            <InfoText>Francisca Dutra</InfoText>
          </QuerieInfo>

          <QuerieInfo>
            <InfoText $isLabel>ESPECIALIDADE(S):</InfoText>
            <InfoTagBox>
              <InfoTextTag>
                <InfoText $isTag>Medicina de Família e Comunidade</InfoText>
              </InfoTextTag>
              <InfoTextTag>
                <InfoText $isTag>Medicina</InfoText>
              </InfoTextTag>
              <InfoTextTag>
                <InfoText $isTag>Comunidade</InfoText>
              </InfoTextTag>
              <InfoTextTag>
                <InfoText $isTag>Família</InfoText>
              </InfoTextTag>
            </InfoTagBox>
          </QuerieInfo>
        </QuerieInfoBox>

        <QuerieInfoBox>
          <QuerieInfoTitle>Motivo da consulta:</QuerieInfoTitle>
          <InfoText $notLabelInText>
            É um facto estabelecido de que um leitor é distraído pelo conteúdo
            legível de uma página quando analisa a sua mancha gráfica. Logo, o
            uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de
            letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui",
            tornando-o texto legível
          </InfoText>
        </QuerieInfoBox>

        <QuerieInfoBox>
          <QuerieInfoTitle>Data e hora:</QuerieInfoTitle>
          <QuerieInfo $row>
            <InfoText>Data: 01/05/2022</InfoText>
            <InfoText style={{ marginLeft: 60 }}>Hora: 10:37</InfoText>
          </QuerieInfo>
        </QuerieInfoBox>

        <BtnsManagerBox>
          <FinishBtn onPress={() => Alert.alert('teste')}>
            <FinishBtnText>Finalizar consulta</FinishBtnText>
          </FinishBtn>
          <EditBtn>
            <EditBtnText>Editar consulta</EditBtnText>
          </EditBtn>
          <DeleteBtn>
            <DeleteBtnText>Excluir consulta</DeleteBtnText>
          </DeleteBtn>
        </BtnsManagerBox>
      </Content>
    </Container>
  );
}
