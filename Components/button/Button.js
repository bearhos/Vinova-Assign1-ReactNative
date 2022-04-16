import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({handleSubmit}) => {
  return (
    <TouchableOpacity onPress={handleSubmit}>
        <View style={[styles.input,styles.button]}>
          <Text style={styles.buttonText} >Login</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        marginBottom: 20,
        marginHorizontal: 30,
        borderRadius: 50,
        paddingHorizontal: 60,
        paddingVertical: 15,
    
      },
      button:{
        backgroundColor: '#FF6D03',
        height: 54,
        marginTop: 20
      },
      buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
      },
})