'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './login.module.css'
import GoogleSign from '../../Components/GoogleSign/GoogleSign'

export default function Login() {



    return (
        <div className={styles.main}>
            <div className={styles.contain}>
                <div className={styles.leftBox}>
                    <div className={styles.animLogo}>
                        <Image className={styles.logo} src='/realMatch.png' width={100} height={100} alt="logo" />
                    </div>
                    <div className={styles.textCarossel}>
                        <h2>Bienvenu(e) a <strong>Match</strong>. <br />Veuillez vous connecter.</h2>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.textUp}>
                        <h3>Avec votre identifiant</h3>
                    </div>

                    <form className={styles.form} action="/">
                        <div className={styles.identifiant}>
                            <label htmlFor="identifiant">Address Email</label>
                            <input type="email" placeholder="Address Email" required />
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" placeholder='Mot de passe' required />
                        </div>


                        <button className={styles.button}>
                            Se connecter
                        </button>

                    </form>

                    <div className={styles.textMiddle}>
                        <h3>Ou</h3>
                    </div>

                    <GoogleSign />

                    <div className={styles.othersPart}>
                        <div className={styles.creation}>
                            <h2>Pas de compte ? <Link href={'/login/register'} className={styles.creationLink}>Creez votre compte</Link></h2>
                        </div>
                        <div className={styles.reinitialisation}>
                            <h2>Mot de passe oublie ? <Link href={'/login'} className={styles.creationLink}>Reinitialisez le mot de passe</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
