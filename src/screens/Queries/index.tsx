import React, { useState } from 'react';

import {
  FilterIcon,
  ReturnPageIcon,
  Container,
  Header,
  TitlePage,
  Nav,
  SearchInput,
  SearchBox,
  SearchIcon,
  NavItemsBox,
  NavItem,
  NavItemText,
  List,
} from './styles';

import { Deeds } from '../../components/Deeds';
import { Scheduleds } from '../../components/Scheduleds';
import { QuerieModal, QuerieModalInfos } from '../../components/QuerieModal';

export function Queries() {
  const [optionListItem, setOptionListItem] = useState('scheduled');
  const [querieModalInfos, setQuerieModalInfos] = useState<QuerieModalInfos>({
    id: 0,
    type: '',
  });
  const [querieModalInfosIsOpen, setQuerieModalInfosIsOpen] = useState(true);

  const handleClickQuerieModalInfos = (infos: QuerieModalInfos) => {
    setQuerieModalInfos(infos);
  };

  const handleClickOpenModal = () => {
    setQuerieModalInfosIsOpen(true);
  };

  const handleClickCloseModal = () => {
    setQuerieModalInfosIsOpen(false);
  };

  const handleChangeListItem = (option: string) => {
    setOptionListItem(option);
  };

  return (
    <>
      {querieModalInfosIsOpen ? (
        <QuerieModal
          infos={querieModalInfos}
          handleClickCloseModal={handleClickCloseModal}
        />
      ) : (
        <Container>
          <Header>
            <ReturnPageIcon name="keyboard-arrow-left" />
            <TitlePage>Consultas</TitlePage>
            <FilterIcon name="filter" />
          </Header>
          <Nav style={{ borderBottomWidth: 1 }}>
            <SearchBox style={{ borderBottomWidth: 1 }}>
              <SearchInput placeholder="Pesquisar" />
              <SearchIcon name="md-search" />
            </SearchBox>
            <NavItemsBox>
              <NavItem
                style={{
                  borderBottomWidth: optionListItem === 'scheduled' ? 2 : 0,
                }}
                isActive={optionListItem === 'scheduled'}
                onPress={() => handleChangeListItem('scheduled')}
              >
                <NavItemText isActive={optionListItem === 'scheduled'}>
                  Agendadas
                </NavItemText>
              </NavItem>
              <NavItem
                style={{
                  borderBottomWidth: optionListItem === 'deeds' ? 2 : 0,
                }}
                isActive={optionListItem === 'deeds'}
                onPress={() => handleChangeListItem('deeds')}
              >
                <NavItemText isActive={optionListItem === 'deeds'}>
                  Realiazadas
                </NavItemText>
              </NavItem>
            </NavItemsBox>
          </Nav>
          <List>{optionListItem === 'deeds' ? <Deeds /> : <Scheduleds />}</List>
        </Container>
      )}
    </>
  );
}
