import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

function KPIDetailCard({ title: headline, data }) {
  const [isNewTarget, setIsNewTarget] = useState(!headline)
  const [isAddTask, setIsAddTask] = useState(false)
  const [title, setTitle] = useState(headline)
  const [tasks, setTasks] = useState(data)
  const [newTask, setNewTask] = useState({
    name: '',
    weight: 0.0,
    min: 0,
    unit: '',
    done: 0
  })

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: '20px',
        border: '1px solid #cac4d0',
        boxSizing: 'border-box',
        width: '362px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
        backgroundColor: '#f5fafb'
      }}
    >
      <Box>
        {isNewTarget ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {' '}
            <TextField
              id='outlined-basic'
              label='Tên mục tiêu'
              variant='outlined'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              sx={{ maxWidth: '45%' }}
            ></TextField>
            <Button
              variant='outlined'
              onClick={() => {
                setIsNewTarget(false)
              }}
              sx={{ borderRadius: '12px' }}
            >
              Đồng ý
            </Button>
          </Box>
        ) : (
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        )}
      </Box>

      <Divider />
      {tasks.map((task, index) => (
        <>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            key={index}
          >
            <Box>
              <Typography variant='body2'>{task.name}</Typography>
              <Typography variant='body2'>
                Tối thiểu: {task.min} {task.unit}
              </Typography>
            </Box>
            <Box>
              <Typography variant='body2'>Đã làm:</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <IconButton
                  aria-label='minus'
                  size='small'
                  onClick={() => {
                    setTasks((prev) => {
                      if (prev[index].done === 0) return [...prev]
                      prev[index].done -= 1
                      return [...prev]
                    })
                  }}
                >
                  <RemoveCircleIcon fontSize='inherit' />
                </IconButton>
                <Typography variant='body2'>
                  {task.done} {task.unit}
                </Typography>
                <IconButton
                  aria-label='plus'
                  size='small'
                  onClick={() => {
                    setTasks((prev) => {
                      if (prev[index].done === prev[index].min) return [...prev]
                      prev[index].done += 1
                      return [...prev]
                    })
                  }}
                >
                  <AddCircleIcon fontSize='inherit' />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
      {isAddTask && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <TextField
            id='outlined-basic'
            label='Tên công việc'
            variant='outlined'
            value={newTask.name}
            onChange={(e) => {
              setNewTask({ ...newTask, name: e.target.value })
            }}
            sx={{ flex: '1 0 45%', maxWidth: '45%' }}
          />
          <TextField
            id='outlined-basic'
            label='Trọng số'
            variant='outlined'
            value={newTask.weight}
            onChange={(e) => {
              setNewTask({ ...newTask, weight: e.target.value })
            }}
            sx={{ flex: '1 0 45%', maxWidth: '45%' }}
          />
          <TextField
            id='outlined-basic'
            label='Đơn vị'
            variant='outlined'
            value={newTask.unit}
            onChange={(e) => {
              setNewTask({ ...newTask, unit: e.target.value })
            }}
            sx={{ flex: '1 0 45%', maxWidth: '45%' }}
          />
          <TextField
            id='outlined-basic'
            label='Mức tối thiểu'
            variant='outlined'
            value={newTask.min}
            onChange={(e) => {
              setNewTask({ ...newTask, min: e.target.value })
            }}
            sx={{ flex: '1 0 45%', maxWidth: '45%' }}
          />
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isAddTask && (
          <Button
            variant='outlined'
            size='medium'
            sx={{ fontSize: '0.75rem', borderRadius: '20px' }}
            onClick={() => {
              setIsAddTask(false)
              setNewTask({ name: '', weight: 0.0, min: 0, unit: '' })
            }}
          >
            Huỷ
          </Button>
        )}
        <Button
          variant='outlined'
          startIcon={<AddIcon />}
          size='medium'
          sx={{ fontSize: '0.75rem', borderRadius: '20px' }}
          onClick={() => {
            if (isAddTask) {
              setTasks([...tasks, newTask])
              setNewTask({ name: '', weight: 0.0, min: 0, unit: '' })
              setIsAddTask(false)
            } else setIsAddTask(true)
          }}
        >
          Thêm công viêc
        </Button>
      </Box>
    </Paper>
  )
}

export default KPIDetailCard
