import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Input = (props) => {
    const [focus, setFocus] = useState(false)
  const customStyle = focus ? [styles.inputForcus,styles.input] : styles.input
  return (
    <View style={styles.content}>
    <TextInput secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} style={customStyle} onFocus = {()=>setFocus(true)} onBlur = {()=>setFocus(false)} />
    <Icon name={props.iconname} size={30} color="#304D95" style={styles.icon} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        marginBottom: 20,
        marginHorizontal: 30,
        borderRadius: 50,
        paddingHorizontal: 60,
        paddingVertical: 15,
    
      },
      inputForcus:{
        borderColor: '#304D95',
        borderWidth: 1
      },
      icon:{
        top: 12,
        left: 50,
        position: 'absolute'
      }
})