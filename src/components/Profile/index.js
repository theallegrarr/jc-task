import React, { useState, useEffect } from 'react';
import { message, Spin, Icon } from 'antd';
import { Helmet } from 'react-helmet';
import SEO from 'react-seo-component';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import UploadImage from '../Auth/UploadImage';
import SetAnswers from './Answers';
import SetPassword from './Password';
import * as auth from '../Auth/authHelper';
import navimage from '../../assets/user.png';

export default function Profile(){
  const [edit, setEdit] = useState(true);
  const [loading, setLoading] = useState({ main: false, ans: false, pas: false, image: false });
  const [details, setDetails] = useState({});
  const [password, setPassword] = useState(false);
  const [answers, setAnswers] = useState(false);
  const [image, setImage] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone_number: '',
    email: '',
    date_of_birth: '',
    address: '',
    image: ''
  });
  const [answerForm, setAnswerForm] = useState({
    security_answer_1: '',
    security_answer_2: '',
    security_answer_3: '',
  });
  const [passForm, setPassForm] = useState({
    new_password: '',
    confirm_new_password: '',
    old_password: '',
  });
  const [imageForm, setImageForm] = useState({
    image: ''
  })
  const updateImage = (key, value) => {
    setImageForm({ [key]: value });
  }
  
  const toggleAnswer = async () => {
    if(answers === true){
      setLoading({...loading, ans: true });
      const update = await auth.updateData(details.id, answerForm);
        
      if(update.status) {
        const newDetails = await auth.getData(details.id);
        await localStorage.setItem('user_info', JSON.stringify(newDetails.result));
        await setDetails(newDetails.result);
        message.success('update complete');
        setAnswers(!answers);
        setPassword(false);
        setImage(false);
        setLoading({...loading, ans: false });
      }
    } else {
      setAnswers(!answers);
      setPassword(false);
      setImage(false);
      setLoading({...loading, ans: false });
    }
  }

  const toggleImage = async () => {
    if(image === true){
      setLoading({...loading, image: true });
      const update = await auth.updateData(details.id, imageForm);
        
      if(update.status) {
        const newDetails = await auth.getData(details.id);
        await localStorage.setItem('user_info', JSON.stringify(newDetails.result));
        await setDetails(newDetails.result);
        await setForm(newDetails.result);
        message.success('update complete');
        setImage(!image);
        setPassword(false);
        setAnswers(false);
        setLoading({...loading, image: false });
      }
    } else {
      setAnswers(false);
      setPassword(false);
      setImage(true);
      setLoading({...loading, image: false });
    }
  }

  const togglePassword = async () => {
    if(password === true){
      setLoading({...loading, pas: true });
      if(passForm.new_password !== passForm.confirm_new_password){
        message.error('new password does not match');
        setLoading({...loading, pas: false });
      } else {
        const update = await auth.changePassword(details.id, passForm.old_password, passForm.new_password);
        if(update.status){
          message.success('password update successful')
          setAnswers(false);
          setImage(false);
          setLoading({...loading, pas: false });
          setPassword(!password);
        }else{
          message.error('password update failed');
          setLoading({...loading, pas: false });
        }
      }
    } else {
      setAnswers(false);
      setImage(false);
      setPassword(!password);
    }
  }

  const updateForm = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  const submitForm = async (id, data) => {
    try {
      if(edit === false) {
        setLoading({...loading, main: true });
        const update = await auth.updateData(id, data);
        
        if(update.status) {
          const newDetails = await auth.getData(id);
          await localStorage.setItem('user_info', JSON.stringify(newDetails.result));
          await setDetails(newDetails.result);
          message.success('update complete');
          setEdit(!edit);
          setLoading({...loading, main: false });
        } else {
          setLoading({...loading, main: false });
          message.success('update failed, check your input');
        }
      } else {
        setLoading({...loading, main: false });
        setEdit(!edit);
      }
    } catch (error) {
      return error;
    }
  }

  const antIcon = <Icon 
    type="loading" 
    style={{ fontSize: 24, color: '#fff' }} spin />;

  useEffect(() => {
    const userInfo = localStorage.getItem('user_info');
    if(userInfo){
      setDetails(JSON.parse(userInfo));
    }
  }, []);

  return(
    <div className='profile-container'>
      <SEO
        title={'LinkUp'}
        description={'~'}
        image={navimage}
        pathname={'/'}
        siteLanguage={'en'}
        siteLocale={'en_gb'}
        twitterUsername={'linkup'}
        titleTemplate={' '}
      />
      <Helmet>
        <title>{`LinkUp - My Profile`}</title>
      </Helmet>
      <div className='button-box'>
        <button
          onClick={() => submitForm(details.id, form)}
      >{loading.main && <Spin indicator={antIcon} />}{' '}{edit ? 'Edit Profile' : 'Save' }</button>
      </div>
      {
        edit ?
        <ViewProfile info={form} setInfo={setForm} />
        :
        <EditProfile 
        form={form} 
        updateForm={updateForm} 
        setForm={setForm} />
      }
      <div 
        className='button-box'
        style={{ marginTop: '30px' }}>
        <button
          onClick={togglePassword}
        >{loading.pas && <Spin indicator={antIcon} />}{' '}{password ? 'Save Password' : 'Change Password' }</button>
        <button
          onClick={toggleAnswer}
        >{loading.ans && <Spin indicator={antIcon} />}{' '}{answers ? 'Save Answers' : 'Update Answers' }</button>
        <button
          onClick={toggleImage}
        >{loading.image && <Spin indicator={antIcon} />}{' '}{image ? 'Save Image' : 'Change Image' }</button>
      </div>
        {image && <UploadImage updateForm={updateImage} />}
        {answers && <SetAnswers form={answerForm} setForm={setAnswerForm} />}
        {password && <SetPassword  form={passForm} setForm={setPassForm} />}
    </div>);
}