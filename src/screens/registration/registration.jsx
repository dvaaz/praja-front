import { PrimaryButton } from "@/component/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/utils/constants";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function Registration() {
    // Hooks
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    return (
        <View style={styles.container}>
            <Text style={{alignItems: 'center', justifyContent: 'center', fontSize: 20, marginTop: 20}}>
                Tela de Registro
            </Text>
            <Text>
                Digite seu nome
            </Text>
            <TextInput style={styles.input} 
            value={nome} onChangeText={setNome} keyboardType="phone-pad"/>
            <Text>
                Digite seu telefone, apenas números
            </Text>
            <TextInput style={styles.input} 
            value={email} onChangeText={setEmail} keyboardType="email-address"/>
            <Text>
                Digite sua senha
            </Text>
            <TextInput style={styles.input} 
            value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <Text>
                {error}
            </Text>
            <PrimaryButton name="Registrar"/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',

    },
        input: {
            height:50,
            borderColor: COLOR.gray,
            borderWidth: 1,
            paddingHorizontal: 15,
            fontSize: FONT_SIZE.md,
            backgroundColor: COLOR.branco,
            marginBottom:20,
        },
})