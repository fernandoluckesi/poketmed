import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

interface InfoTextProps {
  $isLabel: boolean;
  $isTag: boolean;
  $notLabelInText: boolean;
  $marginLeft: string;
}

interface QuerieInfoProps {
  $row: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  padding: 0 16px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${getStatusBarHeight()};
  padding-bottom: 16px;
  padding-top: 8px;
`;

export const ReturnPageBtn = styled(TouchableOpacity)``;

export const ReturnPageIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  margin-left: -6px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: 22px;
  margin-top: ${Platform.OS === 'android' ? '5px' : 0};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const QuerieInfoBox = styled.View`
  margin-top: 20px;
`;

export const QuerieInfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const QuerieInfo = styled.View<QuerieInfoProps>`
  flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};
  margin-top: 8px;
`;

export const InfoText = styled.Text<InfoTextProps>`
  color: ${({ theme, $isTag }) =>
    $isTag ? theme.colors.shape : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ $isLabel }) => ($isLabel ? '12px' : '14px')};
  margin-top: ${({ $notLabelInText }) => ($notLabelInText ? '6px' : '0px')};
`;

export const InfoTagBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InfoTextTag = styled.View`
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 24px;
  margin-right: 8px;
  margin-top: 10px;
  padding: 10px 14px;
`;

export const BtnsManagerBox = styled.View`
  margin: 32px 0;
`;

export const FinishBtn = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  justify-content: center;
  padding: 14px 0;
`;

export const FinishBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  text-align: center;
`;

export const EditBtn = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
  padding: 14px 0;
`;

export const EditBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  text-align: center;
`;

export const DeleteBtn = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
  padding: 14px 0;
`;

export const DeleteBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  text-align: center;
`;
