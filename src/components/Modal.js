const Modal = ({selectedImg,setModal}) => {
    return ( <>
        <div className='backdrop'>
        
        <button onClick={()=>{
            setModal(false)
        }}> ESC</button>
        <img className="modal-img" src={selectedImg}></img>
        
        </div>
        </> );
}
 
export default Modal;