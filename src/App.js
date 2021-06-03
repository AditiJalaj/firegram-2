
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import {useState} from 'react'

function App() {

const [selectedImg,setSelectedImg]=useState(null)
const [modal,setModal]=useState(false)

 return (
   <>
   <Title/>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg} setModal={setModal}/>
   {modal===true && <Modal selectedImg={selectedImg} setModal={setModal} /> }
   </>
  );
}

export default App;
