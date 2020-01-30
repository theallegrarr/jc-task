import React, { useEffect } from 'react';

export default function SetAnswers({ form, setForm }) {

  const updateForm = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));

    setForm({
      security_answer_1: userInfo.security_answer_1,
      security_answer_2: userInfo.security_answer_2,
      security_answer_3: userInfo.security_answer_3,
    })
  }, []);

  return(
    <>
      <label>Security Answer 1</label>
      <input 
      name='security_answer_1'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.security_answer_1}></input>
      
      <label>Security Answer 2</label>
      <input 
      name='security_answer_2'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.security_answer_2}></input>

      <label>Security Answer 3</label>
      <input 
      name='security_answer_3'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.security_answer_3}></input>
    </>
  )
}