import React from 'react';
import Navbar from './Components/Navbar'
import CaretRight from './assets/caret_right.svg'
import Metrics from './Components/MetricCard';
import DivisionCard from './Components/DivisionCard';
import ModuleCard from './Components/Module';
import EnhancedTable from './Components/Rtable';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='bread-crumbs'>
        <div className='crumbs'>
          <span>
            Divisions
          </span>
          <span>
            <img src={CaretRight} alt='' />
          </span>
          <span>
            Module
          </span>
        </div>
      </div>
      <div className='metrics'>
        <Metrics/>
      </div>
      <div className='content'>
        <section className='left-section'>
          <DivisionCard/>
          <ModuleCard/>
        </section>
        <section className='right-section'>
          <EnhancedTable/>
        </section>
      </div>
    </div>
  );
}

export default App;
