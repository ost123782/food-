import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './EditProduct.scss'
import Header from '../../components/Header/Header'
import SidebarAdm from '../../components/SidebarAdm/SidebarAdm'
import getProducts from '../../store/getProducts'
import { observer } from 'mobx-react-lite'

interface Image {
  imagePreview: string,
  imageFile?: File
}

const EditProduct : React.FC = observer(() => {
    const navigate = useNavigate()
    const {productID} = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const [image, setImage] = useState<Image>({} as Image)
    const previewImg = (ev: any) => {
      setImage(img =>
        img = {
         imagePreview: URL.createObjectURL(ev.target.files[0]),
         imageFile: ev.target.files[0]
        }
         )
    }

    const appendChanges = async (e : React.SyntheticEvent) => {

        e.preventDefault()    

        const formData = {
          name: name,
          description: description,
          price: price,
          imageURL: image.imagePreview,
          productID: productID
        }
        

        if (Object.values(formData).indexOf('') > -1) {
          alert('Не введені всі текстові поля!')
          return
       }

        if (image.imageFile) {
          await axios.post('http://localhost:5000/products/uploadPhoto', {image: image.imageFile}, {
            headers: {
              'Content-Type': 'multipart/form-data'
          }
          }).then(res => {formData.imageURL = res.data; console.log(formData.imageURL)})
          .catch(() => {alert('Щось пішло не так...'); return})
        }



        await axios.put('http://localhost:5000/products/update', formData)
        .then(() => navigate('/admin/products/'))
        .catch(() => {alert('Щось пішло не так...'); return})
    }

    useEffect(() => {
        const getData = async () => {
          await getProducts.setFetchedProducts(productID)
          setName(name => name = getProducts.fetchedProducts[0].name)
          setDescription(description => description = getProducts.fetchedProducts[0].description)
          setPrice(price => price = getProducts.fetchedProducts[0].price)
          setImage(image => image = {imagePreview: getProducts.fetchedProducts[0].imageURL})
        }

        getData()
      }, [productID])
  return (
    <div className={'container'}>
        <Header />
        <SidebarAdm />
        {!image.imagePreview?.includes('.') ? 
        <img alt='previewImg' className='edit__image' src={image.imagePreview}/> 
        : <img alt='previewImg' className='edit__image' src={`http://localhost:5000/uploads/${image.imagePreview}`}/>}
        <form onSubmit={(e) => appendChanges(e)} className="edit__form">
            <input accept="image/*" onInput={(e: React.ChangeEvent<HTMLInputElement>) => {previewImg(e)}} className={'form__file'} type="file" />
            <label className="form__label">{getProducts.fetchedProducts[0]?.name}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form__input inp" />
            <label className="form__label">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form__input inp" />
            <label className="form__label">Price</label>
            <input value={price} onChange={(e) => setPrice(+e.target.value)} min={'0'} type="number" className="form__input inp" />
            <button className='btn'>Змінити продукт</button>
        </form>
    </div>
  )
})

export default EditProduct