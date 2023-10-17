import React from 'react';
import {Modal, Pressable, StyleSheet} from 'react-native';

function ModalWrapper(props) {
  const {onClose, isVisible, children} = props;
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    } else {
      return null;
    }
  };
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onRequestClose={handleClose}>
      <Pressable style={styles.modalContainer} onPress={handleClose}>
        {children}
      </Pressable>
    </Modal>
  );
}

export default ModalWrapper;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff80',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
