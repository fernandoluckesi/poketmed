import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface NavItemText {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px 16px;
  padding-top: ${getStatusBarHeight() + RFValue(16)};
`;

export const ReturnPageIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 32px;
`;

export const TitlePage = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;

export const FilterIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 24px;
`;

export const Nav = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border: 0px solid ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const SearchBox = styled.View`
  align-items: center;
  border: 0px solid ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  padding: 4px 0;
`;

export const SearchInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const SearchIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin-left: 16px;
`;

export const NavItemsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  padding: 0 30px;
`;

export const NavItem = styled(TouchableOpacity)`
  border: 0px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 6px;
`;

export const NavItemText = styled.Text<NavItemText>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: 16px;
`;

export const List = styled.View`
  flex: 1;
`;
