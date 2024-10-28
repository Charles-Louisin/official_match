"use client"

import React, { useState } from 'react'
import styles from './PostCreated.module.css'
import Link from 'next/link'
import Avatar from '../Avatar/Avatar'
import Image from 'next/image'
import { BsThreeDots } from "react-icons/bs";
import { BiMessageSquare } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

export default function PostCreated() {

    const [hide, setHide] = useState(false);


    return (
        <div className={styles.ifPost}>
            <div className={styles.firstPartIfPost}>
                <div className={styles.imgAndName}>
                    <Avatar />
                    <div className={styles.nameAndTime}>
                        <p className={styles.profilInfo}>
                            <Link className={styles.nameContact} href={'/'}>Charles Louisin</Link>
                            <small className={styles.small}>a partage une publication</small>
                        </p>
                        <p className={styles.datePost}>
                            17 Novembre 2024
                        </p>
                    </div>
                </div>
                <div className={styles.pointMenu}>
                    <BsThreeDots className={styles.iconDelete} />
                </div>
            </div>


            <div className={styles.secondPartIfPost}>
                <p className={styles.textComment}>Hello</p>
            </div>

            <div className={styles.photoAjoute} >

                <div >
                    <Image className={styles.imagePoste} src={'/louisin.jpg'} alt='image' width={250} height={250} />
                </div>

            </div>


            <div className={styles.thirtPartIfPost}>
                <div className={styles.countLike}>

                    <div className={styles.likeContainer}>
                        <span className={styles.likeNbr}><AiFillLike className={styles.fillLike} /></span>
                        <p className={styles.likeText}>Soyez le premier a liker</p>
                    </div>





                    <p className={styles.likeText}>Aucun commentaire</p>

                </div>
                <div className={styles.partLike}>

                    <button className={styles.postLink}>
                        <AiFillLike className={styles.postIcon} />
                        Like
                    </button>

                    <button onClick={() => setHide(!hide)} className={styles.postLink}>
                        <BiMessageSquare className={styles.postIcon} />
                        Commenter
                    </button>

                </div>
            </div>
            <div className={styles.lastPart}>
                {hide && (
                    <>
                        <div className={styles.commentaire}>
                            <Avatar />
                            <form className={styles.inputForm}>
                                <input

                                    className={styles.inputComment} type="text" name="comment"
                                    placeholder='Laissez un commentaire'
                                />
                            </form>
                        </div>


                        <div className={styles.postComment}>
                            <Avatar />
                            <div className={styles.myPost}>
                                <div className={styles.myPostUp}>
                                    <Link className={styles.linkId} href={'/profil/'}>
                                        <p className={styles.nameContact}>
                                            Charles louisin
                                        </p>
                                    </Link>
                                    <p className={styles.timeAgo}>
                                        Now
                                    </p>
                                </div>
                                <p className={styles.textComment}>
                                    Nice !
                                </p>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
