import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${getStatusBarHeight() + RFValue(160)}px;
`;

export const HeaderBackground = styled.ImageBackground`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 100%;
  resize: cover;
`;

export const HeaderFilter = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 100%;

  padding: 0 16px;
`;

export const TopHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(16)}px;
`;

export const PerfilSettingsButton = styled(TouchableOpacity)``;

export const Icon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;

export const Logo = styled.Image`
  height: ${RFValue(24)}px;
  width: ${RFValue(132)}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${Platform.OS === 'android' ? '20px' : '24px'};
  margin-top: ${RFValue(48)}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
  flex: 1;
`;
