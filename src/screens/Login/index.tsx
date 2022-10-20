import React from 'react';
import { Alert, Image } from 'react-native';
import { LoginWithButton } from '../../components/LoginWithButton';
import { Container, Title, Header, Logo, ButtonsLogin } from './styles';

export function Login() {
  const iconsPath = {
    google: require('../../assets/images/google-logo.png'),
    apple: require('../../assets/images/apple-logo.png'),
    facebook: require('../../assets/images/facebook-logo.png'),
  };

  const handleLoginWithGoogle = () => {
    Alert.alert('teste google');
  };
  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/images/logo.png')} />
        <Title>Sua saúde na palma da mão</Title>
      </Header>
      <ButtonsLogin>
        <LoginWithButton
          backgroundColor=""
          iconSource={iconsPath.google}
          title="CONTINUAR COM O GOOGLE"
          onPress={handleLoginWithGoogle}
        />
        <LoginWithButton
          backgroundColor="#000000"
          iconSource={iconsPath.apple}
          title="CONTINUAR COM A APPLE"
          onPress={handleLoginWithGoogle}
        />
        <LoginWithButton
          backgroundColor="#3C5A98"
          iconSource={iconsPath.facebook}
          title="CONTINUAR COM O FACEBOOK"
          onPress={handleLoginWithGoogle}
        />
      </ButtonsLogin>
    </Container>
  );
}
