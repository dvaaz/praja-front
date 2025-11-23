import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { TitleButton } from "../../../component/TitleButton";

export default function Login() {
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
                <TitleButton
                    name="Criar nova conta" />
            </View>
        )
}

const styles = StyleSheet.create({
    input: {
        height:50,
        borderColor:'#ccc',
        borderWidth: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "#fefe",
        marginBottom:20,
    },
})