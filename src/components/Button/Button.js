import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import styles from  "./Button.style"

const Button = ({text, onPress, loading}) => {
    return(
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
                disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <View style={styles.button_container}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                )}
                
            </TouchableOpacity>
    )
}

export default Button