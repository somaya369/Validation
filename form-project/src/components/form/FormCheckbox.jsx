import React from 'react';

const FormCheckbox = ({ label, register, name, error }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        <input type="checkbox" {...register(name)} style={{ marginRight: '0.5rem' }} />
        {label}
      </label>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default FormCheckbox;
