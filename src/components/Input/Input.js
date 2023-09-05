import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import styles from "./Input.style"
import colors from "../../styles/colors";

const Input = ({placeholder, value, onType, isSecure}) => {
    return(
        <SafeAreaView style={styles.container}>
            <TextInput 
                autoCapitalize="none"
                placeholder={placeholder} 
                value={value}
                style={styles.input}
                onChangeText={onType}
                secureTextEntry={isSecure}
                placeholderTextColor={colors.darkblue}
                />
        </SafeAreaView>
    )
}

export default Input