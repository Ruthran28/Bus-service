import React, { useEffect,useState } from 'react'
import {
Icon
} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Businformation = () => {
  const use=useNavigate()
  const [status, setstatus] = useState([])
  const [area, setarea] = useState('')


     useEffect(()=>{
        axios.get('http://localhost:2718/api/get',{ToArea:area}).then(status=>setstatus(status.data)).catch(err=>console.log(err))
     },[status])
     console.log(area);

  return (
   <div className=''>
   
   
   
    <div className=" relative w-full lg:max-w-sm  ml-[75%] mt-[2%] " >
            <select  
                className="w-full p-2.5 text-black bg-gray-200 r rounded-md  border border-gray-500 shadow-sm " value={area} onChange={(e)=>setarea(e.target.value)}> 
                <option>select...</option>
                <option   value="ooty">Madurai to ooty</option>
                <option  value="karaikudi">Madurai to Karaikudi</option>
                <option value="Chennai">Madurai to Chennai </option>
                <option value="rajapalayam">Madurai to Rajapalam</option>
                <option value="theni">Madurai to theni</option>
            </select>
            </div>
         
            <div className=' text-center  table-auto my-10 '>
            <table className=' w-[50%] shadow-md rounded  text-black mx-[25%]'>
              <thead>
             <tr className='border-b hover:bg-blue-300'>
            <th className='px-5 py-5'><h1>Bus name  </h1></th>
            <th className='px-5 py-5'><h1>Bus number</h1></th>
            <th className='px-5 py-5'><h1>Bus status</h1></th>
            <th className='px-5 py-5'><h1>TO Area </h1></th>
             </tr>
             </thead>
             <tbody>{
              status.map(user=>{
                return( 
                    <tr className='border-b hover:bg-blue-300'>
                <td className='py-5 px-3 min-w-24 max-w-40'>{user.Busname}</td>
                <td className='py-5 px-4'>{user.BusNumber}</td>
                <td className='py-1 px-4'>{
                  user.busstatus? <button className='w-[40%] h-[70%] p-2 m-4 bg-green-600 rounded  hover:bg-green-400' > Inside</button>
                  : <button className='w-[40%] h-[70%] p-2 m-4 bg-red-400 text-white rounded  hover:bg-red-400 '  >Outside</button>

                 
                }</td>
                <td className='py-1 px-4'>{user.ToArea}</td>
                {console.log(user.busstatus)}
              </tr>)
              })


                          
              }
               <tr className='border-b'>
              <td></td>
              <td></td>
              <td></td>
              <td>  
              <button className='w-28 h-12 m-4 bg-green-600 rounded  hover:bg-green-400 '  onClick={()=>use('/feedback')}  > <Icon name='bus'/>add bus</button>

              </td>
           
             </tr>
           
             </tbody>
            
            </table>
            </div>
      
            </div>
       
       
            
  
  )
}

export default Businformation