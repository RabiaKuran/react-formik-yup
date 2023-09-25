import React from 'react'
import {  Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';

import CustomCheckBox from './CustomCheckBox';
import { Link } from 'react-router-dom';
const onSubmit = async (values,actions)=>{
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)
  });
  actions.resetForm();

}

function PortalForm() {
  return (
    <>
    <Formik
       initialValues={{ userName: '', university: '', isAccepted: false }}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
     >
       {({isSubmitting})=> (
         <Form>
           <CustomInput label="Kullanıcı Adı" name="userName" type="text" placeholder="Kullanıcı Adınızı Giriniz" />
           <CustomSelect label="Okulunuz" name="university" placeholder="Üniversitenizi Seçiniz">
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">Galatasaray Üniversitesi</option>
            <option value="odtü">ODTÜ</option>
            <option value="itü">İTÜ</option>
           </CustomSelect>
           <CustomCheckBox type="checkbox" name="isAccepted"></CustomCheckBox>
         <button disabled={isSubmitting} type='submit'>Kaydet</button>
         <Link to="/" style={{color:"white"}}>Ana Forma Git</Link>
         </Form>
       )}
     </Formik></>
  )
}

export default PortalForm
