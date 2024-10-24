

import React from 'react'
import styles from './ProfilTabs.module.css'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProfilTabs() {

   

    return (
        <div className={styles.main}>
            <div>
                <Link href={''} className={styles.selectTabs} >
                    <div className={styles.containTabs}>
                        <FaRegFileAlt className={styles.iconTabs} />
                        Publications
                    </div>
                </Link>
            </div>

            <div>
                <Link href={''} className={styles.labelTabs}>
                    <div className={styles.containTabs}>
                        <IoIosInformationCircleOutline className={styles.iconTabs} />
                        A Propos
                    </div>
                </Link>
            </div>

            <div>
                <Link href={''} className={styles.labelTabs}>
                    <div className={styles.containTabs}>
                        <IoImageOutline className={styles.iconTabs} />
                        Photos
                    </div>
                </Link>
            </div>
        </div>
    )
}
