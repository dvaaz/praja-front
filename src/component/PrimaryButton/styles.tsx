import { StyleSheet } from "react-native";
import { FONT_SIZE } from "../../utils/constants";
export const styles = StyleSheet.create({
    categoryButton: {
        width: 120,
        alignSelf: "center",
        paddingVertical: 10,
        padding: 50,
        alignItems: "center",
        borderRadius: 40,
        marginTop: 40,
        borderWidth: 1.5
    },
    buttonText: {
        fontSize: FONT_SIZE.md,
        padding: 5,
        fontWeight: '600',
        textTransform: "uppercase",
        textAlign: "center"
    },
});
