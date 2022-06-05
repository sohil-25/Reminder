import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList,Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import FlatListTask from '../components/flatlists/FlatListTask';
import {setTaskId, setTasks} from '../redux/actions';
import GlobalStyle from '../utils/GlobalStyle';

const Done = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();
  
  const onItemClick=(item)=>{
       dispatch(setTaskId(item.ID)),
        navigation.navigate('Task')
    }

    const deleteTask=(id)=>{
        const filterTasks=tasks.filter(task=> task.ID !==id)
        AsyncStorage.setItem('Tasks',JSON.stringify(filterTasks))
        .then(()=>{
            dispatch(setTasks(filterTasks));
            Alert.alert('Success!','Task removed successfully.')
        })
        .catch(err=>console.log(err))
       }

       const checkTask=(id,newvalue)=>{
        const index=tasks.findIndex(task=>task.ID===id)
        if(index > -1){
            let newTasks=[...tasks]
            newTasks[index].Done=newvalue
            AsyncStorage.setItem('Task',JSON.stringify(newTasks))
            .then(()=>{
                dispatch(setTasks(newTasks))
                Alert.alert('Success!','Task status is changed')
            })
            .catch(err=>console.log(err))
        }
       }
   

  return (
    <View style={styles.body}>
      <FlatList
      data={tasks.filter(task=>task.Done===true)}
      renderItem={({item})=>(
          <FlatListTask item={item} onItemClick={onItemClick} deleteTask={deleteTask} checkTask={checkTask} />
      )}
      keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default Done;
