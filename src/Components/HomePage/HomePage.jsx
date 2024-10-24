

import React from 'react'
import styles from './HomePage.module.css'
import Link from "next/link";
import PostCreated from "../PostCreated/PostCreated";
import CreatePost from "../CreatePost/CreatePost";
import CardStory from "../CardStory/CardStory";
import Navbar from "../Navbar/Navbar";
import Avatar from "../Avatar/Avatar";
import NavMenu from '../NavMenu/NavMenu';
// import { BarLoader } from 'react-spinners';

export default function HomePage() {


    return (
        <main className="relative">

            <Navbar />
            <div className={styles.homeMain}>

                {/* ASIDE LEFT */}
                <div className={styles.hideNavMenu}>
                    <NavMenu />
                </div>

                {/* MAIN */}
                <div className={styles.mainCenter}>


                    {/* <div className={styles.loader}>
                        <BarLoader color='#0866FF' width={500} />
                    </div> */}

                    <CardStory />
                    <CreatePost />


                    <PostCreated />


                </div>

                {/* ASIDE RIGHT */}
                <section className={styles.asideRight}>

                    {/* TODO: POUR LES SUGGESTIONS D'AMIS */}
                    <div className={styles.suggestionBox}>
                        <p className={styles.suggestionTitle}>Utilisateurs récents</p>


                        <div className={styles.suggestionCart}>
                            <div className={styles.followOrNot}>
                                <div className={styles.imgSuggestion}>
                                    <Link href={''} className={styles.imgLink}>
                                        <Avatar />
                                    </Link>
                                    <p className={styles.contactName}>Charles louisin</p>
                                </div>
                                <Link href={'/'} className={styles.followBtn} type="button">Voir le profil</Link>
                            </div>
                        </div>

                    </div>
                </section>

            </div >

        </main>
    )
}
