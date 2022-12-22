import './SidebarAdm.scss'
import sidebar from '../../store/sidebar'
import {observer} from "mobx-react-lite";

const SidebarAdm = observer(() => {
  return (
    <div className={sidebar.isOpen ? 'main__sidebar active' : 'main__sidebar'}>
        <nav className='sidebar__nav'>
            <ul className='sidebar__list'>
                <p className="sidebar__close" onClick={() => sidebar.setOpen(false)} >X</p>
                <li className='list__item'>Products</li>
                <li className='list__item'>Orders</li>
            </ul>
        </nav>
    </div>
  )
}
)

export default SidebarAdm