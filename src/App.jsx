import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './component/NavBar/NavBar'

import Stream from './component/Stream/Stream';
import Iframe from './component/Iframe/Iframe';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemList from './component/ItemListContainer/ItemList';
import Item from './component/Item/Item';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Stream />
      <Iframe />
      <Item />
      <ItemList />      
      <ItemDetailContainer />
    </div>
  )
}

export default App
