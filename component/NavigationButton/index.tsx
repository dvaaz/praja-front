import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text
} from "react-native";
import { styles } from "./styles";

type NavigationButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
} & TouchableOpacityProps;

export const NavigationButton = ({ name, buttonColor, textColor, ...rest }: NavigationButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
             <Text style={[styles.buttonText, {color: textColor}]}>
                {name}</Text>
      </TouchableOpacity>
    );
};

