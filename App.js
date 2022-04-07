import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import cover from './assest/Cover.png'
import logo from './assest/Logo.png'
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Components/input/Input';

const App = () => {
  const [focus, setFocus] = useState(false)
  const customStyle = focus ? [styles.inputForcus,styles.input] : styles.input
  const navigate = "<"

  return (
    <View style={styles.container}>
      <View style={styles.navigate}>
          <Text style={styles.Iconnavigate} > {navigate} </Text>
      </View>
      <View style={styles.logo}>
        <View style={styles.Textlogo}>
        <Image source={cover} resizeMode="cover" style={styles.image}>
    </Image>
        </View>
        <View style={styles.Imagelogo}>
        <Image source={logo} resizeMode="cover" style={styles.imageRabbit}>
    </Image>
        </View>
      </View>
      <View style={styles.bottom}>

      <Input iconname={'mail'} placeholder="Enter Username" />
      <View>

      <Input iconname={'key'} placeholder="Enter Password" secureTextEntry={true} style={{
        position: 'relative',
      }} />
      
      

      <Icon name='md-eye-outline' size={30} color='#304D95' style={{
        position: 'absolute',
        right: 45,
        top: 13,
        zIndex: 10
        
      }}/>

      </View>
        <TouchableOpacity>
        <View style={[styles.input,styles.button]}>
          <Text style={styles.buttonText} >Login</Text>
        </View>
        </TouchableOpacity>
      <Text style={{
        fontSize: 15,
        color: '#333333',
        textAlign:'center',
        marginTop: 20
      }}>Forgot Password ?
        <Text style={{
          fontWeight: '800'
        }}> Click Here</Text>
        </Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2C816'
  },
  navigate:{
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 10,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  Iconnavigate:{
    fontSize: 20,
    color: '#304D95'
  },
  
  logo:{
    flex: 1,
    
  },
  bottom:{
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    
    

    
  },
  Textlogo:{
    flex: 1,
    alignItems:'center',
  },
  Imagelogo:{
    flex: 1,
    alignItems:'center',
    paddingRight: 40

  },
  imageRabbit:{
    flex: 1,
    resizeMode: "contain",


  },
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
  text:{
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#304D95',
    textAlign: 'center',
    marginBottom: 20
  
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
  icon:{
    top: 12,
    left: 50,
    position: 'absolute'
  }
  
})