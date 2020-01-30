import React, { useState, useEffect } from 'react';
import { message, Spin, Icon } from 'antd';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import SetAnswers from './Answers';
import SetPassword from './Password';
import * as auth from '../Auth/authHelper';

export default function Profile(){
  const [edit, setEdit] = useState(true);
  const [loading, setLoading] = useState({ main: false, ans: false, pas: false });
  const [details, setDetails] = useState({});
  const [password, setPassword] = useState(false);
  const [answers, setAnswers] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone_number: '',
    email: '',
    date_of_birth: '',
    address: ''
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
        setLoading({...loading, ans: false });
      }
    } else {
      setAnswers(!answers);
      setPassword(false);
      setLoading({...loading, ans: false });
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
          setLoading({...loading, pas: false });
          setPassword(!password);
        }else{
          message.error('password update failed');
          setLoading({...loading, pas: false });
        }
      }
    } else {
      setAnswers(false);
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
      <div className='button-box'>
        <button
          onClick={() => submitForm(details.id, form)}
      >{loading.main && <Spin indicator={antIcon} />}{' '}{edit ? 'Edit Profile' : 'Save' }</button>
      </div>
      {
        edit ?
        <ViewProfile />
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
      </div>
        {answers && <SetAnswers form={answerForm} setForm={setAnswerForm} />}
        {password && <SetPassword  form={passForm} setForm={setPassForm} />}
    </div>);
}