import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';


class FourthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pages: 1,
            dados: [
                { id: 1, description: 'Manteiga', vlr: 5.5 },
                { id: 2, description: 'Leite', vlr: 4.3 },
                { id: 3, description: 'Macarrão', vlr: 6.5 },
                { id: 4, description: 'Manteiga', vlr: 5.5 },
                { id: 5, description: 'Manteiga', vlr: 5.5 },
                { id: 6, description: 'Manteiga', vlr: 5.5 },
                { id: 7, description: 'Manteiga', vlr: 5.5 },
                { id: 8, description: 'Manteiga', vlr: 5.5 },
                { id: 9, description: 'Manteiga', vlr: 5.5 },
                { id: 10, description: 'Manteiga', vlr: 5.5 },
                { id: 11, description: 'Manteiga', vlr: 5.5 },
                { id: 12, description: 'Manteiga', vlr: 5.5 },
                { id: 13, description: 'Manteiga', vlr: 5.5 },
                { id: 14, description: 'Manteiga', vlr: 5.5 },
                { id: 15, description: 'Manteiga', vlr: 5.5 },
                { id: 16, description: 'Manteiga', vlr: 5.5 },
                { id: 17, description: 'Manteiga', vlr: 5.5 },
                { id: 18, description: 'Manteiga', vlr: 5.5 },
                { id: 19, description: 'Manteiga', vlr: 5.5 },
                { id: 20, description: 'Arroz', vlr: 2.5 },

            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Cód</DataTable.Title>
                        <DataTable.Title>Descrição</DataTable.Title>
                        <DataTable.Title>Valor</DataTable.Title>
                    </DataTable.Header>

                    <FlatList

                        data={this.state.dados}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.id}</DataTable.Cell>
                                <DataTable.Cell>{item.description}</DataTable.Cell>
                                <DataTable.Cell>{item.vlr}</DataTable.Cell>
                            </DataTable.Row>


                        )}
                        keyExtractor={item => item.id}
                    />

                </DataTable>
            </View>



        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingBottom: 40
    }
});


export default FourthPage;