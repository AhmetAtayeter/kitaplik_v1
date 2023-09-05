import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Sign.style"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: ''
}

const Sign = ({ navigation }) => {

    const [loading, setLoading] = useState(false)

    function handleLogin() {
        navigation.goBack()
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
            if (formValues.password !== formValues.repassword) {
                showMessage({
                    message: "Şifreler uyuşmuyor",
                    type: "danger"
                })
                return;
            }
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )
            showMessage({
                message: "Kullanıcı oluşturuldu",
                type: 'success'
            })
            navigation.navigate("LoginPage")
            setLoading(false)
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger'
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
                            placeholder={"e-postanızı giriniz..."}
                            value={values.usermail}
                            onType={handleChange('usermail')}
                        />
                        <Input
                            placeholder={"şifrenizi giriniz..."}
                            value={values.password}
                            onType={handleChange('password')}
                            isSecure
                        />
                        <Input
                            placeholder={"şifrenizi tekrar giriniz..."}
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            isSecure
                        />
                        <Button text="Kayıt Ol" loading={loading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
            <FlashMessage position="top"/>
        </SafeAreaView>
    )
}

export default Sign