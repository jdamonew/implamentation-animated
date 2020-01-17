
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {

        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <StatusBar backgroundColor={'#9013fe'}/>

                
                <Text style={styles.welcome}>Welcome</Text>

                <View style={{width:300, height:300, alignItems:'center',justifyContent:'flex-start', marginTop:-80}}>

                    <LottieView
                        ref={animation => {this.animation = animation;}}
                        source={require('../assets/animation/welcome.json')}
                        loop={true}
                        autoPlay
                        speed={0.6}
                    />
                </View>
                
                <View style={styles.containerText}>
                    <Text style={styles.txtWelcome}>
                        Olá, Tudo Bem? Meu nome é <Text style={{color:'#9013FE'}}>Eric.</Text> 
                        {'\n\n'}Esse ambiente é feito exclusivamente para testes.
                        {'\n'}Espero que você goste do nosso projeto feito em <Text style={{color:'#9013FE'}}>React Native</Text> .
                    </Text>
                </View>
                
                <TouchableOpacity style={styles.startAnimation} onPress={() => navigate('Principal')}>
                    <Text style={styles.textAnimation}>
                        Ir para o Menu
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ddd',
        borderBottomColor:'#8e44ad',
        borderBottomWidth:3,
        borderTopColor:'#8e44ad',
        borderTopWidth:3
    },
    welcome:{
        fontSize:70,
        fontFamily:'GothamBold',
        
        margin:20,
        marginTop:-50,
    },
    startAnimation: {
        height: 50,
        backgroundColor: '#9013FE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        borderWidth:2,
        borderColor:'#8e44ad'
    },
    textAnimation: {
        color: '#fff',
        fontFamily:'GothamBold',
        fontSize: 25,
        padding: 20
    },
    containerText:{
        backgroundColor:'#fff',
        width:400,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#9013fe',
        
    },
    txtWelcome:{
        padding:20,
        fontSize:20,
        fontFamily:'GothamBold',
        alignSelf:'center',
    }

})

