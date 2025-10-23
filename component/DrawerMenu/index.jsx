import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Dados de mock para as opções do Drawer
const DRAWER_ITEMS = [
    { id: 'todayService', name: 'PRATOS DO DIA' },
    { id: 'ingredients', name: 'INGREDIENTES' },
    { id: 'recipes', name: 'FICHAS TECNICAS' },
    { id: 'groups', name: 'GRUPOS' },
];
const { width } = Dimensions.get('window');

export const DrawerMenu = ({ isOpen, onClose }) => {
    
    // Verifica se o menu está aberto
    if (!isOpen) {
        return null;
    }

    return (
        // O Overlay é o container principal, garantindo que o menu flutue
        <View style={styles.overlay}>
            
            {/* O Drawer é o painel branco que contém os itens */}
            <View style={styles.drawer}>

                {/* Botão de Fechar */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeIcon}>x</Text>
                </TouchableOpacity>

                {/* Lista de Itens do Menu - utilizando o mock atual */}
                <View style={styles.itemList}>
                    {DRAWER_ITEMS.map(item => (
                        <TouchableOpacity 
                            key={item.id} 
                            style={styles.drawerItem}
                            onPress={() => {
                                onClose();
                                console.log(`Navegar para: ${item.name}`);
                            }}
                        >
                            <Text style={styles.drawerItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                
            </View>
            
            {/* O Backdrop : área fora do drawner possibilita o fechar do menu > AI generated*/}
            <TouchableOpacity 
                style={styles.backdrop} 
                onPress={onClose} 
                activeOpacity={1} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        // Cobre toda a tela
        ...StyleSheet.absoluteFillObject,
        zIndex: 100, 
        flexDirection: 'row', 
    },
    backdrop: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.0)', // Fundo totalmente transparente para simular o design
    },
    drawer: {
        width: width * 0.9, // Torna o menu mais largo para se adequar ao design
        backgroundColor: '#FFF',
        height: '100%',
        paddingTop: 50,
        paddingHorizontal: 20,
        borderRightWidth: 1, // Borda que separa o menu do resto (sutil)
        borderColor: '#EEE',
    },
    closeButton: {
        position: 'absolute',
        top: 25,
        right: 25,
        padding: 10,
        zIndex: 101, // Garante que o 'x' esteja acima de tudo
    },
    closeIcon: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
    },
    itemList: {
        marginTop: 50, // Espaçamento para o topo
    },
    drawerItem: {
        paddingVertical: 30, // Espaçamento maior entre os itens para imitar o design
        // Não há fundo nos botões
    },
    drawerItemText: {
        fontSize: 20,
        fontWeight: 'bold', // Texto em negrito (como no design)
        color: '#333',
        // Estilo de fonte (assumindo uma fonte padrão com serifas leves ou customizada)
        fontFamily: 'serif', // Use o nome real da fonte se você estiver usando uma customizada
        letterSpacing: 1.5,
    },
});