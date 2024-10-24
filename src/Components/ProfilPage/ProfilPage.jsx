'use client'

import React, { useContext, useEffect, useState } from 'react'
import styles from './ProfilePage.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import CoverPage from '../Cover/Cover'
import AvatarProfil from '../AvatarProfil/AvatarProfil'
import { FaPenToSquare } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { TbPencilCancel } from "react-icons/tb";
import ProfilTabs from '../ProfilTabs/ProfilTabs'
import ProfileContent from '../ProfileContent/ProfileContent'
import Preloader from '../Preloader/Preloader'
import { BsCamera } from 'react-icons/bs'

export default function Profilpage() {





    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.upProfil}>
                    <div className={styles.profilBody}>
                        <div className={styles.photoCouverture}>

                            {/* <CoverPage /> */}

                            <CoverPage />

                            <div className={styles.containLoad}>
                                <div className={styles.load}>
                                    {/* <Preloader /> */}
                                </div>
                            </div>

                            <div className={styles.containBtn}>
                                <label className={styles.btn}>
                                    <input type="file" hidden />
                                    <BsCamera className={styles.coverIcon} />
                                    Ajoutez une photo de couverture
                                </label>
                            </div>

                        </div>

                        <div className={styles.BoxInfoProfil}>
                            <div className={styles.photoProfil}>
                                <div className={styles.avatarFixed}>

                                    {/* <AvatarProfil /> */}

                                    <AvatarProfil />

                                </div>

                                <div className={styles.profilName}>

                                    {/* <div className={styles.editMode}>
                                        <input type="text"
                                            className={styles.inputNameMode}
                                            placeholder='Entrez votre nom'

                                        />

                                        <input type="text"
                                            className={styles.inputNameMode}
                                            placeholder='Lieu de residence'

                                        />
                                    </div> */}


                                    <div className={styles.align}>
                                        <p>Charles Louisin</p>

                                        <p className={styles.ville}>Douala, Bali</p>

                                        <p className={styles.ville}>Aucune location definie</p>

                                    </div>


                                </div>
                            </div>

                            <div className={styles.otherBtn}>

                                <button
                                    className={styles.infoBtn}
                                    type="button">
                                    <FaPenToSquare className={styles.icons} />
                                    Modifier mes infos
                                </button>


                                {/* <div className={styles.editableBtn}>
                                    <button className={`${styles.infoBtn} ${styles.saveBtn}`} type="button">
                                        <FaRegSave className={styles.icons} />
                                        Enregistrer
                                    </button>
                                    <button className={`${styles.infoBtn} ${styles.cancelBtn}`} type="button">
                                        <TbPencilCancel className={styles.icons} />
                                        Annuler
                                    </button>
                                </div> */}



                                {/* <button className={styles.ajouter} type="button">
                                    <IoPersonAddOutline className={styles.icons} />
                                    Ajouter
                                </button>
                                <button className={styles.msgBtn} type="button">
                                    <RiMessengerLine className={styles.icons} />
                                    Message
                                </button> */}


                            </div>
                        </div>
                        <ProfilTabs />
                    </div>

                    <div className={styles.addComponents}>
                        <ProfileContent />
                    </div>
                </div>

            </div>
        </>
    )
}
