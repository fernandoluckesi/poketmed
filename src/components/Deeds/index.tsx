import React from 'react';
import { Container, List } from './styles';
import {
  ListItemQueries,
  ListItemQueriesProps,
} from '../../components/ListItemQueries';

const dataList: ListItemQueriesProps[] = [
  {
    id: 1,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias tem vindo a ser o texto padrão usado por estas indústr',
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
  {
    id: 4,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
  {
    id: 5,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
  {
    id: 6,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
  {
    id: 7,
    title: 'DERMATOLOGIA',
    date: '25/03/2023',
    subtitle: 'Aarao Lima',
    hour: '10:30',
    content:
      'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias...',
  },
];

export function Deeds() {
  return (
    <Container>
      <List
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItemQueries
            marginFooter={index === dataList.length - 1}
            data={item}
          />
        )}
      />
    </Container>
  );
}
