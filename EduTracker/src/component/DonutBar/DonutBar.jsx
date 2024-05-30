import React from 'react'
import styles from './DonutBar.module.css'

function DonutBar({ value }) {
  return (
    <div>
      <div className={styles.donut}>
        <div className={styles['donut-default']}></div>
        {/* <div className={styles['donut-line']}></div> */}
        <div className={styles['donut-text']}>
          <span style={{ fontSize: '1.5rem' }}>{value}%</span>
        </div>
        <div className={styles['donut-case']}></div>
      </div>
    </div>
  )
}

export default DonutBar
