import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PrimaryButton } from '../component/PrimaryButton';
import { router } from 'expo-router';
import { COLOR } from '../utils/constants';


export default function Tab() {
    return (
<ScrollView>   
            <View style={styles.container}>
                <Text style={styles.text}>
                    Página principal tem de ser um index!
                </Text>
                <Text style={styles.text}>
                    Com cards referentes a funções diretas, enquanto o tab menu será para a função geral
                    exemplo:
                </Text>
                <Text style={styles.text}>
                tab ingredientes -> buscar ingredientes e criar ingredientes onde buscar ingrediente sera responsavel pelo gerenciamento.
                </Text>
                <Text style={styles.text}>
                    Talvez não seja um tab ou menu de extrema importancia ao longo do uso, mas será importante
                    para os primeiros usos, logo ele pode ser retirado do tab e colocado apenas na main page e nas opções
                </Text>
                <View style={styles.navGrid}>
                    <PrimaryButton
                        name="Ir para ingredientes"
                        buttonColor={COLOR.blue}
                        textColor={COLOR.branco}
                        onPress={() => { router.navigate("/ingredienteScreen") }}
                    />
                    <PrimaryButton
                        name="Ir para Fichas Técnicas"
                        buttonColor={COLOR.softPeach}
                        textColor={COLOR.branco}
                        onPress={() => { router.navigate("/fichaScreen") }}
                    />
                    <PrimaryButton
                        name="Ir para Login"
                        buttonColor={COLOR.blue}
                        textColor={COLOR.branco}
                        onPress={() => { router.navigate("../../screens/auth/login") }}
                    />
                </View>
            </View>
</ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        width: '60%',
        textAlign: "justify",
        wordWrap: "balance",
    },
    navGrid: {
        gridAutoColumns: '1fr',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        marginTop: 20,
    }
});