import React from "react";
import styles from "./BookCard.style"
import { View, Text } from "react-native";

const BookCard = ({data}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>{data.author}</Text>
            <Text style={styles.text}>{data.type}</Text>
        </View>
    )
}

export default BookCard