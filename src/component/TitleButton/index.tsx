import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";
import { styles } from "./styles";

type TitleButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
} & TouchableOpacityProps;

export const TitleButton = ({ name, buttonColor, textColor, ...rest }: TitleButtonProps) => {
    return (
        <View>
        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
            <Text style={[styles.buttonText, {color: textColor}]}>
            {name}</Text>
      </TouchableOpacity>
        </View>
    );
};

