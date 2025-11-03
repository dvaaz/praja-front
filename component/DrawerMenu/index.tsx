import React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

const DRAWER_ITEMS = [
  { id: 'todayService', name: 'PRATOS DO DIA' },
  { id: 'ingredients', name: 'INGREDIENTES' },
  { id: 'recipes', name: 'FICHAS TECNICAS' },
  { id: 'groups', name: 'GRUPOS' },
];

const { width } = Dimensions.get('window');

type DrawerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <View style={styles.overlay}>
      {/* Backdrop para fechar o menu ao clicar fora */}
      <TouchableOpacity
        style={styles.backdrop}
        onPress={onClose}
        activeOpacity={1}
      />

      {/* Painel do Drawer */}
      <View style={styles.drawer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>

        <View style={styles.itemList}>
          {DRAWER_ITEMS.map((item) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '100%',
    zIndex: 1000,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  drawer: {
    width: width * 0.7,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 0 },
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemList: {
    gap: 15,
  },
  drawerItem: {
    paddingVertical: 10,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
