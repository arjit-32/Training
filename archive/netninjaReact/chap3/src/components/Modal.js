import './Modal.css'
import ReactDOM from 'react-dom'
export default function Modal(props) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                color:"red",
                border:"4px solid",
                borderColor:"red"
                }}>
              {props.children}
              <button onClick={props.handleModal}>X</button>
            </div>
        </div>
    ), document.body)
}
