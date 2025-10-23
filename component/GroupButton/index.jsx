import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ name, buttonColor, onPress }) => {
    return (
        <Pressable
            style={[styles.categoryButton, { buttonColor: buttonColor }]}
            onPress={onPress}
        >
             <Text style={styles.buttonText}>{name}</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        width: '70%',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: "center",

    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
    },
});
