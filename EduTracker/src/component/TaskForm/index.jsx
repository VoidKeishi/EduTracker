import styles from './TaskForm.module.css'
function TaskForm() {
  return (
    <div className={styles.input}>
      <TextField
        id='outlined-basic'
        label='Tên công việc'
        variant='outlined'
        sx={{ flex: '1 0 45%', maxWidth: '45%' }}
      />
      <TextField
        id='outlined-basic'
        label='Trọng số'
        variant='outlined'
        sx={{ flex: '1 0 45%', maxWidth: '45%' }}
      />
      <TextField
        id='outlined-basic'
        label='Đơn vị'
        variant='outlined'
        sx={{ flex: '1 0 45%', maxWidth: '45%' }}
      />
      <TextField
        id='outlined-basic'
        label='Mức tối thiểu'
        variant='outlined'
        sx={{ flex: '1 0 45%', maxWidth: '45%' }}
      />
    </div>
  )
}

export default TaskForm
