import React from 'react';
import styles from './Form.module.scss';
const Form = (props) => (
  <React.Fragment>
    <form className={styles.form}>
      <h1>Create Account</h1>
      <input placeholder="Your-Email" type="text" name="email" />
      <input placeholder="Your-Password" type="text" name="password" />
      <input className={styles.submit} type="submit" />
    </form>
  </React.Fragment>
);
export default Form;
