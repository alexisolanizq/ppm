import useAuth from '@Hooks/login/useAuth';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Navigate } from 'react-router';
import LoginImage from '@Assets/images/logo_blanco_login.svg'
import ImagePPTM from '@Assets/images/pptm.svg'
import GoogleLogin from 'react-google-login';
import { APP_URL } from '@Const/config';
import '@Assets/styles/login.css';

const LoginV2 = () => {
  const {clientId, onGoogleSuccess, onGoogleFailure, isValid} = useAuth()

  return isValid ? (
    <Navigate to="/" replace />
  ) : (
    <div className="container-fluid bg-white">
      <div className="row vh-100">
        <div className="col-6 order-md-1 d-none d-md-block bg-gradient-login">
          <div className="position-absolute login-icon-white">
            <img src={LoginImage} height={400} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-2">
          <div className="container mt-5">
            <div className="text-center">
              <img src={ImagePPTM} height="80px" alt="" />
              <div className="fs-3 text-muted">SPPM</div>
              <p className="text-muted text-center mt-2 pt-2">
                Bienvenido. Ingrese sus credenciales
              </p>
            </div>
            <div className="w-50 mx-auto">
              <Form>
                <div className="fieldgroup mb-3">
                  <input
                    name="username"
                    autoComplete="off"
                    type="text"
                    required
                    id="username"
                  />
                  <label className="label-name text-muted" htmlFor="username">
                    <span className="content-name">Usuario</span>
                  </label>
                </div>
                <div className="fieldgroup mb-3">
                  <input
                    name="password"
                    autoComplete="off"
                    type="password"
                    required
                  />
                  <label className="label-name text-muted" htmlFor="password">
                    <span className="content-name">Contraseña</span>
                  </label>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-content-center mt-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="exampleCheck1"
                    >
                      Recordarme
                    </label>
                  </div>
                  <div className="text-muted">
                    <a className="text-decoration-none text-muted" href="/">
                      Olvidé mi contraseña
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn-submit py-2 mt-3 mb-2 shadow-sm"
                  >
                    Ingresar
                  </button>
                  <div className="mt-2">
                    <GoogleLogin
                      clientId={clientId}
                      responseType="code"
                      redirectUri={APP_URL}
                      scope="https://mail.google.com/"
                      buttonText="Inicia con Google"
                      onSuccess={onGoogleSuccess}
                      onFailure={onGoogleFailure}
                      cookiePolicy="single_host_origin"
                      accessType="offline"
                      prompt="consent"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="position-absolute bottom-0">
              <span className="text-muted fw-bold">
                Políticas de Privacidad
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginV2;
