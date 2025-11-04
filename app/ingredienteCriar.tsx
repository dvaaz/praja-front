import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImagemFundo } from "../component/ImagemFundo";

const { height, width } = Dimensions.get("window");

export default function IngredienteCriar() {
  const unMedida = ["g", "ml", "unidade"];
  const gruposMock = [
    { id: "cereal", nome: "Cereal" },
    { id: "frango", nome: "Frango" },
    { id: "bovino", nome: "Bovino" },
    { id: "legumes", nome: "Legumes" }
  ];

  const [nomeIngrediente, setNomeIngrediente] = useState("");
  const [descricaoIngrediente, setDescricaoIngrediente] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState(unMedida[0]);
  const [grupoIngrediente, setGrupoIngrediente] = useState(gruposMock[0].id);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.container}>
          <ImagemFundo />

          <View style={styles.field}>
            <Text style={styles.label}>Nome do Ingrediente:</Text>
            <TextInput
              value={nomeIngrediente}
              onChangeText={setNomeIngrediente}
              placeholder="Digite o nome do ingrediente"
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Descrição do Ingrediente:</Text>
            <TextInput
              value={descricaoIngrediente}
              onChangeText={setDescricaoIngrediente}
              placeholder="Digite a descrição do ingrediente"
              style={[styles.input, styles.multiline]}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Unidade de Medida:</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={unidadeMedida}
                onValueChange={(value) => setUnidadeMedida(value)}
                style={styles.picker}
              >
                {unMedida.map((u) => (
                  <Picker.Item key={u} label={u} value={u} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Selecione um grupo:</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={grupoIngrediente}
                onValueChange={(value) => setGrupoIngrediente(value)}
                style={styles.picker}
              >
                <Picker.Item label="Escolha um grupo" value="" />
                {gruposMock.map((g) => (
                  <Picker.Item key={g.id} label={g.nome} value={g.id} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
    gap: 40,
    paddingHorizontal: 20,
  },
  field: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  multiline: {
    height: 80,
    textAlignVertical: "top",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});
