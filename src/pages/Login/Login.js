import React, { useRef, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./Login.style"
import Input from "../../components/Input/Input";
import { Formik } from "formik";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"
import authErrorMessageParser from "../../utils/authErrorMessageParser";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

const initialFormValues = {
    usermail: '',
    password: ''
}

const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false)

    function handleSignUp() {
        hideMessage()
        navigation.navigate("SignPage")
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            if (formValues.usermail === '') {
                showMessage({
                    message: "Mail boş girilemez",
                    type: "danger"
                })
                setLoading(false)
                return
            }
            if (formValues.password === '') {
                showMessage({
                    message: "Şifre boş girilemez",
                    type: "danger"
                })
                setLoading(false)
                return
            }
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
            hideMessage()
            navigation.navigate("MainPage")
            setLoading(false)
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger"
            })
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FontAwesomeIcon icon={faBookOpen} size={90} color="white" />
            <Text style={styles.title}>Kitaplık</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            onType={handleChange('usermail')}
                            placeholder="Mailinizi giriniz"
                            value={values.usermail}
                        />
                        <Input
                            onType={handleChange('password')}
                            value={values.password}
                            placeholder="Şifrenizi giriniz"
                            isSecure={true}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Kayıt Ol" onPress={handleSignUp} loading={loading} />
            <FlashMessage position="top" />
        </SafeAreaView>
    )

}

export default Login