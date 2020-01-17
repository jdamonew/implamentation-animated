import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class ThirdPage extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    state = {
        label1: '',
        label2: '',
        label3: '',
        label4: '',
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#c0392b' />




                <TextInput
                    mode='outlined'
                    label='Telefone'
                    maxLength={15}
                    style={styles.label1}
                    value={this.state.label1}
                    onChangeText={text => this.setState({ label1: text })}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'cel-phone'}
                        />
                    }
                    theme={{
                        colors: {
                            primary: '#e74c3c'
                        }
                    }}
                />

                <TextInput
                    mode='outlined'
                    label="CPF"
                    style={styles.label1}
                    maxLength={14}
                    value={this.state.label2}
                    onChangeText={text => {
                        this.setState({ label2: text })
                    }}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'cpf'}

                        />
                    }
                    theme={{
                        colors: {
                            primary: '#e74c3c'
                        }
                    }}
                />

                <TextInput
                    mode='outlined'
                    label="CEP"
                    style={styles.label1}
                    value={this.state.label3}
                    onChangeText={text => {
                        this.setState({ label3: text })
                    }}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'zip-code'}

                        />
                    }
                    theme={{
                        colors: {
                            primary: '#e74c3c'
                        }
                    }}
                />

                <TextInput
                    mode='outlined'
                    label="Valor Litro"
                    placeholder="R$"
                    style={styles.label1}
                    value={this.state.label4}
                    onChangeText={text => {
                        this.setState({ label4: text })
                    }}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'money'}

                        />
                    }
                    theme={{
                        colors: {
                            primary: '#e74c3c'
                        }
                    }}
                />

                <Text> Dados </Text>

                <Text> Telefone: {this.state.label1} </Text>
                <Text> CPF: {this.state.label2} </Text>
                <Text> CEP: {this.state.label3} </Text>
                <Text> Valor: {this.state.label4} </Text>

                <TouchableOpacity style={styles.floatButtonLeft} onPress={() => navigate('Principal')}>
                    <Icon name="arrow-left" size={30} color={'#fff'} />
                </TouchableOpacity>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20


    },
    label1: {
        width: '90%',
        marginBottom: 10
    },
    floatButtonLeft: {
        backgroundColor: '#e74c3c',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        left: 40,
        borderWidth: 2,
        borderColor: '#c0392b'
    },
    floatButtonRight: {
        backgroundColor: '#e74c3c',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderWidth: 2,
        borderColor: '#c0392b'
    },
});

export default ThirdPage;