

import React from 'react'
import styles from './CreatePost.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../Avatar/Avatar'
import { FaUserTag } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";


export default function CreatePost() {







    return (
        <div className={styles.addPost}>

            <div className={styles.partPostUp}>
                <div className={styles.inputPost}>
                    <Avatar />
                    <input
                        className={styles.postInput}
                        value={content}

                        placeholder={`Quoi de neuf ?`}
                    />
                </div>


                {/* <div>
                    <FadeLoader color="#0867ffbb" radius={1} />
                </div> */}


                <div className={styles.addPhoto}>

                    <div className={styles.photoAjouter}>
                        <Image src={''} alt="Image" width={100} height={100} className={styles.photoAjoute} />
                        <BsXLg className={styles.deleteIcon} />
                    </div>

                </div>

            </div>
            <div className={styles.partPostDown}>
                <div className={styles.partLeft}>
                    <label className={styles.postLink}>
                        <input type="file" hidden />
                        <FaImages className={styles.icons} />
                        Image
                    </label>
                    <Link href={''} className={styles.postLink}>
                        <FaUserTag className={styles.icons} />
                        Taguer un ami
                    </Link>
                    <Link href={''} className={styles.postLink}>
                        <FaShare className={styles.icons} />
                        Partager
                    </Link>
                </div>
                <button className={styles.partager}>Publier</button>
            </div>


        </div>
    )
}