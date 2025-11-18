import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function fichaCriar(){

  type IngredienteProps ={
    id: string;
    name: string;
  };

  const gruposMock  = [
    { id: "cereal", name: "Vegetarianos" },
    { id: "frango", name: "Aves" },
    { id: "bovino", name: "Carnes" },
    { id: "legumes", name: "Sobremesas" }
  ];

  const ingredienteMock: IngredienteProps[] =[
    {id: "i1", name: "Sal"},
    {id: "i2", name: "Açúcar"},
    {id: "i3", name: "Farinha"},
    {id: "i4", name: "Ovo"},
    {id: "i5", name: "Leite"},
    {id: "i6", name: "Manteiga"},
    {id: "i7", name: "Fermento"},
    {id: "i8", name: "Baunilha"},
  ]

  // Hooks
  const [ nomeFicha, setNomeFicha ] = useState("");
  const [ descricaoFicha, setDescricaoFicha ] = useState("");
  const [ grupoFicha, setGrupoFicha ] = useState("")
  const [ listaIngredientes, setListaIngredientes ] = useState([""]);
  const [ ingredienteSelecionado, setIngredienteSelecionado ] = useState([""]);

  // Métodos
  // const adicionarIngrediente = (ingredienteId: string) => {
   
  // }

    return(
        <View>
        <View style={styles.field}>
          <Text style={styles.label}>Nome da Ficha Tecnica:</Text>
          <TextInput
            value={nomeFicha}
            onChangeText={setNomeFicha}
            placeholder="Digite o nome da Ficha Tecnica"
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Descrição da Ficha Tecnica:</Text>
          <TextInput
            value={descricaoFicha}
            onChangeText={setDescricaoFicha}
            placeholder="Digite a descrição da Ficha Tecnica"
            style={[styles.input, styles.multiline]}
            multiline
            numberOfLines={3}
          />

                  <View style={styles.field}>
          <Text style={styles.label}>Selecione um grupo:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={grupoFicha}
              onValueChange={(value) => setGrupoFicha(value)}
              style={styles.picker}
            >
              <Picker.Item label="Escolha um grupo" value="" />
              {gruposMock.map((g) => (
                <Picker.Item key={g.id} label={g.name} value={g.id} />
              ))}
            </Picker>
          </View>
            <View style={styles.box}>
              <FlatList
                data={ingredienteMock}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  
                  
                    <Text>{}</Text>
                  
                )}
              />
            </View>

        </View>

        </View>
        </View>
)

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
  box: {
    width: '60%',
    height: '40%',
  }
});