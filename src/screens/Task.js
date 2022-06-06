import {StyleSheet, Text, View, TextInput, Alert,Image,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomBtn from '../components/CustomBtn';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import TouchBtn from '../components/TouchBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ModalBell from '../components/modals/ModalBell';
import PushNotification from "react-native-push-notification";
import RNFS from 'react-native-fs';
import { useIsFocused } from '@react-navigation/native';


const Task = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [done, setDone] = useState(false);
  const [color, setColor] = useState('white');
  const [showModal, setShowModal] = useState(false);
  const [bellTime, setBellTime] = useState('1');
  const [image, setImage] = useState('');

  const {tasks, taskId} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();
  const focus=useIsFocused()

  useEffect(() => {
    getTask();
  }, [focus]);

  const getTask = () => {
    const Task = tasks.find(task => task.ID === taskId);
    if (Task) {
      setTitle(Task.Title);
      setDesc(Task.Desc);
      setDone(Task.Done);
      setColor(Task.Color);
      setImage(Task.Image);
    }
  };
  const setTask = () => {
    if (title.length == 0) {
      Alert.alert('Warning', 'Please write your task title');
    } else {
      try {
        var Task = {
          ID: taskId,
          Title: title,
          Desc: desc,
          Done: done,
          Color: color,
          Image:image
        };
        let newTasks = [];
        const index = tasks.findIndex(task => task.ID === taskId);
        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = Task;
        } else {
          newTasks = [...tasks, Task];
        }
        AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            Alert.alert('Succcess!', 'Task saved successfully.');
            navigation.goBack();
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const setTaskAlarm=()=>{
    setShowModal(false)
    PushNotification.localNotificationSchedule({
      channelId:'task-channel',
      title:title,
      message:desc,
      date:new Date(Date.now()+parseInt(bellTime)*60*1000),
      allowWhileIdle:true
    })
  }

  const deleteImage=()=>{
    RNFS.unlink(image)
    .then(() => {
        const index = tasks.findIndex(task => task.ID === taskId);
        if (index > -1) {
            let newTasks = [...tasks];
            newTasks[index].Image = '';
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                    Alert.alert('Success!', 'Task image is removed.');
                    getTask();
                })
                .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <ScrollView>
    <View style={styles.body}>
        <ModalBell 
        visible={showModal}
        onClosePress={()=>setShowModal(false)}
        txtval={bellTime}
        onChangeText={(val)=>setBellTime(val)}
        onCancelPress={()=>setShowModal(false)}
        onOkPress={()=>setTaskAlarm()}
        />
      <TextInput
        value={title}
        style={styles.input}
        placeholder="Title"
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        value={desc}
        style={styles.input}
        placeholder="Descriptions"
        multiline
        onChangeText={value => setDesc(value)}
      />
      <View style={styles.color_bar}>
        <TouchBtn
          style={styles.color_white}
          onPress={() => {
            setColor('white');
          }}>
          {color === 'white' && (
            <FontAwesome5 name={'check'} color={'#000000'} size={25} />
          )}
        </TouchBtn>
        <TouchBtn
          style={styles.color_red}
          onPress={() => {
            setColor('red');
          }}>
          {color === 'red' && (
            <FontAwesome5 name={'check'} color={'#000000'} size={25} />
          )}
        </TouchBtn>
        <TouchBtn
          style={styles.color_blue}
          onPress={() => {
            setColor('blue');
          }}>
          {color === 'blue' && (
            <FontAwesome5 name={'check'} color={'#000000'} size={25} />
          )}
        </TouchBtn>
        <TouchBtn
          style={styles.color_green}
          onPress={() => {
            setColor('green');
          }}>
          {color === 'green' && (
            <FontAwesome5 name={'check'} color={'#000000'} size={25} />
          )}
        </TouchBtn>
      </View>
      <View style={styles.extra_row}>
        <TouchBtn style={styles.extra_button}
        onPress={()=>{setShowModal(true)}}
        >
          <FontAwesome5 name="bell" size={25} color={'#ffffff'} />
        </TouchBtn>
        <TouchBtn style={styles.extra_button}
        onPress={()=>{navigation.navigate('Camera',{id:taskId})}}
        >
          <FontAwesome5 name="camera" size={25} color={'#ffffff'} />
        </TouchBtn>
      </View>
      
        {image?
          <View>
          <Image
          style={styles.image}
          source={{uri:image}}
          />
          <TouchBtn style={styles.delete_btn}
        onPress={()=>{deleteImage()}}
        >
          <FontAwesome5 name="trash" size={25} color={'#ff3636'} />
        </TouchBtn>
          </View>
          :null
        }
      <View style={styles.checkbox}>
        <CheckBox value={done} onValueChange={() => setDone(!done)} />
        <Text style={styles.text}>Is Done</Text>
      </View>
      <CustomBtn
        title="Save Task"
        color="#1ed900"
        style={{width: '100%'}}
        onPressFunction={setTask}
      />
    </View>
    </ScrollView>
  );
};

export default Task;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  checkbox: {
    flexDirection: 'row',
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  color_bar: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#555555',
    marginVertical: 10,
  },
  color_white: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  color_red: {
    flex: 1,
    backgroundColor: '#f28b82',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_blue: {
    flex: 1,
    backgroundColor: '#aecbfa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_green: {
    flex: 1,
    backgroundColor: '#ccff90',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  extra_row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  extra_button: {
    flex: 1,
    height: 50,
    backgroundColor: '#0080ff',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:300,
    height:300,
    margin:20,
  },
  delete_btn:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#ffffff80',
    margin: 10,
    borderRadius: 5,
  }
});
