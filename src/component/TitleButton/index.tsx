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
  fontSize?: number;
} & TouchableOpacityProps;

export const TitleButton = ({ name, buttonColor,  ...rest }: TitleButtonProps) => {
    return (
        <View>
        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
            <Text style={[styles.buttonText, {color: rest.textColor}, {fontSize: rest.fontSize} ]}>
            {name}</Text>
      </TouchableOpacity>
        </View>
    );
};

