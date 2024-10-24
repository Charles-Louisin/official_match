import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Cover.module.css'
import { BsCamera, BsFillCameraFill } from "react-icons/bs";
import Preloader from '../Preloader/Preloader';

export default function CoverPage() {

    return (
        <>
            <Image className={styles.imgCover} src={'/hide-facebook-profile-picture-notification.jpg'} alt='Couverture' width={250} height={250} />
           
                <div className={styles.containLoad}>
                    <div className={styles.load}>
                        {/* <Preloader /> */}
                    </div>
                </div>
            
                <div className={styles.containBtn}>
                    <label className={styles.btn}>
                        <input type="file" hidden />
                        <BsFillCameraFill className={styles.coverIcon} />
                        <p>Changer la photo de couverture</p>
                    </label>
                </div>
            </>
    )
}
