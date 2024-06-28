// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList, View, TouchableOpacity } from 'react-native';

const ShoppingListItem = ({ item, onDelete }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function App() {
    const [itemName, setItemName] = useState('');
    const [list, setList] = useState([]);

    const addItem = () => {
        if (itemName.trim()) {
            setList([...list, { id: Math.random().toString(), name: itemName }]);
            setItemName('');
        }
    };

    const deleteItem = (itemId) => {
        setList(currentList => currentList.filter(item => item.id !== itemId));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Shopping List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Item name"
                    style={styles.input}
                    value={itemName}
                    onChangeText={setItemName}
                />
                <Button title="Add" onPress={addItem} />
            </View>
            <FlatList
                data={list}
                renderItem={({ item }) => <ShoppingListItem item={item} onDelete={deleteItem} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
    },
    list: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: '#ff5555',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});