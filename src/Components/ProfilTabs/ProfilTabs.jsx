"use client"


import React, { useState } from 'react'
import styles from './ProfilTabs.module.css'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProfilTabs() {

    const [activeTab, setActiveTab] = useState('publications');
   

    return (
        <div className={styles.main}>
            {/* <ul>
                <li className={activeTab === 'publication' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('publications')}>Publications</li>
                <li className={activeTab === 'about' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('about')}>A Propos</li>
                <li className={activeTab === 'photos' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('photos')}>Photos</li>
            </ul> */}
            <div>
                <Link href={''} className={activeTab === 'publications' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('publications')} >
                    <div className={activeTab === 'publications' ? styles.activeTabs : styles.containTabs} onClick={()=> setActiveTab('publications')} >
                        <FaRegFileAlt className={styles.iconTabs} />
                        Publications
                    </div>
                </Link>
            </div>

            <div>
                <Link href={''} className={activeTab === 'about' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('about')}>
                    <div className={activeTab === 'about' ? styles.activeTabs : styles.containTabs} onClick={()=> setActiveTab('publications')} >
                        <IoIosInformationCircleOutline className={styles.iconTabs} />
                        A Propos
                    </div>
                </Link>
            </div>

            <div>
                <Link href={''} className={activeTab === 'photos' ? styles.selectTabs : styles.labelTabs} onClick={()=> setActiveTab('photos')}>
                    <div className={activeTab === 'photos' ? styles.activeTabs : styles.containTabs} onClick={()=> setActiveTab('publications')} >
                        <IoImageOutline className={styles.iconTabs} />
                        Photos
                    </div>
                </Link>
            </div>
        </div>
    )
}
