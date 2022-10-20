import React, { useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { ListItemHome, ListItemHomeProps } from '../../components/ListItemHome';
import {
  Container,
  Header,
  HeaderBackground,
  HeaderFilter,
  Icon,
  Logo,
  HeaderTitle,
  TopHeader,
  List,
  PerfilSettingsButton,
} from './styles';

export function Home() {
  const [gretting, setGretting] = useState('');

  const theme = useTheme();

  const listItemsData: ListItemHomeProps[] = [
    {
      title: 'Consultas',
      text: 'Consultas agendadas e finalizadas',
      icon: (
        <FontAwesome name="stethoscope" size={64} color={theme.colors.shape} />
      ),
    },
    {
      title: 'Medicamentos',
      text: 'Medicamentos usados e fazendo uso no momento',
      icon: (
        <MaterialCommunityIcons
          name="pill"
          size={64}
          color={theme.colors.shape}
        />
      ),
    },
    {
      title: 'Exames',
      text: 'Exames agendados e já realizados',
      icon: (
        <FontAwesome name="file-text-o" size={64} color={theme.colors.shape} />
      ),
    },
  ];

  const handleTest = (title: string) => {
    Alert.alert(title);
  };

  useEffect(() => {
    const currentHours = new Date().getHours();

    if (currentHours < 12) {
      setGretting('Bom dia');
    } else if (currentHours >= 12 && currentHours < 18) {
      setGretting('Boa tarde');
    } else {
      setGretting('Boa noite');
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderBackground source={require('../../assets/images/7000939.jpg')}>
          <HeaderFilter>
            <TopHeader>
              <PerfilSettingsButton onPress={() => Alert.alert('login')}>
                <Icon name="user" />
              </PerfilSettingsButton>
              <Logo source={require('../../assets/images/logo.png')} />
            </TopHeader>
            <HeaderTitle>{gretting}, Fernando</HeaderTitle>
          </HeaderFilter>
        </HeaderBackground>
      </Header>
      <List
        data={listItemsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ListItemHome data={item} onPress={() => handleTest(item.title)} />
        )}
      />
    </Container>
  );
}
