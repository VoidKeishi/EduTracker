import styles from './AppBar.module.css'
import menu from '../../../assets/Menu.svg'
import search from '../../../assets/Search.svg'
import { UIContext } from '../../../context/UIContext'
import { useContext } from 'react'

const AppBar = () => {
  const uiContext = useContext(UIContext)

  return (
    <div
      style={{
        maxWidth: '420px',
        background: '#fff',
        display: 'flex',
        padding: '18px 32px',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <img
          alt=''
          src={menu}
          onClick={() => {
            uiContext.setSideBar(true)
          }}
        />
        <span>Tài khoản</span>
      </div>
      <img className={styles.searchIcon} alt='' src={search} />
    </div>
  )
}

export default AppBar
