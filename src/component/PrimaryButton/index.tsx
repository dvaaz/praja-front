import { FONT_SIZE } from "@/utils/constants";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

type PrimaryButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  height?: number;
  width?: number;
  

} & TouchableOpacityProps;

export const PrimaryButton = ({ name, buttonColor, ...rest }: PrimaryButtonProps) => {
    return (

        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
            <Text style={[styles.buttonText, {color: rest.textColor}, {fontSize: rest.fontSize} ]}>
            {name}</Text>
      </TouchableOpacity>

    );
};

export const styles = StyleSheet.create({
    categoryButton: {
        width: "auto",
        height:"auto",
        alignSelf: "center",
        paddingVertical: 2,
        padding: 4,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 8,
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: FONT_SIZE.sml,
        padding: 5,
        fontWeight: '600',
        textAlign: "center"
    },
});
