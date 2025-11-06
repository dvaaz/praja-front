import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    View
} from "react-native";
import { styles } from "./styles";

type NavigationButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
} & TouchableOpacityProps;

export const NavigationButton = ({ name, buttonColor, textColor, ...rest }: NavigationButtonProps) => {
    return (
        <View>
        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
      </TouchableOpacity>
                   <Text style={[styles.buttonText, {color: textColor}]}>
                {name}</Text>
        </View>
    );
};

