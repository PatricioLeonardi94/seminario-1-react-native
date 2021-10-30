import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const NavBar = () => {
    return (
        <Header style={styles.menu}>
            <Left>
                <Button transparent>
                    <Icon style={styles.item} name='menu' />
                </Button>
            </Left>
            <Body>
                <Title style={styles.item}>Onda Verde</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon style={styles.item} name='profile' />
                </Button>
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    menu: {
      backgroundColor: '#84D31E',
    },
    item: {
        color:'#FFFFFF',
    }
});
  

export default NavBar;