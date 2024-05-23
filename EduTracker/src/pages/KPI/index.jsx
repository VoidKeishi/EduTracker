import { useContext } from 'react'
import NavigationDrawer from '../../component/NavigationDrawer/NavigationDrawer'
import TopBar from '../../component/TopBar/TopBar'
import { UIContext } from '../../context/UIContext'

import styles from './KPI.module.css'
import DonutBar from '../../component/DonutBar/DonutBar'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import teachIcon from '../../assets/teach.svg'
import researchIcon from '../../assets/research.svg'
import volunteerIcon from '../../assets/volunteer.svg'
const KPI = () => {
  const uiContext = useContext(UIContext)
  uiContext.setCurrentPage(1)
  return (
    <div className={styles.kpi}>
      <NavigationDrawer currentPage={uiContext.currentPage}></NavigationDrawer>
      <TopBar></TopBar>
      <div className={styles.tinKpi}>
        <div className={styles.stackedCard2}>
          <div className={styles.content}>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                <div className={styles.tThin60Container}>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`OOP             `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`MMT            `}</span>
                    <span className={styles.span}>6</span>
                    <span className={styles.span}>0%</span>
                  </p>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`CDTL            `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.groupParent}>
                  <DonutBar />
                  <div className={styles.cTnhHonContainer}>
                    <span className={styles.cTnhHonContainer1}>
                      <p className={styles.cTnhHon}>{`Ước tính hoàn thành `}</p>
                      <p className={styles.cTnhHon}>90 ngày</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.primaryActionWrapper}>
              <Button
                variant='outlined'
                style={{ borderRadius: '50px', textTransform: 'capitalize' }}
              >
                Chi tiết
              </Button>
            </div>
            <div className={styles.mediaTextContent2}>
              <div className={styles.header}>
                <div className={styles.iconButton} />
                <div className={styles.classLessonStreamlineCoreParent}>
                  <img
                    className={styles.classLessonStreamlineCoreIcon}
                    alt=''
                    src={teachIcon}
                  />
                  <div className={styles.title}>Giảng dạy</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.background}>
            <div className={styles.stateLayer1} />
          </div>
        </div>
        <div className={styles.stackedCard1}>
          <div className={styles.content}>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                <div className={styles.tThin60Container}>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`AI             `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`Paper      `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.groupParent}>
                  <DonutBar />
                  <div className={styles.cTnhHonContainer}>
                    <span className={styles.cTnhHonContainer1}>
                      <p className={styles.cTnhHon}>{`Ước tính hoàn thành `}</p>
                      <p className={styles.cTnhHon}>5 ngày</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.primaryActionWrapper}>
              <Button
                variant='outlined'
                style={{ borderRadius: '50px', textTransform: 'capitalize' }}
              >
                Chi tiết
              </Button>
            </div>
            <div className={styles.mediaTextContent2}>
              <div className={styles.header}>
                <div className={styles.iconButton} />
                <div className={styles.classLessonStreamlineCoreParent}>
                  <img
                    className={styles.classLessonStreamlineCoreIcon}
                    alt=''
                    src={researchIcon}
                  />
                  <div className={styles.title}>Nghiên cứu</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.background}>
            <div className={styles.stateLayer1} />
          </div>
        </div>
        <div className={styles.stackedCard}>
          <div className={styles.content}>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                <div className={styles.tThin60Container}>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`Từ thiện      `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`Công ích      `}</span>
                    <span className={styles.span}>6</span>
                    <span className={styles.span}>0%</span>
                  </p>
                  <p className={styles.cTnhHon}>
                    <span className={styles.tThin}>{`Dọn dẹp       `}</span>
                    <span className={styles.span}>60%</span>
                  </p>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.groupParent}>
                  <DonutBar />
                  <div className={styles.cTnhHonContainer}>
                    <span className={styles.cTnhHonContainer1}>
                      <p className={styles.cTnhHon}>{`Ước tính hoàn thành `}</p>
                      <p className={styles.cTnhHon}>32 ngày</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.primaryActionWrapper}>
              <Button
                variant='outlined'
                style={{ borderRadius: '50px', textTransform: 'capitalize' }}
              >
                Chi tiết
              </Button>
            </div>
            <div className={styles.mediaTextContent2}>
              <div className={styles.header}>
                <div className={styles.iconButton} />
                <div className={styles.classLessonStreamlineCoreParent}>
                  <img
                    className={styles.classLessonStreamlineCoreIcon}
                    alt=''
                    src={volunteerIcon}
                  />
                  <div className={styles.title}>Phục vụ</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.background}>
            <div className={styles.stateLayer1} />
          </div>
        </div>

        <div className={styles.tinKpi1}>Tiến độ KPI</div>
      </div>
      <div className={styles.extendedFab}>
        <Button
          component='label'
          role={undefined}
          variant='contained'
          tabIndex={-1}
          startIcon={<AddCircleOutlineIcon />}
        >
          Thêm KPI
        </Button>
      </div>
    </div>
  )
}

export default KPI
