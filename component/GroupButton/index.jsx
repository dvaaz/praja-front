import { Pressable, StyleSheet, Text } from "react-native";

export const GroupButton = ({ name, buttonColor, onPress }) => {
    return (
        <Pressable
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            onPress={onPress}
        >
             <Text style={styles.buttonText}>{name}</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        width: '120%',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",

    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        padding: 5,
        fontWeight: '600',
    },
});
