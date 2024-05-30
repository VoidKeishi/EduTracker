import styles from './NavigationDrawer.module.css'
import menuIcon from '../../assets/Menu open.svg'
import taskIcon from '../../assets/Group 10.svg'
import kpiIcon from '../../assets/graph-bar-increase--up-product-performance-increase-arrow-graph-business-chart.svg'
import settingIcon from '../../assets/setting.svg'
import accountIcon from '../../assets/account.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UIContext } from '../../context/UIContext'

const NavigationDrawer = ({ currentPage }) => {
  const navigate = useNavigate()
  const uiContext = useContext(UIContext)

  return (
    <div
      style={uiContext.sideBar ? {} : { display: 'none', width: '100%' }}
      className={styles.navigationDrawer}
    >
      <div
        className={styles.headline}
        onClick={() => {
          uiContext.setSideBar(false)
        }}
      >
        <img className={styles.menuOpenIcon} alt='' src={menuIcon} />
      </div>
      <div
        className={
          currentPage == 1 ? styles.sectionHeader2 : styles.sectionHeader3
        }
        onClick={() => {
          navigate('/kpi')
        }}
      >
        <div className={styles.graphBarIncreaseUpProduct}>
          <img
            className={styles.graphBarIncreaseUpProductIcon}
            alt=''
            src={kpiIcon}
          />
        </div>
        <div className={styles.kpi}>Quản lý KPI</div>
      </div>
      <div
        className={
          currentPage == 2 ? styles.sectionHeader2 : styles.sectionHeader3
        }
        onClick={() => {
          navigate('/task')
        }}
      >
        <div className={styles.sectionHeader3Inner}>
          <img
            className={styles.graphBarIncreaseUpProductIcon}
            alt=''
            src={taskIcon}
          />
        </div>
        <div className={styles.kpi}>Công việc</div>
      </div>
      <div
        className={
          currentPage == 3 ? styles.sectionHeader2 : styles.sectionHeader3
        }
        onClick={() => {
          navigate('/account')
        }}
      >
        <div className={styles.newsmode}>
          <img
            className={styles.graphBarIncreaseUpProductIcon}
            alt=''
            src={accountIcon}
          />
        </div>
        <div className={styles.kpi}>Tài khoản</div>
      </div>
      <div
        className={
          currentPage == 4 ? styles.sectionHeader2 : styles.sectionHeader3
        }
        onClick={() => {
          navigate('/setting')
        }}
      >
        <div className={styles.settings}>
          <img
            className={styles.graphBarIncreaseUpProductIcon}
            alt=''
            src={settingIcon}
          />
        </div>
        <div className={styles.kpi}>Cài đặt</div>
      </div>
    </div>
  )
}

export default NavigationDrawer
