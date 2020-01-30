import React from 'react';

export default function SetAnswers({ form, setForm }) {

  const updateForm = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  return(
    <>
      <label>Current Password</label>
      <input 
      type='password'
      name='old_password'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.old_password}></input>
      <label>New Password</label>
      <input 
      type='password'
      name='new_password'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.new_password}></input>
      <label>Confirm New Password</label>
      <input 
      type='password'
      name='confirm_new_password'
      onChange={(e) => updateForm(e.target.name, e.target.value)}
      value={form.confirm_new_password}></input>
    </>
  )
}