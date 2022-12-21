import React from "react"
import { Link } from "react-router-dom"
import styles from "../../style"
import FooterColumn from "./FooterColumn"

const Footer = () => {
  return (
    <footer className={styles.container + " " + styles.footer}>
      <Link to={"/"}>
        <img
          src="https://www.freedownloadlogo.com/logos/e/eurasian-bank-3.svg"
          alt="logo"
          className="w-[200px] inline"
        />
      </Link>
      <div className={styles.footerColumnsContainer}>
        <FooterColumn id={1} />
        <FooterColumn id={2} />
        <FooterColumn id={3} />
        <FooterColumn id={4} />
      </div>
      <p className="text-white">
        Copyright 2022 Eurasian Bank, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
