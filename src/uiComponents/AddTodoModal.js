import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Label } from './Text';
import ModalWrapper from './ModalWrapper';
import InputText from './InputText';
import { useDispatch } from 'react-redux';
import { todoAddAction } from '../store/reducers';

function AddTodoModal(props) {
  const {isVisible, onClose} = props;
  const dispatch=useDispatch();

  const [value,setValue]=useState('');
  const onSave=()=>{
    if(value!==''){
        dispatch(todoAddAction({label:value,isCompleted:false}));
        onClose();
        setValue('');
    }
  }

  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
      <Pressable style={styles.mainWrapper} >
        <InputText
        style={{width:'100%',borderColor:"#808080"}}
        placeholder={'Enter your todo'}
        value={value}
        onChangeText={(text)=>{
            setValue(text);
        }}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={onSave}>
          <Label color={'#ffffff'}>Add to Todo</Label>
        </TouchableOpacity>
      </Pressable>
    </ModalWrapper>
  );
}

export default AddTodoModal;

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    width: '90%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemWrapper: {
    width: '100%',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#9E9E9E',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: '#2A74E0',
    borderRadius: 100,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: 30,
  },
});
