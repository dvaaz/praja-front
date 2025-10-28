import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text
} from "react-native";


const { weight } = Dimensions.get("window");

export const NavigationButton = ({ name, buttonColor, textColor, onPress }) => {
    return (
        <Pressable
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            onPress={onPress}
        >
             <Text style={[styles.buttonText, {color: textColor}]}>
                {name}</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        width: '100%',
        paddingVertical: 15,
        padding: 50,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 1.5
    },
    buttonText: {
        fontSize: 24,
        padding: 5,
        fontWeight: '600',
        textTransform: "uppercase",
        textAlign: "center"
    },
});
