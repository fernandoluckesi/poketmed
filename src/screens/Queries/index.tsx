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
import { Scheduled } from '../../components/Scheduled';
import { Deeds } from '../../components/Deeds';
import { ListItemQueries } from '../../components/ListItemQueries';

const dataList = [
  {
    id: 1,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
  {
    id: 2,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
  {
    id: 3,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
];

export function Queries() {
  const [optionListItem, setOptionListItem] = useState('scheduled');

  const handleChangeListItem = (option: string) => {
    setOptionListItem(option);
  };

  return (
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
      <List>{optionListItem === 'deeds' ? <Deeds /> : <Scheduled />}</List>
    </Container>
  );
}
