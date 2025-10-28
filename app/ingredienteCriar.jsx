import { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from "react-native";

import { TextInput } from "react-native-web";
import { ImagemFundo } from "../component/ImagemFundo";

const { weight, height, width } = Dimensions.get("window");

export default function IngredienteCriar() {
      const unMedida = ["g", "ml", "unidade"];
      // Os grupos serão obtidos pela API
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
            {/* Codigo para quando for pegar o grupo pela api
                   {loading ? (
        <ActivityIndicator size="large" color="#7b7bd3ff" />
      ) : (
        <Picker
          selectedValue={grupoIngrediente}
          onValueChange={(itemValue) => setGrupo(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Escolha um grupo" value="" />
          {grupos.map((grupo) => (
            <Picker.Item
              key={grupo.id}
              label={grupo.nome}
              value={grupo.id}
            />
          ))}
        </Picker> */}
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF5F5',
    gap: 40
  },
  listContainer: {
    width: width * 0.75, // Garante que o FlatList ocupe toda a largura
  },

})