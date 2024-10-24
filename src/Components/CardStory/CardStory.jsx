import React from 'react'
import styles from './CardStory.module.css'
import Image from 'next/image'
import { MdAdd } from "react-icons/md";

export default function CardStory() {


    return (
        <div className={styles.storyBox}>
           
                <div className={styles.headStoryCart}>
                    <div className={styles.myStoryCart}>
                        <Image className={styles.imgStory} src={'/louisin.jpg'} width={100} height={100} alt="" />
                        <p><MdAdd className={styles.iconAdd} /></p>
                    </div>
                    <p className={styles.myContactStoryName}>Créer une story</p>
                </div>
            
                    <div className={styles.storyCart}>
                        <Image className={styles.imgStory} src={'/louisin.jpg'} width={100} height={100} alt="" />
                        <p className={styles.contactStoryName}>Homer Bush</p>
                    </div>

                    <div className={styles.storyCart}>
                        <Image className={styles.imgStory} src={'/louisin.jpg'} width={100} height={100} alt="" />
                        <p className={styles.contactStoryName}>John Doe</p>
                    </div>

                    <div className={styles.storyCart}>
                        <Image className={styles.imgStory} src={'/louisin.jpg'} width={100} height={100} alt="" />
                        <p className={styles.contactStoryName}>Charles YIMBNE</p>
                    </div>
               
        </div>
    )
}
