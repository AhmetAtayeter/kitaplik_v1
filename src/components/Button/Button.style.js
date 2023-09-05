import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 16,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        color: colors.darkblue
    }
})