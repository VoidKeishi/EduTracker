import styles from './TopBar.module.css'
import menu from '../../assets/Menu.svg'
import search from '../../assets/Search.svg'
import logo from '../../assets/Track, Achieve, Excel (1) 1.png'
import { UIContext } from '../../context/UIContext'
import { useContext } from 'react'

const TopBar = () => {
  const uiContext = useContext(UIContext)

  return (
    <div className={styles.rectangleParent} style={{ maxWidth: '420px' }}>
      <div className={styles.groupChild} />
      <img
        className={styles.menuIcon}
        alt=''
        src={menu}
        onClick={() => {
          uiContext.setSideBar(true)
        }}
      />
      <div className={styles.searchWrapper}>
        <img className={styles.searchIcon} alt='' src={search} />
      </div>
      <img className={styles.trackAchieveExcel11} alt='' src={logo} />
    </div>
  )
}

export default TopBar
