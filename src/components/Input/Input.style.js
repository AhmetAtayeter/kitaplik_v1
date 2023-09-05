import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 16,
    },
    input: {
        padding: 0,
        marginLeft: Platform.OS === 'ios' ? 10 : 0
    }
})