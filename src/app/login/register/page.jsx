'use client'

import React, { useState } from 'react'
import styles from './register.module.css'
import Image from 'next/image'

export default function Register() {


    return (
        <div className={styles.main}>
            <div className={styles.etape2Contain}>
                <div className={styles.etape2LeftBox}>
                    <div className={styles.etape2AnimLogo}>
                        <Image className={styles.etape2Logo} src='/realMatch.png' width={100} height={100} alt="logo" />
                    </div>
                    <div className={styles.etape2TextCarossel}>
                        <h2>Bienvenu(e) a <strong>Match</strong>. <br />Creez votre compte ici.</h2>
                    </div>
                </div>
                <div className={styles.etape2RightBox}>
                    <div className={styles.etape2TextEtape1}>
                        <h3>Informations de connexion</h3>
                    </div>

                    <form className={styles.form} action="/">
                        <div className={`${styles.etape2Identifiant} ${styles.divMarge}`}>
                            <label htmlFor="nom d'utilisateur">Identifiant</label>
                            <input type="text" placeholder="Nom d'utilisateur" required />
                        </div>
                        <div className={`${styles.etape2Identifiant} ${styles.divMarge}`}>
                            <label htmlFor="email">Addresse Email</label>
                            <input type="email" placeholder='Homerbush@exemple.com' required />
                        </div>
                        <div className={`${styles.etape2Identifiant} ${styles.divMarge}`}>
                            <label htmlFor="nom d'utilisateur">Mot de passe</label>
                            <input type="password" placeholder='Mot de passe' required />
                        </div>
                        <button  type='button' className={styles.etape2Button}>Creer le compte</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
