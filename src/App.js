import React from 'react';
import CustomTable from './views/CustomTable/CustomTable.js';
import flag from './assets/img/flag.png';
import picture from './assets/img/Image.png'
import more from './assets/img/ellipsis-h.png'

const columns = [
  {
    header: 'picture',
  },
  {
    header: 'Product Information',
  },
  {
    header: 'KPI',
  },
  {
    header: 'Avg Price',
  },
  {
    header: 'Avg Profit',
  },
  {
    header: 'Avg Margin',
  },
  {
    header: 'Avg Daily Unit Sold',
  },
  {
    header: 'Avg Daily Revenue',
  },
  {
    header: 'Avg ROI',
  },
  {
    header: 'Avg Daily Rank',
  },
  {
    header: 'Reviews',
  },
  {
    header: 'Dimensions',
  },
  {
    header: 'more',
  },
]
const data = [
  [{
    header: 'picture',
    value: picture,
    
  },
  {
    header: 'Product Information',
    value: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and …',
    flag: flag,
    code : 'B078WLH42J'
  },
  {
    header: 'KPI',
    value: ''
  },
  {
    header: 'Avg Price',
    value: '$5.68'
  },
  {
    header: 'Avg Profit',
    value: '$5.68'
  },
  {
    header: 'Avg Margin',
    value: '29%'
    
  },
  {
    header: 'Avg Daily Unit Sold',
    value: '192'

  },
  {
    header: 'Avg Daily Revenue',
    value: '$32,813.36'

  },
  {
    header: 'Avg ROI',
    value: '9.3'

  },
  {
    header: 'Avg Daily Rank',
    value: '9.3'
  },
  {
    header: 'Reviews',
    value: '9.3'
  },
  {
    header: 'Dimensions',
    value: '9.3'
  },
  {
    header: 'more',
    value: more
  }],
  [{
    header: 'picture',
    value: picture,
    
  },
  {
    header: 'Product Information',
    value: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and …',
    flag: flag,
    code : 'B078WLH42J'
  },
  {
    header: 'KPI',
    value: ''
  },
  {
    header: 'Avg Price',
    value: '$5.68'
  },
  {
    header: 'Avg Profit',
    value: '$5.68'
  },
  {
    header: 'Avg Margin',
    value: '29%'
    
  },
  {
    header: 'Avg Daily Unit Sold',
    value: '192'

  },
  {
    header: 'Avg Daily Revenue',
    value: '$32,813.36'

  },
  {
    header: 'Avg ROI',
    value: '9.3'

  },
  {
    header: 'Avg Daily Rank',
    value: '9.3'
  },
  {
    header: 'Reviews',
    value: '9.3'
  },
  {
    header: 'Dimensions',
    value: '9.3'
  },
  {
    header: 'more',
    value: more
  }],
  [{
    header: 'picture',
    value: picture,
    
  },
  {
    header: 'Product Information',
    value: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and …',
    flag: flag,
    code : 'B078WLH42J'
  },
  {
    header: 'KPI',
    value: ''
  },
  {
    header: 'Avg Price',
    value: '$5.68'
  },
  {
    header: 'Avg Profit',
    value: '$5.68'
  },
  {
    header: 'Avg Margin',
    value: '29%'
    
  },
  {
    header: 'Avg Daily Unit Sold',
    value: '192'

  },
  {
    header: 'Avg Daily Revenue',
    value: '$32,813.36'

  },
  {
    header: 'Avg ROI',
    value: '9.3'

  },
  {
    header: 'Avg Daily Rank',
    value: '9.3'
  },
  {
    header: 'Reviews',
    value: '9.3'
  },
  {
    header: 'Dimensions',
    value: '9.3'
  },
  {
    header: 'more',
    value: more
  }]

];

function App() {
  return (
    <div style={{margin:'2%'}}>
    <CustomTable
      columns = {columns}
      data = {data}
    />
    </div>
  );
}

export default App;
