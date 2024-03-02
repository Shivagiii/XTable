
import { tab } from '@testing-library/user-event/dist/tab';
import './App.css';
import { useState } from 'react';

function App() {

  const [table,setTable]=useState([]);
  const newData =
  [
      { date: "2022-09-01", views: 100, article: "Article 1" }, 
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" }, 
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" } 
  ]
  const [newDat,setNewDat] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" }, 
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" }, 
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" } 
])
  console.log(newData)
  function sortByViews(){
    setNewDat(newData.sort((a,b) => {
      if(a.views === b.views){
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1-date2;
      }
    else
    return b.views-a.views
    }))
    console.log(newDat)
  }
  function sortByDate(){
    setNewDat(newData.sort((a,b) => {
      if(a.date !== b.date){
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1-date2;
      }
    else
    return b.views-a.views
    }))
    console.log(newDat)
  }
  
  return (
    <div className="App">
     <h1>Date and Views Table</h1>
     <button onClick={sortByDate}>Sort by Date</button>
     <button onClick={sortByViews}>Sort by Views</button>
     <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Views</th>
        <th>Article</th>
      </tr>
      </thead>
      <tbody>
        {newDat.map((data) => (
        <tr>
        <td>{data.date}</td>
        <td>{data.views}</td>
        <td>{data.article}</td>
        </tr>
        ))
        //console.log()
        }
        
      </tbody>
     </table>
    </div>
  );
}

export default App;
