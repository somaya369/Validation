import React from 'react';

const FormInput = ({ label, register, name, type = 'text', error, placeholder }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default FormInput;
