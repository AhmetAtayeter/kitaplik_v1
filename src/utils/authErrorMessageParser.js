export default function(errorCode){
    console.log(errorCode)
    switch(errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi";
        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı";
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı";
        case "auth/weak-password":
            return "Parola zayıf";
        case "auth/wrong-password":
            return "Yanlış şifre girdiniz";
        default:
            return errorCode;
    }
}