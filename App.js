import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import cover from './assest/Cover.png'
import logo from './assest/Logo.png'
import imageError from './assest/imageError.png'
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Components/input/Input';
import Button from './Components/button/Button'
import { Formik } from 'formik';
import { LoginSchema } from './Components/Validation';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
 

const App = () => {
  const [showPassword, setShowPassword] = useState(true)
  const navigate = "<"
  const ShowMessage = (message, description, type) =>{
    showMessage({
      message: message,
      description: description,
      type: type,
      onPress: () => {
        hideMessage()
      },
  })
  }
  const login = (values) =>{
 if (values.email ==='admin@gmail.com' && values.password ==='admin'){
    ShowMessage('Sucess','Login Sucess', 'success')
 }
 else{
  ShowMessage('Error','Wrong Password or Email', 'danger')
 }
  }

  return (
    
      <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={values => login(values) }
     validationSchema = {LoginSchema}
    //  validateOnChange={false}
     
   >
     {({handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid, }) => (
<>
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
        
        <Image source={isValid ? logo : imageError } resizeMode="cover" style={[styles.imageRabbit, {marginLeft: !isValid ? 70 : 0},{marginBottom: !isValid ? 20 : 0}]}>
    </Image>
        
        </View>
      </View>
      <View style={styles.bottom}>

      <Input 
      label="Email" 
      iconname={'mail'} 
      field='email'
      autoCapitalize="words"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      showMessage={showMessage}
      hideMessage={hideMessage}
      isValid={isValid}  />
      <View>

      <Input secureTextEntry={showPassword ? true : false} label="Password" iconname={'key'} field='password'  values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur} 
      showMessage={showMessage}
      hideMessage={hideMessage} 
      style={{
        position: 'relative',
      }}  />
      <Icon name='md-eye-outline' size={30} color='#304D95' onPress={()=> setShowPassword(!showPassword)} style={{
        position: 'absolute',
        right: 45,
        top: 13,
        zIndex: 10
        
      }}/>

      </View>
        <Button handleSubmit={handleSubmit}/>

      <Text style={{
        fontSize: 15,
        color: '#333333',
        textAlign:'center',
        marginTop: 20
      }}>Forgot Password ?
        <Text style={{
          fontWeight: '800'
        }}> Click Here  </Text>
        </Text>
      </View>
     
      <FlashMessage position="top" textStyle={{textAlign:'center', fontSize:16}}  titleStyle={{textAlign:'center', fontSize:15}}  />
     </View>
      </>
     )}
     </Formik>
    
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
  },
  
})