import { PrimaryButton } from "@/component/PrimaryButton";
import { ToolTip } from "@/component/ToolTip";
import { COLOR, FONT_SIZE } from "@/utils/constants";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function fichaCriar() {
    type IngredienteProps = {
        id: string;
        name: string;
        grupo: string;
    };

    const gruposMock = [
        { id: "cereal", name: "Vegetarianos" },
        { id: "frango", name: "Aves" },
        { id: "bovino", name: "Carnes" },
        { id: "legumes", name: "Sobremesas" }
    ];

    const grupoIngredientesMock = [
        { id: "1", name: "farinaceos" },
        {id: "2", name: "laticinios" },
        {id: "3", name: "ovos" },
        {id: "4", name: "temperos" },
        {id: "5", name: "outros" },
    ];
    const ingredienteMock: IngredienteProps[] = [
        { id: "1", name: "Sal", grupo: "5" },
        { id: "2", name: "Açúcar", grupo: "5" },
        { id: "3", name: "Farinha", grupo: "1" },
        { id: "4", name: "Ovo", grupo: "3" },
        { id: "5", name: "Leite", grupo: "2" },
        { id: "6", name: "Manteiga", grupo: "2" },
        { id: "7", name: "Fermento", grupo: "5" },
        { id: "8", name: "Baunilha", grupo: "4" },
        { id: "9", name: "Oregano", grupo: "4" },
        { id: "10", name: "Gemas", grupo: "3" },
        { id: "11", name: "Claras", grupo: "3" },
        { id: "12", name: "Canela", grupo: "4" },
    ]

    // Hooks
    const [nomeFicha, setNomeFicha] = React.useState("");
    const [descricaoFicha, setDescricaoFicha] = React.useState("");
    const [grupoFicha, setGrupoFicha] = React.useState("");
    // lista de ingredientes disponível (inicialmente todos)
    const [listaIngredientes, setListaIngredientes] = React.useState<IngredienteProps[]>(ingredienteMock);
    // ingredientes selecionados para a ficha
    const [ingredienteSelecionado, setIngredienteSelecionado] = React.useState<IngredienteProps[]>([]);
    // grupo selecionado para filtrar ingredientes
    const [grupoIngredientesSelecionado, setGrupoIngredientesSelecionado] = React.useState<string>("");
    // Modal
    const [modalVisible, setModalVisible] = React.useState(false);

    // Métodos
    // const adicionarIngrediente = (ingredienteId: string) => {

    // }

    return (
        <View style={styles.container}>
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

                <Pressable style={styles.label}
                    onPress={() => setModalVisible(true)} >
                    Clique
                </Pressable>
                <Text style={styles.label}> para adicionar uma descrição à Ficha Tecnica                <ToolTip
                    message="Clique para adicionar uma descrição detalhada da ficha técnica, Essa ação pode ser realizada a qualquer momento após o cadastro da Ficha."
                    img="information"
                /></Text>
                <Modal
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Descrição da Ficha Tecnica:</Text>
                            <TextInput
                                value={descricaoFicha}
                                onChangeText={setDescricaoFicha}
                                placeholder="Digite a descrição da Ficha Tecnica"
                                style={[styles.input, styles.multiline]}
                                multiline
                                numberOfLines={3}
                            />
                            <View style={styles.footerPressables}>
                                <PrimaryButton
                                    name="Cancelar"
                                    onPress={() => setModalVisible(false)}
                                    buttonColor={COLOR.danger}
                                    textColor={COLOR.branco}

                                />
                                <PrimaryButton
                                    name="Confirmar"
                                    onPress={() => setModalVisible(false)}
                                    buttonColor={COLOR.info}
                                    height={40}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* Seleção de Grupo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Selecione o grupo para a Ficha Tecnica:</Text>
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
                        
                  <View style={styles.field}>
  <Text style={styles.label}>Selecione os ingredientes para a Ficha Técnica:</Text>
{/* será necessário calibrar uma caixa de tamanho fixo */}
 

      <View style={styles.box}>
        <Text style={styles.info}>Disponíveis</Text>
         <View style={styles.centeredView}>
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={grupoIngredientesSelecionado}
        onValueChange={(value) => {
          setGrupoIngredientesSelecionado(value);

          // Filtra somente os ingredientes deste grupo
          // e exclui os já selecionados
          const filtered = ingredienteMock.filter(
            (i) =>
              i.grupo === value &&
              !ingredienteSelecionado.some(sel => sel.id === i.id)
          );

          setListaIngredientes(filtered);
        }}
        style={styles.picker}
      >
        <Picker.Item 
         label="Grupo de Ingredientes" value="" />
        {grupoIngredientesMock.map((g) => (
          <Picker.Item key={g.id} label={g.name} value={g.id} />
        ))}
      </Picker>

        <FlatList
          data={listaIngredientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                // remove da lista de disponíveis
                setListaIngredientes(prev =>
                  prev.filter(i => i.id !== item.id)
                );

                // adiciona na lista de selecionados
                setIngredienteSelecionado(prev => [...prev, item]);
              }}
            >
              <Text>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.info}>Selecionados</Text>

        <FlatList
          data={ingredienteSelecionado}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  </View>
</View>
                        </View>
                    </View>
                </View>
    
    )

}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLOR.branco,
    },
    backPressable: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.branco,
        alignItems: "center",
        gap: 40,
        paddingHorizontal: 20,
    },
    field: {
        width: "100%",

    },
    label: {
        fontSize: FONT_SIZE.md,
        marginBottom: 8,
        fontWeight: "bold",
    },
    info:{
        fontSize: FONT_SIZE.sm,
        color: COLOR.info,
        fontWeight: "600",
    },
    input: {
        borderWidth: 1,
        borderColor: COLOR.softtGray,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLOR.softtGray,
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
        backgroundColor: COLOR.softtGray,
    },

    unitsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        margin: 10,
    },
    unitPressable: {
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
    unitPressableSelected: {
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
    footerPressables: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
    },
    actionPressable: {
        flex: 1,
        height: 48,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelPressable: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#E53935",
    },
    okPressable: {
        backgroundColor: "#1976D2",
    },
    cancelText: {
        color: COLOR.danger,
        fontWeight: "700",
    },
    okText: {
        color: COLOR.preto,
        fontWeight: "700",
    },
    box: {
        borderWidth: 2,
        borderColor: COLOR.softtGray,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLOR.branco,
        width: '80%',
        height: '40%',
  },
    // modal
    modalView: {
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: COLOR.preto,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }


});