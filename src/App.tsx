// App.tsx

'use client';

import React, { useState } from 'react';
import './App.css'; // 引入樣式文件
import HomePage from './app/components/HomePage'; // 引入首頁組件

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
