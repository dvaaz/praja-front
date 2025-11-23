import { useRouter } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { COLOR, FONT_SIZE } from "../../../utils/constants";
export default function Login() {
    const router = useRouter();
    // estados do componente
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


        return (
            <View>
                <Text>
                    Digite seu email
                </Text>
                <TextInput   style={styles.input} 
                placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address" 
                />

                <Text>
                    Digite sua senha
                </Text>
                <TextInput style={styles.input}
                placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry 
                />
                <Text style={styles.newAccountText}
                onPress={() => {router.navigate("/registration")}}>
                    Caso não tenha uma conta,  clique aqui
                </Text>

            </View>
        )
}

const styles = StyleSheet.create({
    input: {
        height:50,
        borderColor: COLOR.gray,
        borderWidth: 1,
        paddingHorizontal: 15,
        fontSize: FONT_SIZE.md,
        backgroundColor: COLOR.branco,
        marginBottom:20,
    },
    newAccountText: {
        fontSize: FONT_SIZE.md,
        color: COLOR.blue,
        textAlign: "center",
        marginTop: 10,
    },
})