import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const RepositoryItem = ({item}) => {
    return (
        <TouchableOpacity >
            <Text >Fullname:{item.fullName}</Text>
            <Text>Description:{item.description}</Text>
            <Text>Language:{item.language}</Text>
            <Text>{item.forksCount}</Text>
            <Text>{item.stargazersCount}</Text>
            <Text>{item.ratingAveraget}</Text>
            <Text>TeviewCount:{item.reviewCount}</Text>
            <Text>Url:{item.ownerAvatarUrl}</Text>
        </TouchableOpacity>
    );
}

export default RepositoryItem;