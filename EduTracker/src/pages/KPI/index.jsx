import { useContext } from 'react'
import NavigationDrawer from '../../component/NavigationDrawer/NavigationDrawer'
import TopBar from '../../component/TopBar/TopBar'
import { UIContext } from '../../context/UIContext'

import styles from './KPI.module.css'
import DonutBar from '../../component/DonutBar/DonutBar'
import { Button, Container } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import teachIcon from '../../assets/teach.svg'
import researchIcon from '../../assets/research.svg'
import volunteerIcon from '../../assets/volunteer.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
const KPI = () => {
  const uiContext = useContext(UIContext)
  uiContext.setCurrentPage(1)
  const appContext = useContext(AppContext)
  const { kpiData } = appContext
  return (
    <Container maxWidth='mobile' style={{ padding: '0px' }}>
      <div className={styles.kpi}>
        <NavigationDrawer
          currentPage={uiContext.currentPage}
        ></NavigationDrawer>
        <TopBar></TopBar>
        <div className={styles.tinKpi}>
          <div className={styles.stackedCard2}>
            <div className={styles.content}>
              <div className={styles.progressContainer}>
                <div className={styles.progress}>
                  <div
                    className={styles.tThin60Container}
                    style={{ width: '100px' }}
                  >
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        MMT
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        {' '}
                        25%
                      </p>
                    </p>
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        Giảng dạy
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        15%
                      </p>
                    </p>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.groupParent}>
                    <DonutBar value={'20'} />
                    <div className={styles.cTnhHonContainer}>
                      <span className={styles.cTnhHonContainer1}>
                        <p
                          className={styles.cTnhHon}
                        >{`Ước tính hoàn thành `}</p>
                        <p className={styles.cTnhHon}>90 ngày</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.primaryActionWrapper}>
                <Link to={'detail'}>
                  <Button
                    variant='outlined'
                    style={{
                      borderRadius: '50px',
                      textTransform: 'capitalize'
                    }}
                  >
                    Chi tiết
                  </Button>
                </Link>
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
                  <div
                    className={styles.tThin60Container}
                    style={{ width: '100px' }}
                  >
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        AI
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        {' '}
                        25%
                      </p>
                    </p>
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        Model
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        25%
                      </p>
                    </p>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.groupParent}>
                    <DonutBar value={'25'} />
                    <div className={styles.cTnhHonContainer}>
                      <span className={styles.cTnhHonContainer1}>
                        <p
                          className={styles.cTnhHon}
                        >{`Ước tính hoàn thành `}</p>
                        <p className={styles.cTnhHon}>120 ngày</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.primaryActionWrapper}>
                <Link to={'detail'}>
                  <Button
                    variant='outlined'
                    style={{
                      borderRadius: '50px',
                      textTransform: 'capitalize'
                    }}
                  >
                    Chi tiết
                  </Button>
                </Link>
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
                  <div
                    className={styles.tThin60Container}
                    style={{ width: '100px' }}
                  >
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        Từ thiện
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        {' '}
                        25%
                      </p>
                    </p>
                    <p
                      className={styles.cTnhHon}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p className={styles.tThin} style={{ margin: '0px' }}>
                        Công ích
                      </p>
                      <p className={styles.span} style={{ margin: '0px' }}>
                        15%
                      </p>
                    </p>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.groupParent}>
                    <DonutBar value={'20'} />
                    <div className={styles.cTnhHonContainer}>
                      <span className={styles.cTnhHonContainer1}>
                        <p
                          className={styles.cTnhHon}
                        >{`Ước tính hoàn thành `}</p>
                        <p className={styles.cTnhHon}>30 ngày</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.primaryActionWrapper}>
                <Link to={'detail'}>
                  <Button
                    variant='outlined'
                    style={{
                      borderRadius: '50px',
                      textTransform: 'capitalize'
                    }}
                  >
                    Chi tiết
                  </Button>
                </Link>
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
          <Link to='add'>
            <Button
              component='label'
              variant='contained'
              tabIndex={-1}
              startIcon={<AddCircleOutlineIcon />}
              style={{
                borderRadius: '20px',
                textTransform: 'capitalize',
                fontSize: '1rem'
              }}
            >
              Thêm KPI
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default KPI
