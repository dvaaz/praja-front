import { ImagemFundo } from "@/component/ImagemFundo";
import { PrimaryButton } from "@/component/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/utils/constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function Login() {
    const router = useRouter();
    // estados do componente
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


        return (
            <View style={styles.container}>

                <View style={styles.box}>
                    <ImagemFundo />
                    <Text style={styles.boxTitle}>Login</Text>
                <Text
                onChangeText={() => {
                    if(telephone.length < 11 || telephone.length === 0) {
                        setError("Campos inválidos.");
                    }
                }}
                >
                </Text>
                <TextInput   style={styles.input} 
                placeholder="Telefone"
                    value={telephone}
                    onChangeText={setTelephone}
                    keyboardType="phone-pad"
                    maxLength={11}
                />

                <Text
                onChangeText={() => {
                    if(password.length === 0 || password.length < 6) {
                        setError("Campos inválidos.");
                    }
                }}>
                </Text>
                <TextInput style={styles.input}
                placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry 
                />

                <View>
                    <PrimaryButton
                    name="Entrar"
                        style={[styles.actionButton, styles.okButton]}
                    textColor={COLOR.branco}
                    width={"80%"}
                    onPress={() => {
                        // verifica se os campos não estão vazios
                        if (telephone === "" || password === "") {
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

                <Text style={[styles.newAccountText, {color: COLOR.preto}]}>Caso não possua uma conta,
                <Text style={styles.newAccountText}
                onPress={() => {router.navigate("./registration")}}> clique aqui
                </Text>
                </Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: COLOR.background 
    },
    input: {
        height:50,
        width: '60%',
        borderColor: COLOR.gray,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: FONT_SIZE.md,
        backgroundColor: COLOR.softtGray,
        marginBottom:20,
    },

    box: {
        height: "60%",
        width: "60%",
        backgroundColor: COLOR.branco,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxTitle: {
        fontSize: FONT_SIZE.xxlarge,
        fontWeight: "bold",
        marginBottom: 20,
    },
    newAccountText: {
        fontSize: FONT_SIZE.md,
        color: COLOR.blue,
        textAlign: "center",
        marginTop: 10,
    },   
     okButton: {
            backgroundColor: COLOR.blue,
        },
          actionButton: {
        flex: 1,
        height: 48,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      },
})