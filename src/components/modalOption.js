import React from 'react';
import {
  Modal,
  View,
  Button
} from 'react-native';
import styles from "./Styles/modalOption";

const ModalOption = ({visible, handleOption, closeModal, ...props}) => (
  <Modal
    visible={visible}
    transparent={true}
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}>
    <View style={styles.container}>
      <View style={styles.main}>
        <Button
          title="draw?"
          onPress={() => handleOption('sketch')}
        />
        <Button
          style={styles.option}
          title="text?"
          onPress={() => handleOption('text')}
        />
      </View>
      <Button
        style={styles.option}
        color="red"
        title="close"
        onPress={closeModal}
      />
    </View>
  </Modal>
);

export default ModalOption
