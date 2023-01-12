import './SidebarAdm.scss'
import sidebar from '../../store/sidebar'
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const SidebarAdm = observer(() => {
  return (
    <div className={sidebar.isOpen ? 'main__sidebar active' : 'main__sidebar'}>
        <nav className='sidebar__nav' onClick={() => sidebar.setOpen(false)}>
            <ul className='sidebar__list'>
                <p className="sidebar__close" onClick={() => sidebar.setOpen(false)} >X</p>
                <li className='list__item'><Link to={'/admin'}>Admin</Link></li>
                <li className='list__item'><Link to={'/admin/products'}>Products</Link></li>
                <li className='list__item'><Link to={'/admin/calls'}>Calls</Link></li>
                <li className='list__item'>Orders</li>
            </ul>
        </nav>
    </div>
  )
}
)

export default SidebarAdm