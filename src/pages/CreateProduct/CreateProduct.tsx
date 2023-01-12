import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import SidebarAdm from "../../components/SidebarAdm/SidebarAdm"
import './CreateProduct.scss'

interface Image {
  imagePreview: string,
  imageFile: File
}

const CreateProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState<Image>({} as Image)
  const previewImg = (ev: any) => {
    setImage(img =>
      img = {
       imagePreview: URL.createObjectURL(ev.target.files[0]),
       imageFile: ev.target.files[0]
      }
       )
  }

  const appendProduct = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()


    const data = new FormData(e.target)
    data.append('image', image.imageFile)

    if (Object.values(Object.fromEntries(data)).indexOf('') > -1) {
      alert('Не введені всі текстові поля!')
      return
   }

    if (!image.imagePreview) {
      alert('Не вибрано зображення продукту!')
      return
    }

    

    await axios.post('http://localhost:5000/products/uploadPhoto', {image: data.get('image')}, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
    }).then(res => {data.append('imageURL', res.data)})
    .catch(() => {alert('Щось пішло не так...'); return})

    await axios.post('http://localhost:5000/products/create', Object.fromEntries(data))
    .then(() => navigate('/admin/products'))
    .catch(() => {alert('Щось пішло не так...'); return})

  }
  

  return (
    <div className="container">
        <Header />
        <main className="main">
            <div className="main__menu">
                <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => appendProduct(e)} className="menu__form">
                    {image.imagePreview ? <img alt='previewImg' src={image.imagePreview}/> : null}
                    <input accept="image/*" onInput={(e: React.ChangeEvent<HTMLInputElement>) => {previewImg(e)}} className={'form__file'} type="file" />

                    <label className="form__label">Name of product</label>
                    <input className="textInp" type="text" name='name' placeholder="Enter name of product" />

                    <label className="form__label">Price of product</label>
                    <input className="textInp" type="number" name="price" placeholder="Enter price of product" />

                    <label className="form__label">Description of product</label>
                    <textarea  className="textInp" name="description" placeholder="Enter description of product" />

                    <button type={'submit'} className="btn">Create product</button>
                </form>
            </div>
        </main>
        <SidebarAdm />
    </div>
  )
}

export default CreateProduct