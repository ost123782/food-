import Header from '../../components/Header/Header'
import SidebarAdm from '../../components/SidebarAdm/SidebarAdm'
import './AdminPage.scss'

const AdminPage : React.FC = () => {
  return (
    <main className="main">
        <Header />
        <SidebarAdm />
    </main>
  )
}

export default AdminPage