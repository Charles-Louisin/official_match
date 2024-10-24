'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../Avatar/Avatar'
import { GrHomeRounded } from "react-icons/gr";
import { MdGroupAdd, MdOutlineGroupAdd } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { MdOutlineApps } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";

export default function Navbar() {

  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);


  return (
    <div className={styles.mainNav}>
      <div className={styles.left}>
        <Link href={`/`}><Image className={styles.logo} src='/realMatch.png' width={50} height={50} alt="logo" /></Link>
        <CiSearch onClick={(e) => setHide(!hide)} className={styles.iconSearch} />
        <input onClick={(e) => setHide(!hide)} className={styles.input} type="search" placeholder='Rechercher dans Match...' />

        <div className={styles.navMenu2}>
          <Link href={`/menu`} className={styles.navLink} >
            <span className={styles.spanHome}>
              <GrMenu className={styles.iconsLink} />
              <p className={styles.menu}>Menu</p>
            </span>
          </Link>
        </div>

      </div>

      {hide && (
        <>
          <div onClick={(e) => setHide(!hide)} className={styles.mainContain}>
          </div>
          <div className={styles.containSearchBar}>
            <div className={styles.searchBar}>
              <BsArrowLeft onClick={(e) => setHide(!hide)} className={styles.arrowIcon} />
              <input className={styles.inputMain} type="search" placeholder='Rechercher dans Match...' />
              <CiSearch className={styles.iconSearchMain} />
            </div>

            <div className={styles.result}>
              {/* <div className={styles.suggestionCart}>
                <div className={styles.followOrNot}>
                  <div className={styles.imgSuggestion}>
                    <Link href={''} className={styles.imgLink}>
                      <Avatar  />
                    </Link>
                    <p className={styles.contactName}></p>
                  </div>
                  <Link href={'/profil/' + allUser?.id + '/?query=post'} className={styles.followBtn} type="button">Voir le profil</Link>
                </div>
              </div> */}
            </div>

          </div>
        </>
      )}



      <div className={styles.center}>
        <Link href={`/`} className={styles.navLink} >
          <span className={styles.spanHome}>
            <GrHomeRounded className={styles.iconsLink} />
            <p className={styles.accueil}>Acceuil</p>
          </span>
        </Link>


        <Link href={`/`} className={styles.navLink} >
          <span className={styles.spanHome}>
            <MdOutlineGroupAdd className={styles.iconsLink} />
            <p className={styles.invitation}>Invitations</p>
          </span>
        </Link>


        <Link href={`/`} className={styles.navLink} >
          <span className={styles.spanHome}>
            <BsBell className={styles.iconsLink} />
            <p className={styles.notif}>Notifications</p>
          </span>
        </Link>


        <Link href={`/`} className={styles.navLink} >
          <span className={styles.spanHome}>
            <HiOutlineUserGroup className={styles.iconsLink} />
            <p className={styles.discussion}>Discussions</p>
          </span>
        </Link>

        <div className={styles.navMenu}>
          <Link href={`/menu`} className={styles.navLink} >
            <span className={styles.mainNav}>
              <GrMenu className={styles.iconsLink} />
              <p className={styles.menu}>Menu</p>
            </span>
          </Link>
        </div>
      </div>



      <div className={styles.right}>
        <div className={styles.menuIcon}>
          <span className={styles.apps}>
            <MdOutlineApps className={styles.iconsLink} />
          </span>
          <p className={styles.appText}>Menu</p>
        </div>
        {/* <ToggleTheme /> */}
        <div onClick={() => setShow(!show)} className={styles.imgProfil}>

          <div className={styles.container}>
            <Avatar />
            <span className={styles.avatarText}>Compte</span>
          </div>

          {/* <Avatar url={'/hide-facebook-profile-picture-notification.jpg'} /> */}

        </div>
      </div>

      {show && (
        <>
          <div onClick={() => setShow(!show)} className={styles.mainContain}>
          </div>
          <div className={styles.containAccount}>
            <div className={styles.containerAccount}>
              <Link className={styles.profilAccount} href={'/profil'}>
                <Avatar />
                <p>Charles Louisin</p>
              </Link>
            </div>
            <div className={styles.logout}>
              <button className={styles.firstNavLinks}><IoLogOutSharp className={styles.navIcons} />Deconnexion</button>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

