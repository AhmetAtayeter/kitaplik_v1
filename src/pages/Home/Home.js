import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./Home.style"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import colors from "../../styles/colors";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import database from "@react-native-firebase/database"
import { FlatList } from "react-native-gesture-handler";
import BookCard from "../../components/BookCard/BookCard";

const Home = ({ navigation }) => {

    const [books, setBooks] = useState([])

    function handleLogout() {
        auth()
            .signOut()
            .then(() => showMessage(
                {
                    message: "Çıkış yapıldı",
                    type: "info"
                }))
        navigation.navigate("LoginPage")
    }

    useEffect(() => {
        database()
            .ref('Books/')
            .on('value', snaphot => {
                const contentData = snaphot.val()
                setBooks(contentData)
                console.log(books)
            })
    }, [])

    const renderContent = ({item}) => <BookCard data={item} />

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    size={30}
                    color={colors.darkblue}
                    style={styles.icon} />
            </TouchableOpacity>
            <FlatList
                data={books}
                renderItem={renderContent}
            />
            <FlashMessage position="top" />
        </SafeAreaView>
    )
}

export default Home