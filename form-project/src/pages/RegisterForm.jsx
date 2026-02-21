import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validation/registerSchema';
import FormInput from '../components/form/FormInput';
import FormCheckbox from '../components/form/FormCheckbox';
import FormButton from '../components/form/FormButton';
import '../styles/global.css';

const RegisterForm = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(true);
  };

  useEffect(() => {
    // شبیه‌سازی لود اولیه، مثلا 2 ثانیه
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName}
          placeholder="Enter your full name"
        />
        <FormInput
          label="Email"
          name="email"
          register={register}
          type="email"
          error={errors.email}
          placeholder="Enter your email"
        />
        <FormInput
          label="Password"
          name="password"
          register={register}
          type="password"
          error={errors.password}
          placeholder="Enter password"
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          register={register}
          type="password"
          error={errors.confirmPassword}
          placeholder="Confirm password"
        />
        <FormCheckbox
          label="I accept the terms and conditions"
          name="terms"
          register={register}
          error={errors.terms}
        />
        <FormButton text="Register" />
      </form>
      {success && <p className="success">Registration Successful!</p>}
    </div>
  );
};

export default RegisterForm;
