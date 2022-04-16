import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({
  label,
  field,
  iconname,
  secureTextEntry,
  autoCapitalize,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  showMessage,
  hideMessage,
  isValid
  
}) => {
    const [focus, setFocus] = useState(false)
    const [showError, setShowError] = useState(false)
    const blur = () =>{
      setFocus(false);
      handleBlur(field)
    }
  const customStyle = focus ? [styles.inputForcus,styles.input] : styles.input
  
  return (

    <View style={styles.content}>
    <TextInput   
        value={values[field]}
        onChangeText={handleChange(field)}
        onBlur={blur}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || "none"} 
        placeholder={label} style={touched[field] && errors[field] ? styles.inputError : customStyle} onFocus = {()=>setFocus(true)} 
        />
    <Icon name={iconname} size={30} color="#304D95" style={styles.icon} />
    {touched[field] && errors[field] ? <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        * {errors[field]}
      </Text>
    </View>
: null}
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
      inputError:{
        backgroundColor: '#FFD1D1',
        marginBottom: 20,
        marginHorizontal: 30,
        borderRadius: 50,
        borderColor: '#FD5A65',
        borderWidth: 1,
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
      },
      errorContainer:{
      marginBottom: 10,
      marginTop: -10,
      marginHorizontal: 50
      },
      errorText:{
        color: 'red',
        fontSize: 15
      },
      errorIcon:{
        position: 'absolute',
        right: 5
      }
})