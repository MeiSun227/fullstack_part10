import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const RepositoryItem = ({item}) => {
    return (
        <TouchableOpacity >
            <Text >{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.language}</Text>
            <Text>{item.forksCount}</Text>
            <Text>{item.stargazersCount}</Text>
            <Text>{item.ratingAveraget}</Text>
            <Text>{item.reviewCount}</Text>
            <Text>{item.ownerAvatarUrl}</Text>
        </TouchableOpacity>
    );
}

export default RepositoryItem;