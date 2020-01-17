import React, { Component } from 'react';
import {View, TouchableOpacity, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class SecondPage extends Component{

    static navigationOptions = {
       headerShown:false,
      };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                
                <StatusBar backgroundColor="#fbc531" barStyle="dark-content"/>

                <View style={styles.containerText}>
                    <Text style={styles.txtWelcome}>
                        Ao tocar no botão abaixo você poderá ver um exemplo de animação de sucesso.
                    </Text>
                </View>

                <TouchableOpacity style={styles.startAnimation} onPress={()=>navigate('Animation')}>
                    <Text style={styles.textAnimation}>
                        Start Animation
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.floatButtonLeft} onPress={()=>navigate('Principal')}>
                    <Icon name="arrow-left" size={30} color={'#fff'}/>
                </TouchableOpacity>

    
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ddd',
    },
    floatButtonLeft:{
        backgroundColor:'#fbc531',
        width:80, 
        height:80,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:40, 
        left:40,
        borderWidth:2,
        borderColor:'#e1b12c'
    },
    
    startAnimation:{
       
        height:50,
        backgroundColor:'#fbc531',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#e1b12c'
    },
    textAnimation:{
        color:'#fff',
        fontSize:25,
        fontFamily:'GothamBold',
        padding:20
    },
    containerText:{
        backgroundColor:'#fff',
        width:400,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#e1b12c',
        marginBottom:30
    },
    txtWelcome:{
        padding:20,
        fontSize:19,
        alignSelf:'center',
        fontFamily:'GothamBold'
    }
    

});


