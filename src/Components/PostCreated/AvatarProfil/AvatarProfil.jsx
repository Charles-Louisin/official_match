import React, { useEffect, useState } from 'react'
import styles from './AvatarProfil.module.css'
import Image from 'next/image'
import { BsCamera, BsFillCameraFill } from "react-icons/bs";
import Preloader from '../Preloader/Preloader';

export default function AvatarProfil() {

    
  return (
    <div className={styles.main}>
    <Image className={styles.profilAvatar} src={''} alt='Profil' width={150} height={150} />
    
                <div className={styles.containLoad}>
                    <div className={styles.load}>
                        <Preloader />
                    </div>
                </div>
           
        <label className={styles.profilContain}>
            <input type="file" hidden />
            <BsFillCameraFill className={styles.bsCamera} />
        </label>
   
    </div>
  )
}
