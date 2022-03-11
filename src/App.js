import './App.css';
import Header from './componants/Header';
import CollectionCard from './componants/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios';
import PunkList from './componants/PunkList';
import Main from './componants/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setselectedPunk] = useState(0)
  useEffect(() => {
    try {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xC1718eEd46A4bf097D2149af99C95916194266D7&order_direction=asc')

       //console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  } catch (error) {
    throw new Error(error)
  }
  }, [])
  return ( <div className='app'>
    <Header />
    {
      punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setselectedPunk={setselectedPunk} />
        </>
      )
    }
   
  </div>
);
}

export default App;
