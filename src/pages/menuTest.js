import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, StatusBar, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';


class Menu extends Component {

    state = {
        telas: [
            { id: 1, tela: 'SecondPage', description: 'Animação de Conclusão', img: require('../assets/img/1.json') },
            { id: 2, tela: 'ThirdPage', description: 'TextInput Mascarado', img: require('../assets/img/2.json') },
            { id: 3, tela: 'FourthPage', description: 'Tabela de Dados', img: require('../assets/img/3.json') },
            { id: 4, tela: 'Principal', description: 'xxx', img: require('../assets/img/0.json') },
        ]
    }

    render() {

        const { navigate } = this.props.navigation;
        const { telas } = this.state;

        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#16a085' />
                <FlatList
                    data={telas}
                    renderItem={({ item }) => (

                        <View style={{ alignItems: 'center', backgroundColor: '#ddd', paddingTop: 10 }}>

                            <TouchableOpacity
                                style={{ width: '90%', height: 200, marginBottom: 30 }}
                                onPress={() => navigate(item.tela)}>

                                <View style={styles.banner}>
                                    <LottieView
                                        ref={animation => {
                                            this.animation = animation;
                                        }}
                                        source={item.img}
                                        loop={true}
                                        autoPlay
                                        speed={0.6}
                                        style={{width:130, height:130}}
                                    />

                                    <View style={{ width: '100%', height: '35%', backgroundColor: '#16a085', justifyContent: 'flex-end', borderBottomEndRadius: 20 }}>
                                        <Text style={styles.titleBanner}>{item.description}</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    scroll: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
        padding: 20
    },
    banner: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        marginBottom: 30,
        justifyContent: 'flex-end',
        borderRadius: 20,
        alignItems: 'center'
    },
    titleBanner: {
        color: '#fff',
        fontSize: 30,
        margin: 10,
        fontFamily: 'GothamBold'
    }
});

export default Menu;