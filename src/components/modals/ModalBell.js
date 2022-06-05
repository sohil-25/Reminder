import React from 'react';
import {Modal, StyleSheet, View, TextInput, Text} from 'react-native';
import TouchBtn from '../TouchBtn';

const ModalBell = props => {
  return (
    <Modal
      visible={props.visible}
      transparent
      onRequestClose={props.onClosePress}
      animationType="slide"
      hardwareAccelerated>
      <View style={styles.centered_view}>
        <View style={styles.bell_modal}>
          <View style={styles.body}>
            <Text style={styles.text}>Remind me After</Text>
            <TextInput
              style={styles.bell_input}
              keyboardType="numeric"
              value={props.txtval}
              onChangeText={props.onChangeText}
              maxLength={4}
            />
            <Text style={styles.text}>minute(s)</Text>
          </View>
          <View style={styles.bell_buttons}>
            <TouchBtn style={styles.bell_cancel_button}
            onPress={props.onCancelPress}
            >
              <Text style={styles.text}>Cancel</Text>
            </TouchBtn>
            <TouchBtn style={styles.bell_ok_button}
            onPress={props.onOkPress}
            >
              <Text style={styles.text}>OK</Text>
            </TouchBtn>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalBell;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
    // width:300,
    height: 200,
  },
  bell_modal: {
    width: 300,
    // height:200,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell_body: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell_buttons: {
    flexDirection: 'row',
    height: 50,
  },
  bell_cancel_button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell_ok_button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell_input: {
    width: 50,
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
});
