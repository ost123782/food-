import React, { useEffect } from 'react'
import SidebarAdm from '../../components/SidebarAdm/SidebarAdm'
import Header from '../../components/Header/Header'
import GetCalls from '../../store/getCalls'
import { observer } from 'mobx-react-lite'
import axios from 'axios'

const AdminCalls : React.FC = observer(() => {

    useEffect(() => {
        GetCalls.setFetchedCalls()
    }, [])

    const deleteCall = async (id : number) => {
        console.log('delete')
        GetCalls.deleteFetchedCall(id)
        await axios.delete('http://localhost:5000/calls/delete', {data : {callID: id}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div className={'container'}>
        <Header />
        <SidebarAdm />
        <table>
            <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Телефон</th>
                </tr>
            </thead>
            <tbody>
                {GetCalls.fetchedCalls.map(call => {
                    return <tr key={call.callID}>
                        <td>{call.name}</td>
                        <td>{call.phoneNumber}</td>
                        <td><button onClick={() => deleteCall(call.callID)} className='btn'>Зроблено дзвінок</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
})

export default AdminCalls