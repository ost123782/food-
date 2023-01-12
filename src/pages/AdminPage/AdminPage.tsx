import Header from '../../components/Header/Header'
import SidebarAdm from '../../components/SidebarAdm/SidebarAdm'
import './AdminPage.scss'

const AdminPage : React.FC = () => {
  return (
    <div className="container">
        <Header />
        <main className="main">
            <h1>Welcome to Admin Page!</h1>
            <p>Lorem ispum</p>
        </main>
        <SidebarAdm />
    </div>
  )
}

export default AdminPage