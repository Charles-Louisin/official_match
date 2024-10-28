

import React from 'react'
import styles from './NavMenu.module.css'
import Avatar from '../Avatar/Avatar'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { GrGallery, GrGroup, GrMoney } from 'react-icons/gr'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { BsCalendar4Event, BsCameraReels, BsCameraVideo } from 'react-icons/bs'
import { GoHistory } from 'react-icons/go'
import { IoGameControllerOutline } from 'react-icons/io5'
import { RiMessage3Line } from 'react-icons/ri'
import { SiGoogleclassroom } from 'react-icons/si'
import { PiShoppingBagOpenDuotone } from 'react-icons/pi'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'

export default function NavMenu() {


    return (
        <>
        <Navbar />
        <div className={styles.asideLeft}>
            <div><Link className={styles.firstNavLinks} href={'/profil/'}>
                <Avatar />
                <p>Charles Louisin</p>
            </Link>
            </div>
            <div><Link className={styles.firstNavLinks} href={''}><LiaUserFriendsSolid className={styles.navIcons} />Amis</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><GrGroup className={styles.navIcons} />Groupes</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><HiOutlineBuildingStorefront className={styles.navIcons} />Marché</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><BsCameraReels className={styles.navIcons} />Réels</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><GoHistory className={styles.navIcons} />Souvenirs</Link></div>

            <div><Link className={styles.firstNavLinks} href={''}><BsCalendar4Event className={styles.navIcons} />Evenements</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><IoGameControllerOutline className={styles.navIcons} />Jeux</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><GrGallery className={styles.navIcons} />Gallery</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><BsCameraVideo className={styles.navIcons} />Vidéos</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><RiMessage3Line className={styles.navIcons} />Messages</Link></div>

            <div><Link className={styles.firstNavLinks} href={''}><GrMoney className={styles.navIcons} />Fonds</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><SiGoogleclassroom className={styles.navIcons} />Tutoriels</Link></div>
            <div><Link className={styles.firstNavLinks} href={''}><PiShoppingBagOpenDuotone className={styles.navIcons} />Courses</Link></div>

        </div>
        </>
    )
}
