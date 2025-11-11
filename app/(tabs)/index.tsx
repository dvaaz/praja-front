import { StyleSheet, Text, View } from 'react-native';

export default function Tab() {
    return(
        <View style={styles.container}>
            <Text>Página principal tem de ser um index</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});