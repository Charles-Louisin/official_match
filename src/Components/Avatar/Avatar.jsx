import React, { useContext } from 'react'
import styles from './Avatar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Avatar() {
  
  return (
    <Link href={'/profil'}>
      <Image className={styles.photo} src={'/louisin.jpg'} width={35} height={35} alt='PP' />
    </Link>
      
  )
}