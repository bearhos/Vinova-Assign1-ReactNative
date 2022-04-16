import * as Yup from 'yup';
 
 export const LoginSchema = Yup.object().shape({
  email: Yup.string()
     .min(8, 'Email must be 8-30 Character')
     .max(30, 'Too Long!')
     .email("Enter a valid email")
     .required("Email is Required'"),
  password: Yup.string()
     .min(5, 'Password must be 5-10 Character')
     .max(10, 'Password must be 5-10 Character')
     .required('Password is Required'),
     
 });