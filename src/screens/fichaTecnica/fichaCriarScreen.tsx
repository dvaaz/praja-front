import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
    FlatList,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
// self-made
import { Plus } from "@/component/PlusIcon";
import { PrimaryButton } from "@/component/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/utils/constants";
import { Tooltip } from 'react-native-paper';

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
        { id: "2", name: "laticinios" },
        { id: "3", name: "ovos" },
        { id: "4", name: "temperos" },
        { id: "5", name: "outros" },
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
    const [nomeFicha, setNomeFicha] = React.useState("");               // Nome da Ficha
    const [descricaoFicha, setDescricaoFicha] = React.useState(" ");     // Descricao da Ficha(não obrigatorio)
    const [grupoFicha, setGrupoFicha] = React.useState("");             // Grupo de Ficha
    // lista de ingredientes disponíveis (inicialmente todos)
    const [listaIngredientes, setListaIngredientes] = React.useState<IngredienteProps[]>(ingredienteMock);
    // ingredientes selecionados para a ficha
    const [ingredienteSelecionado, setIngredienteSelecionado] = React.useState<IngredienteProps[]>([]);
    // grupo selecionado para filtrar ingredientes
    const [grupoIngredientesSelecionado, setGrupoIngredientesSelecionado] = React.useState<string>("");

    const [modalVisible, setModalVisible] = React.useState(false); // setup do Modal

    // Métodos
    // 

    // }

    return (
        <ScrollView
            nestedScrollEnabled={true}>
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

                <View style={styles.addDescriptionField}>
                    <Tooltip title={"Você também pode adicionar uma descrição após ficha estar pronta"}>
                        <Text style={styles.label}> Adicionar descrição à Ficha Tecnica </Text>
                    </Tooltip>

                    <Pressable style={styles.label}
                        onPress={() => setModalVisible(true)}
                        onPressOut={() => setModalVisible(false)}
                    >
                        <Plus size={FONT_SIZE.md} color={COLOR.branco} bgColor={COLOR.blue} />

                        <Modal
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                            animationType="fade"
                            transparent={true}
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
                    </Pressable>
                </View>
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
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Selecione os ingredientes para a Ficha Técnica:</Text>
                    {/* será necessário calibrar uma caixa de tamanho fixo - done*/}

                    <View style={styles.centeredView}>

                        <Picker
                            selectedValue={grupoIngredientesSelecionado}
                            // alterar para se nenhum grupo selecionado, mostrar todos os ingredientes disponíveis (buscar lógica para isso)
                            onValueChange={(value) => {
                                setGrupoIngredientesSelecionado(value);
                                // Filtra somente os ingredientes deste grupo
                                // e exclui os já selecionados
                                // como fazer quando entrar o api?
                                const filtered = ingredienteMock.filter(
                                    (i) =>
                                        i.grupo === value &&
                                        !ingredienteSelecionado.some(sel => sel.id === i.id)
                                );

                                setListaIngredientes(filtered); // :-)
                            }}
                            style={[styles.picker, { width: '95%' }]}
                        >
                            <Picker.Item
                                // ocultar label quando picker estiver aberto

                                label="Grupo de Ingredientes" value="" />
                            {grupoIngredientesMock.map((g) => (
                                <Picker.Item key={g.id} label={g.name} value={g.id} />
                            ))}
                        </Picker>
                        <View style={styles.box}>

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

                        <Text style={styles.info}>Selecionados</Text>
                        <View style={styles.box}>

                            <FlatList
                                data={ingredienteSelecionado}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Text>{item.name}</Text>}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.clearButton}>

                    <PrimaryButton
                        name="Cancelar"
                        onPress={() => setModalVisible(false)}
                        buttonColor={COLOR.danger}
                        textColor={COLOR.branco}

                    />
                    <PrimaryButton
                        name="Confirmar"
                        style={[styles.actionButton, styles.okButton]}
                        onPress={() => {
                            // enviar dados para API. Necessario criar um endpoint para registrar a ficha e seus ingredientes sem medidas e descricoes
                            const payload = {
                                nome: nomeFicha,
                                descricao: descricaoFicha,
                                listaIngredientes: ingredienteSelecionado,
                                grupo: grupoFicha,
                            };
                            console.log("submit", payload);
                        }}
                    >
                    </PrimaryButton>

                </View>
            </View>

        </ScrollView>

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
    addDescriptionField: {
        width: "100%",
        flexDirection: "row",
    },
    label: {
        fontSize: FONT_SIZE.large,
        marginBottom: 8,
        fontWeight: "bold",
    },
    info: {
        fontSize: FONT_SIZE.md,
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
        fontSize: FONT_SIZE.md,

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
        alignContent: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",

        gap: 8,
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
        margin: 2,
        borderWidth: 2,
        borderColor: COLOR.softtGray,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLOR.branco,
        width: '95%',
        height: 120,
    },
    // modal
    modalView: {
        margin: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 8,
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
    },
    cancelButton: {
        backgroundColor: COLOR.branco,
        borderWidth: 1,
        borderColor: COLOR.danger,
    },
    clearButton: {
        flexDirection: "row",
        gap: 12,
        marginTop: 20,
        alignItems: "flex-start",
    },
    okButton: {
        backgroundColor: COLOR.blue,
    },
      actionButton: {
    flex: 1,
    height: 48,
    width: 80,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },


});