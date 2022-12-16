import React from 'react'
import styles from './select.module.css'

const Select = ({options}) => {
  return (
    <div className='mt-5'>
        <h6 className="text-center">Multi-Select React Component</h6>
        <div className={styles.container} tabIndex={0}>
            <span className={styles.value}>{options[0].label}</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>

            <div className={styles.options}></div>
            <ul className={`${styles.options} ${styles.show}`}>
                {
                    options.map((option, index) => (
                        <li className={styles.option} key={index}>
                            <span 
                            className='p-3 mb-1'
                            style = {{
                            "backgroundColor":`${option.value}`,
                            "minWidth":"100%",
                            "display":"inline-flex",
                            }}
                            >
                            {option.label}</span>
                        </li>
                    ))
                }
            </ul>
        </div>  
    </div>
  )
}

export default Select
