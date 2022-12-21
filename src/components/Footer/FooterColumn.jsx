import React from "react"
import { FOOTER_LINKS } from "./FooterLinks"
import styles from "../../style"
import { Link } from "react-router-dom"

const FooterColumn = ({ id }) => {
  return (
    <div>
      {FOOTER_LINKS.filter((column) => column.id === id).map((column) => (
        <div key={column.id}>
          <h3 className={styles.footerColumnHeading}>{column.heading}</h3>
          <ul>
            {column.links.map((link) => (
              <Link to={"/"} key={link}>
                <li className={styles.footerColumnLinks}>{link}</li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FooterColumn
