import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState(["sumit","vinnet","boby"])
  return (
    <div id="main">
       <ol key={"relativeList"} id='relativeList'>
             {list.map((name,indx)=>{
              return <li key={`relativeListItem${indx}`} id={`relativeListItem${indx}`}>{name}</li>
             })}
              </ol>
    </div>
  )
}

export default App
