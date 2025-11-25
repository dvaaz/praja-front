import { useRouter } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { COLOR, FONT_SIZE } from "../../../utils/constants";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export default function Login() {
    const router = useRouter();
    // estados do componente
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


        return (
            <View>
                <Text>
                    Digite seu telefone
                </Text>
                <TextInput   style={styles.input} 
                placeholder=""
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="phone-pad" 
                />

                <Text>
                    Digite sua senha
                </Text>
                <TextInput style={styles.input}
                placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry 
                />

                <View>
                    <PrimaryButton
                    text="Entrar"
                    onPress={() => {
                        // verifica se os campos não estão vazios
                        if (email === "" || password === "") {
                            setError("Por favor, preencha todos os campos.");
                            return;
                        }
                        // lógica de autenticação aqui
                        // se falhar, definir mensagem de erro
                        // setError("Credenciais inválidas. Tente novamente.");
                    

                    }}
                    />
                    </View>

                {error !== "" && (
                    <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
                )}

                <Text style={styles.newAccountText}
                onPress={() => {router.navigate("./registration")}}>
                    Caso não possua uma conta,  clique aqui
                </Text>

            </View>
        )
}

const styles = StyleSheet.create({
    input: {
        height:50,
        width: '80%',
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