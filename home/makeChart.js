import Chart from 'chart.js/auto'

const datas = {
  '2010': [
    {
      semester: 2010.1, result: { done: '50', notDone: '37'}
    },
    {
      semester: 2010.2, result: { done: '60', notDone: '13' }
    }
  ],
  '2011': [
    {
      semester: 2011.1, result: { done: '70', notDone: '47'}
    },
    {
      semester: 2011.2, result: { done: '100', notDone: '25' }
    }
  ],
  '2012': [
    {
      semester: 2012.1, result: { done: '90', notDone: '37'}
    },
    {
      semester: 2012.2, result: { done: '45', notDone: '40' }
    }
  ],
  '2013': [
    {
      semester: 2013.1, result: { done: '50', notDone: '37'}
    },
    {
      semester: 2013.2, result: { done: '67', notDone: '33' }
    }
  ],
  '2014': [
    {
      semester: 2014.1, result: { done: '59', notDone: '33'}
    },
    {
      semester: 2014.2, result: { done: '100', notDone: '13' }
    }
  ],
  '2015': [
    {
      semester: 2015.1, result: { done: '90', notDone: '35'}
    },
    {
      semester: 2015.2, result: { done: '66', notDone: '43' }
    }
  ],
  '2016': [
    {
      semester: 2016.1, result: { done: '56', notDone: '31'}
    },
    {
      semester: 2016.2, result: { done: '45', notDone: '30' }
    }
  ],
  '2017': [
    {
      semester: 2017.1, result: { done: '56', notDone: '37'}
    },
    {
      semester: 2017.2, result: { done: '60', notDone: '13' }
    }
  ],
  '2018': [
    {
      semester: 2018.1, result: { done: '70', notDone: '35'}
    },
    {
      semester: 2018.2, result: { done: '100', notDone: '10' }
    }
  ],
  '2019': [
    {
      semester: 2019.1, result: { done: '89', notDone: '26'}
    },
    {
      semester: 2019.2, result: { done: '79', notDone: '13' }
    }
  ],
  '2020': [
    {
      semester: 2020.1, result: { done: '77', notDone: '37'}
    },
    {
      semester: 2020.2, result: { done: '87', notDone: '43' }
    }
  ],
  '2021': [
    {
      semester: 2021.1, result: { done: '78', notDone: '35'}
    },
    {
      semester: 2021.2, result: { done: '60', notDone: '13' }
    }
  ],
  '2022': [
    {
      semester: 2022.1, result: { done: '50', notDone: '37'}
    },
    {
      semester: 2022.2, result: { done: '60', notDone: '13' }
    }
  ],
  '2023': [
    {
      semester: 2023.1, result: { done: '90', notDone: '37'}
    },
    {
      semester: 2023.2, result: { done: '89', notDone: '33' }
    }
  ],
  '2024': [
    {
      semester: 2024.1, result: { done: '100', notDone: '10'}
    },
    {
      semester: 2024.2, result: { done: '100', notDone: '15' }
    }
  ],
}

const realData = [
  {
    semester: 2022.1, result: { done: '50', notDone: '37'}
  },
  {
    semester: 2022.2, result: { done: '60', notDone: '13' }
  },
  {
    semester: 2023.1, result: { done: '90', notDone: '37'}
  },
  {
    semester: 2023.2, result: { done: '89', notDone: '33' }
  },
  {
    semester: 2024.1, result: { done: '100', notDone: '10'}
  },
  {
    semester: 2024.2, result: { done: '100', notDone: '15' }
  }
]

const myChart = new Chart(
  document.getElementById('kpiChart'),
  {
    type: 'bar',
    data: {
      labels: realData.map(row => row.semester),
      datasets: [
        {
          label: 'Hoàn Thành',
          data: realData.map(row => row.result.done),
          borderColor: "#1E6A4F",
          backgroundColor: "#1E6A4F"
        },
        {
          label: 'Không Hoàn Thành',
          data: realData.map(row => row.result.notDone),
          borderColor: "#8B4A63",
          backgroundColor: "#8B4A63"
        }
      ]
    },
    options: {
      maintainAspectRatio: false
    }
  }
);

myChart.render()
