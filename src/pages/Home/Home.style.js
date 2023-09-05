import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkblue
    },
    icon: {
        margin: 10,
        alignSelf: "flex-end"
    }
})