import React, { useEffect, useState } from 'react'
import styles from './ProfileContent.module.css'
import CreatePost from '../CreatePost/CreatePost'
import PostCreated from '../PostCreated/PostCreated'
import { FaPenToSquare } from 'react-icons/fa6'
import { FaRegSave } from 'react-icons/fa'
import { TbPencilCancel } from 'react-icons/tb'
import { FaLocationDot } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { BsCalendar3EventFill } from "react-icons/bs";
import { BarLoader } from 'react-spinners'

export default function ProfileContent() {



    return (
        <div className={styles.main}>

            <div className={styles.containPost}>
                <div className={styles.postLeft}>
                    <div className={styles.containLeft}>
                        <div className={styles.profilName}>

                            {/* <div className={styles.editMode}>
                                <textarea type="text"
                                    className={styles.areaNameMode}
                                    placeholder='Parlez nous de vous'

                                />

                                <input type="text"
                                    className={styles.inputNameMode}
                                    placeholder='Lieu de naissance'

                                />

                                <input type="text"
                                    className={styles.inputNameMode}
                                    placeholder='Celibataire ou marie'

                                />

                                <input type="text"
                                    className={styles.inputNameMode}
                                    placeholder='Date de naissance'

                                />
                            </div> */}



                            <div className={styles.containText}>

                                {/* <p className={styles.bio}> <br />

                                    <button
                                        className={styles.infoBtn}
                                        type="button">
                                        <FaPenToSquare className={styles.icons} />
                                        Modifier ma bio
                                    </button>

                                </p> */}


                                <p className={styles.bio}>
                                    Aucune bio definie <br />
                                    
                                        <button 
                                            className={styles.infoBtn}
                                            type="button">
                                            <FaPenToSquare className={styles.icons} />
                                            Modifier ma bio
                                        </button>
                                   
                                </p>


                                {/* location */}


                                {/* <p className={styles.textEdited}><FaLocationDot className={styles.iconEdit} /> De <strong></strong></p> */}

                                <p className={styles.textEdited}><FaLocationDot className={styles.iconEdit} />
                                    Aucune location definie  </p>


                                {/* situation */}


                                {/* <p className={styles.textEdited}><GoHeartFill className={styles.iconEdit} /></p> */}

                                <p className={styles.textEdited}><GoHeartFill className={styles.iconEdit} />
                                    Aucune situation definie</p>


                                {/* sex */}


                                {/* <p className={styles.textEdited}><BsCalendar3EventFill className={styles.iconEdit} />Né(e) le <strong></strong></p> */}

                                <p className={styles.textEdited}><BsCalendar3EventFill className={styles.iconEdit} />
                                    Aucune date definie</p>

                            </div>



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



                        </div>
                    </div>
                </div>
                <div className={styles.postRight}>

                    {/* <div className={styles.loader}>
                        <BarLoader color='#0866FF' width={500} />
                    </div> */}

                    <CreatePost />

                    <PostCreated />

                </div>
            </div>
            


        </div>
    )
}
