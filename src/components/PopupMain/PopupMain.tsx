import './PopupMain.scss'
import {observer} from "mobx-react-lite";
import popup from "../../store/popup";


const PopupMain : React.FC = observer(() => {
  return (
    <div className={popup.isOpen ? 'popup' : 'popup closed'}>
        <div className="popup-menu">
            <p onClick={() => popup.setOpen(false)} className="popup-close" >X</p>
            <p className="popup-header">
                Введіть свій номер та ім'я - ми обов'язково передзвонимо!
            </p>
            <form className="popup-form">
                <label>Номер телефону</label>
                <input
                    placeholder="Введіть свій номер телефону"
                    className="inp"
                    type="text"
                />
                <label>Ім'я</label>
                <input placeholder="Введіть своє ім'я" className="inp" type="text" />
                <button className="btn">Зв'язатись</button>
            </form>
        </div>
    </div>
  )
})

export default PopupMain