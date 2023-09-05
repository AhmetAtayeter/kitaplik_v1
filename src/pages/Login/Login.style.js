import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        backgroundColor: colors.darkblue
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    }
})