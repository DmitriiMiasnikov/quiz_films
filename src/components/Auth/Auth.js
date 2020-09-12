import React from 'react';
import styles from './Auth.module.scss';
import { Form, Field } from 'react-final-form';

const LoginForm = (props) => {
    return (
      <Form
        onSubmit={props.onSubmit}
        validate={props.validate}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.line}>
              <Field name="login">
                {({ input, meta }) => (
                  <div>
                    <label>{props.local === 'en' ? 'Login:' : 'Логин:'}</label>
                    <input {...input} type="text" placeholder={props.local === 'en' ? 'email' : 'Введите email'} />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.line}>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>{props.local === 'en' ? 'Password:' : 'Пароль:'}</label>
                    <input {...input} type="text" placeholder={props.local === 'en' ? 'password' : 'Введите пароль'} type='password' />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className={`${styles.line} ${styles.button}`}>
              <button type='submit'>Login</button>
              <button onClick={form.reset}>Clear forms</button>
            </div>
            <div className={`${styles.line} ${styles.result}`}>
                  {props.message}
            </div>
          </form>
        )}
      />
    )
  }
  
  const Auth = (props) => {
    // if (props.isAuth) {
    //   return <Redirect to={'/mainpage'}/>
    // }
    return <div className={styles.wrapper}>
      <div className={styles.title}>{props.local === 'en' ? 'Authorization' : 'Авторизация:'}</div>
      <LoginForm {...props} />
    </div>
  }
  
  export default Auth;