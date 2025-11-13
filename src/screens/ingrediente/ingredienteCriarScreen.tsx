import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { ImagemFundo } from "../../../component/ImagemFundo";



export default function IngredienteCriar() {
  const router = useRouter();

  const unMedida = [
    { id: "g", nome: "Gramas" },
    { id: "ml", nome: "Mililitros" },
    { id: "UN", nome: "Unidade" }
  ];
  // mock
  const gruposMock = [
    { id: "cereal", nome: "Cereal" },
    { id: "frango", nome: "Frango" },
    { id: "bovino", nome: "Bovino" },
    { id: "legumes", nome: "Legumes" }
  ];

  const [nomeIngrediente, setNomeIngrediente] = useState("");
  const [descricaoIngrediente, setDescricaoIngrediente] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState<string>(unMedida[0].id);
  const [grupoIngrediente, setGrupoIngrediente] = useState("");


  return (

    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
        accessibilityLabel="Voltar"
      >
        <FontAwesome style={styles.backArrow} size={28} name='arrow-left' />
      </TouchableOpacity>
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
        <Text style={styles.label}>UNIDADE DE MEDIDA:</Text>

        <View style={styles.unitsRow}>
          {unMedida.map((u) => {
            const selected = unidadeMedida === u.id;
            return (
              <TouchableOpacity
                key={u.id}
                activeOpacity={0.85}
                onPress={() => setUnidadeMedida(u.id)}
                style={[
                  styles.unitButton,
                  selected && styles.unitButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.unitText,
                    selected && styles.unitTextSelected,
                  ]}
                >
                  {u.id}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* descrição resumida do item selecionado */}
        <Text style={styles.helperText}>
          Unidade selecionada:{" "}
          <Text style={styles.helperBold}>
            {unMedida.find((x) => x.id === unidadeMedida)?.nome ?? ""}
          </Text>
        </Text>
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
      <View style={styles.clearButton}>
        <TouchableOpacity
          style={[styles.actionButton, styles.cancelButton]}
          onPress={() => {
            // limpar formulario ou cancelar
            setNomeIngrediente("");
            setDescricaoIngrediente("");
            setUnidadeMedida("");
            setGrupoIngrediente("");
          }}
        >
          <Text style={styles.cancelText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerButtons}>


        <TouchableOpacity
          style={[styles.actionButton, styles.okButton]}
          onPress={() => {
            // enviar dados para API
            const payload = {
              nome: nomeIngrediente,
              descricao: descricaoIngrediente,
              unidade: unidadeMedida,
              grupo: grupoIngrediente,
            };
            console.log("submit", payload);


          }}
        >
          <Text style={styles.okText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 28,
    color: "#333",
    lineHeight: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
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
  unitsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    margin: 10,
  },
  unitButton: {
    width: 44,
    height: 44,
    borderRadius: 40,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    marginHorizontal: 8,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  unitButtonSelected: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
    elevation: 2,
  },
  unitText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  unitTextSelected: {
    color: "#fff",
  },

  helperText: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  helperBold: {
    fontWeight: "700",
    color: "#333",
  },
  footerButtons: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  actionButton: {
    flex: 1,
    height: 48,
    width: 80,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E53935",
  },
  clearButton: { flexDirection: "row", gap: 12, marginTop: 20, alignItems: "flex-start" },
  okButton: {
    backgroundColor: "#1976D2",
  },
  cancelText: {
    color: "#E53935",
    fontWeight: "700",
  },
  okText: {
    color: "#000000",
    fontWeight: "700",
  },
});
