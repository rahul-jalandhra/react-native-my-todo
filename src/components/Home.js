import React from 'react';
import Container from '../uiComponents/Container';
import {Heading, Label, SubHeading} from '../uiComponents/Text';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TodoListItem from '../uiComponents/TodoListItem';
import AddTodoModal from '../uiComponents/AddTodoModal';
function Home(props) {
  const {todoList, addNewTodo, isVisible, onClose} = props;
  return (
    <Container>
      <View style={styles.headerWrapperStyle}>
        <SubHeading>My TODO</SubHeading>
        <View>
          <AntDesign name={'pluscircle'} size={30} onPress={addNewTodo} />
        </View>
      </View>
      <FlatList
        data={todoList || []}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          return (
            <TodoListItem
              key={index}
              label={item?.label}
              isCompleted={item?.isCompleted}
              index={index}
            />
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyListStyle}>
            <Label>Add new TODO item in list from plus icon.</Label>
          </View>
        }
      />
      <AddTodoModal isVisible={isVisible} onClose={onClose} />
    </Container>
  );
}

export default Home;

const styles = StyleSheet.create({
  headerWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
  emptyListStyle: {
    height: Dimensions.get('screen').height - 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
