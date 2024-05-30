import React from 'react'
import SearchIcon from '../../../../assets/Search.svg'
import styles from './AppBar.module.css'
import BackIcon from '../../../../assets/back.svg'
import { useNavigate } from 'react-router-dom'

function AppBar() {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.topbar}>
      <img className={styles.searchIcon} alt='' src={SearchIcon} />
      <div className={styles.chiTitKpi1}>Tạo mới KPI</div>
      <img
        className={styles.keyboardBackspaceIcon}
        alt=''
        src={BackIcon}
        onClick={handleGoBack}
      />
    </div>
  )
}
export default AppBar
