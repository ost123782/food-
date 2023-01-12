import './PopupMain.scss'
import {observer} from "mobx-react-lite";
import popup from "../../store/popup";
import React from 'react';
import axios from 'axios';


const PopupMain : React.FC = observer(() => {

    const submitCall = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        if(Object.values(Object.fromEntries(formData)).indexOf('') > -1) {
            alert('Не введені всі текстові поля!')
            return
        }

        console.log(Object.fromEntries(formData))

        axios.post('http://localhost:5000/calls/add/', Object.fromEntries(formData))
        .then(() => popup.setOpen(false))
        .catch(() => alert('Something went wrong'))
    }

  return (
    <div className={popup.isOpen ? 'popup' : 'popup closed'}>
        <div className="popup-menu">
            <p onClick={() => popup.setOpen(false)} className="popup-close" >X</p>
            <p className="popup-header">
                Введіть свій номер та ім'я - ми обов'язково передзвонимо!
            </p>
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => submitCall(e)} className="popup-form">
                <label>Номер телефону</label>
                <input
                    name="phone_number"
                    placeholder="Введіть свій номер телефону"
                    className="inp"
                    type="number"
                />
                <label>Ім'я</label>
                <input name='user_name' placeholder="Введіть своє ім'я" className="inp" type="text" />
                <button type='submit' className="btn">Зв'язатись</button>
            </form>
        </div>
    </div>
  )
})

export default PopupMain