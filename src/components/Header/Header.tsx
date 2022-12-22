import { Link, useLocation } from 'react-router-dom'
import popup from "../../store/popup"
import sidebar from "../../store/sidebar"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Header.scss'
import {observer} from "mobx-react-lite"

const Header : React.FC = observer(() => {
  const {pathname} = useLocation()



  return (
    <header className="header">
      <Link to="/">
          <h1 className="header-logo">Fresh vegetables</h1>
      </Link>
      <nav className="header-nav">
          {!pathname.includes('/admin') ?
              <button onClick={() => popup.setOpen(true)} className="btn">Контакти</button>
              : <button onClick={() => sidebar.setOpen(true)} className="btn">Sidebar Admin</button>
          }

          {pathname === '/products' || pathname.includes('/admin') ?
          <Link to={'/'} className="btn">
              Додому
          </Link>
          :
          <Link to={'/products'} className="btn">
              Замовити
          </Link>}
          {!pathname.includes('/admin') ?
              <div className="header-cart">
                  <i className="bi bi-cart"></i>
                  <p>x 0</p>
              </div>
              :
              ''
          }

      </nav>
    </header>
  )
}

)

export default Header