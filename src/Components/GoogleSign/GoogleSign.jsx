
import React from 'react'
import styles from './GoogleSign.module.css'
import { FcGoogle } from 'react-icons/fc';

export default function GoogleSign() {


  return (
    <div className={styles.googleAccount}>
      <button className={styles.buttonGoogle} >
        Se connecter avec
        <FcGoogle className={styles.googleLogo} />
      </button>
    </div>
  )
}
