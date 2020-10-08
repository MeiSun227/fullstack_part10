import React from 'react';
import Text from './Text'
import { TouchableOpacity, StyleSheet, View, Image, Button, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    Cardcontainer: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'stretch',
    },

    container: {
        flexDirection: 'row',
        flexGrow: 0,
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 30 / 2,
        paddingRight: 20
    },
    avatarContainer: {
        flexGrow: 0,
        paddingHorizontal: 10,
        paddingTop: 15
    },
    infoContainer: {
        flexGrow: 0,
        paddingTop: 15,
        padding: 10,
        alignSelf: 'center',
        marginHorizontal: 5,


    },
    footercontainer: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: "center",
    },
    actionTouchable: {
        flexGrow: 0,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: "center",
    },
    tagContainer: {
        backgroundColor: '#0366d6',
        alignSelf: 'center',
        flexGrow: 0,
        display:'flex'

    }

});
const CardHeader = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>
            <View style={styles.infoContainer}>
                <Text fontWeight="bold">{item.fullName}</Text>
                <Text >{item.description}</Text>
            </View>
        </View>
    )
}
const CardBody = ({ item }) => {
    return (
        <View style={styles.Container}>
        <View style={styles.tagContainer}>
         <Text fontWeight="bold" borderWidth="border" color="tag">{item.language}</Text>
        </View>
        </View>
    )
}
const CardFooter = ({ item }) => {

    if (item.forksCount >= 1000 && item.stargazersCount >= 1000) {
        return (
            <View style={styles.footercontainer}>
                <TouchableOpacity style={styles.actionTouchable}>
                    <Text fontWeight="24" fontWeight="bold">{(item.stargazersCount / 1000).toFixed(2)}k</Text>
                    <Text> stars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionTouchable}>
                    <Text fontWeight="24" fontWeight="bold"> {(item.forksCount / 1000).toFixed(2)}k</Text>
                    <Text>Forks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionTouchable}>
                    <Text fontWeight="24" fontWeight="bold">{item.ratingAverage}</Text>
                    <Text>Rate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionTouchable}>
                    <Text fontWeight="24" fontWeight="bold">{item.reviewCount}</Text>
                    <Text>Count</Text>
                </TouchableOpacity>
            </View>

        )
    } else {
        return (
            <View style={styles.actionTouchable}>
                <Text> {item.forksCount}k</Text>
                <Text>{item.stargazersCount}k</Text>
                <Text>{item.ratingAverage}</Text>
                <Text>{item.reviewCount}</Text>
            </View>
        )
    }
}
const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.Cardcontainer}>
            <CardHeader item={item} />
            <CardBody item={item} />
            <CardFooter item={item} />

        </View>
    );
}

export default RepositoryItem