import React from 'react';
import 'assets/fonts/fonts.modules.scss';
import styles from './Root.module.scss';
import Form from 'components/Form/Form';
let registeredUser = false;
const Root = () => (
  <div className={styles.container}>
    <div className={styles.centerContainer}>
      <Form registeredUser={registeredUser}></Form>
    </div>
  </div>
);
export default Root;
