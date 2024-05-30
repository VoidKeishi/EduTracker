export const user = {
  gakkusei: {
    email: 'student@gmail.com',
    password: '123456',
    shigoto: 'Sinh viên',
    university: 'HUST'
  },
  sensei: {
    email: 'lecturer@gmail.com',
    password: '123456',
    shigoto: 'Giảng viên',
    university: 'HUST'
  }
}

export const kpi = [
  {
    name: 'Giảng dạy',
    targets: [
      {
        name: 'OOP',
        tasks: [
          {
            name: 'Giảng bài',
            weight: 0.7,
            unit: 'tiết',
            min: 24,
            done: 12
          },
          {
            name: 'Chấm bài',
            weight: 0.3,
            unit: 'Lớp',
            min: 5,
            done: 2
          }
        ]
      },
      {
        name: 'MMT',
        tasks: [
          {
            name: 'Giảng bài',
            weight: 0.7,
            unit: 'tiết',
            min: 24,
            done: 6
          },
          {
            name: 'Chấm bài',
            weight: 0.3,
            unit: 'Lớp',
            min: 5,
            done: 2
          }
        ]
      }
    ],
    done: 56.25,
    predictTime: 90
  },
  {
    name: 'Nghiên cứu',
    targets: [
      {
        name: 'AI',
        tasks: [
          {
            name: 'Nghiên cứu PhoBert',
            weight: 0.7,
            unit: 'giờ',
            min: 24,
            done: 12
          },
          {
            name: 'Train model',
            weight: 0.3,
            unit: '%',
            min: 60,
            done: 20
          }
        ]
      },
      {
        name: 'Paper',
        tasks: [
          {
            name: 'Giảng bài',
            weight: 0.7,
            unit: 'tiết',
            min: 24,
            done: 6
          },
          {
            name: 'Chấm bài',
            weight: 0.3,
            unit: 'Lớp',
            min: 5,
            done: 2
          }
        ]
      }
    ],
    done: 56.25,
    predictTime: 90
  },
  {
    name: 'Phục vụ',
    targets: [
      {
        name: 'Từ thiện',
        weight: 0.3,
        unit: 'Giờ',
        min: 24,
        done: 10
      },
      {
        name: 'Công ích',
        weight: 0.3,
        unit: 'Giờ',
        min: 24,
        done: 8
      },
      {
        name: 'Tình nguyện',
        weight: 0.3,
        unit: 'Giờ',
        min: 24,
        done: 6
      }
    ],
    done: 33.33,
    predictTime: 32
  }
]
