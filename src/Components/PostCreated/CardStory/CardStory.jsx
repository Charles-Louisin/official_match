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
                        <p><MdAdd className={styles.iconAdd} />Charles</p>
                    </div>
                    <p className={styles.myContactStoryName}>Créer une story</p>
                </div>
            
                    <div className={styles.storyCart}>
                        <Image className={styles.imgStory} src={'/louisin.jpg'} width={100} height={100} alt="" />
                        <p className={styles.contactStoryName}>Louisn</p>
                    </div>
               
            {/* <div className={styles.storyCart}>
                <Image className={styles.imgStory} src="/MATCHLogo.PNG" width={100} height={100} alt="" />
                <p className={styles.addStory}>+</p>
                <p className={styles.contactStoryName}>Charles</p>
            </div>

            <div className={styles.storyCart}>
                <Image className={styles.imgStory} src="/louisin.jpg" width={100} height={100} alt="" />
                <p className={styles.contactStoryName}>Dinasty Le Tiger</p>
            </div>
            <div className={styles.storyCart}>
                <Image className={styles.imgStory} src="/MATCHLogo.PNG" width={100} height={100} alt="" />
                <p className={styles.contactStoryName}>Match Logo</p>
            </div>
            <div className={styles.storyCart}>
                <Image className={styles.imgStory} src="/louisin.jpg" width={100} height={100} alt="" />
                <p className={styles.contactStoryName}>Drew Williamson</p>
            </div> */}
        </div>
    )
}
