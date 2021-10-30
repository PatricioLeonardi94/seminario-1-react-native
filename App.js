import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Content, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import NavBar from './components/NavBar';

export default function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Content style={styles.content}>
          <Text style={styles.text}>Bienvenido a tu asistente de reciclado!</Text>
          <StatusBar style="auto" />
          <Button style={styles.startButton}><Text> EMPEZAR </Text></Button>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'lightgrey',
  },
  startButton: {
    backgroundColor: '#84D31E',
  }
});
