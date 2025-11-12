import { StyleSheet, Text, View } from 'react-native';

export default function Tab() {
    return (
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
        </View>
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
    }
});