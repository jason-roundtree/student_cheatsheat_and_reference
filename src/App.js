import React from 'react'
import Header from './Header'
import TopicSection from './TopicSection'
import data from './data'
// import './App.css'

function App() {
  return (
    <div className="">
      <Header />

      <main>
        {data.map(section => {
          return (
            <TopicSection 
              section={section}
              key={section.id}
            />
          )
        })}
      </main>
      
    </div>
  );
}

export default App;
