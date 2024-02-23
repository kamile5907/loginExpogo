import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {


  pressButton = () => {
    alert("Você pressionou o botão!")
  }
  // aviso que aparece assim que é apertado o botão  de entrar 

  const imagem2 = { uri: 'https://st.depositphotos.com/1813957/4016/i/450/depositphotos_40168951-stock-illustration-abstract-purple-colorful-background.jpg'}
  return (
    <View style={styles.container}>
      <ImageBackground source={imagem2} style={styles.image}>
        {/* imagem maior de fundo de tela */}

        <Image
        source={require('./assets/Filhote.jpg')}
        style={[styles.image2, {resizeMode: 'center' }]}
        // imagem menor acima do cadastro de login
        />
        
        <Text style={{color: 'white', fontSize: 50}}>Faça seu Login</Text>
        {/* texto de título da página */}
     
        <TextInput style={styles.inputName}
          placeholder='Insira seu usúario'
          placeholderTextColor='white'
        //  caixa para colocar nome do usuário
        />
        <TextInput style={styles.inputName}
          placeholder='Digite sua senha'
          inputMode='numeric'
          secureTextEntry={true}
          placeholderTextColor='white'
          // caixa para colocar senha do usuário, estilo de teclado numérico, sem mostrar o conteúdo
        />


        <Button
          style={{ backgroundColor: 'red' }}
          onPress={pressButton}
          title='Entrar'
          color='black'
          // botão para efetuar o login
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: '20%',
    height: '10%',
    // style da página 
  }
});