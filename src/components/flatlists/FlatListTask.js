import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';
import TouchBtn from '../TouchBtn';

const FlatListTask = ({item, onItemClick, deleteTask,checkTask}) => {

    
  return (
    <TouchableOpacity style={styles.item} onPress={() => onItemClick(item)}>
      <View style={styles.item_row}>
      <View
      style={[
        {
          backgroundColor:
          item.Color==='red'?'#f28b82':
          item.Color==='blue'?'#aecbfa':
          item.Color==='green'?'#ccff90':'#ffffff'
        },
        styles.color]}
      />
      
          <CheckBox
          value={item.Done}
          onValueChange={(newvalue)=>{checkTask(item.ID,newvalue)}}
          />
          <View style={styles.item_body}>
        <Text
          style={[GlobalStyle.CustomFontHW, styles.title]}
          numberOfLines={1}>
          {item.Title}
        </Text>
        <Text
          style={[GlobalStyle.CustomFontHW, styles.subtitle]}
          numberOfLines={1}>
          {item.Desc}
        </Text>
        </View>
        <TouchableOpacity
        style={styles.delete}
        onPress={()=>deleteTask(item.ID)}
        >
            <FontAwesome5
            name={'trash'}
            color={'#ff3636'}
            size={25}
            />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default FlatListTask;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingRight: 10,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  color:{
width:20,
height:100,
borderTopLeftRadius:10,
borderBottomLeftRadius:10,
  },
  title: {
    color: '#999999',
    fontSize: 30,
    margin: 5,
  },
  item_row: {
      flexDirection:'row',
      alignItems:'center'
  },
  item_body:{
flex:1
  },
  delete:{
height:50,
width:50,
justifyContent:'center',
alignItems:'center'
  },
  
});
