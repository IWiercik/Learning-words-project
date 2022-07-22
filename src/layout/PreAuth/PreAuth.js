import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from 'views/RegistrationForm/Registration';
import LoginForm from 'views/LoginForm/LoginForm';
import Home from 'views/Home/Home';

const preAuth = () => (
  <BrowserRouter>
    <Navigation isAuthorized={false}></Navigation>
    <BasicContainer noPadding={true}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BasicContainer>
  </BrowserRouter>
);
export default preAuth;
