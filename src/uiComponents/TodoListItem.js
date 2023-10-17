import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Label} from './Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {completeTodoAction, todoRemoveAction} from '../store/reducers';
function TodoListItem(props) {
  const dispatch = useDispatch();
  const {label, isCompleted = false, index} = props;
  const onPress = () => {};
  const onRemove = index => {
    dispatch(todoRemoveAction({index: index}));
  };
  const onComplete=index => {
    dispatch(completeTodoAction({index: index,update:{isCompleted:!isCompleted,label:label}}));
  };
  return (
    <View style={styles.wrapperStyle}>
      <Label>{label}</Label>
      <View style={styles.rightIconsStyles}>
        <TouchableOpacity
          onPress={onPress}
          style={
            isCompleted
              ? [
                  styles.circlestyle,
                  {backgroundColor: 'green', borderColor: 'green'},
                ]
              : styles.circlestyle
          }>
          <AntDesign size={26} name={'check'} color={'#ffffff'}  onPress={() => {
            onComplete(index);
          }}/>
        </TouchableOpacity>
        <AntDesign
          size={30}
          name={'closecircle'}
          color={'#808080'}
          style={styles.iconMargin}
          onPress={() => {
            onRemove(index);
          }}
        />
        <AntDesign
          size={30}
          name={'edit'}
          color={'#808080'}
          style={styles.iconMargin}
        />
      </View>
    </View>
  );
}

export default TodoListItem;

const styles = StyleSheet.create({
  wrapperStyle: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circlestyle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconsStyles: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 5,
  },
});
