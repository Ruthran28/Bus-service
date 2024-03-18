import {React,useState }from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import logo from './Larana, Inc..png'
import axios from 'axios'
const Feedback = () => {
 const use=useNavigate()
 const [Busname, setBusname] = useState('')
 const [BusNumber, setBusNumber] = useState('')
 const [ToArea, setToArea] = useState('')


 const addbus=()=>{
  axios.post('http://localhost:2718/api/addbus',{BusNumber,Busname,ToArea}).then(res=>{
    console.log(res.data);
    if(res.data.message === 'send'){
      use('/information')
      alert('add sucessfully')
    }else{
      alert('bus already exist')
    }
  })
  
 } 
  return (
    <div>
  <div class="min-h-screen bg-gray-100 flex flex-col py-16">
    <button className='bg-green-600 w-24 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-400 mx-64' onClick={()=>use('/information')}> <Icon name='chevron circle left'/>back</button>
  <div class="relative mx-auto">
    <div class="relative px-4 py-10 bg-white mx-8  shadow rounded-3xl sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div class="h-14 w-28 rounded-full flex justify-center items-center "><img src={logo} alt='bus loho'/></div>
          <div class="block pl-2 font-semibold text-xl  text-gray-700">
            <h2 class="leading-relaxed text-green-500">Goverment Bus Service</h2>
            <p class="text-sm text-gray-500 font-normal ">tamilnadu bus service is best travel experience</p>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Bus Name</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="enter Bus name" value={Busname} onChange={(e)=>setBusname(e.target.value)}/>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Bus Number</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="enter bus number" value={BusNumber} onChange={(e)=>setBusNumber(e.target.value)}/>
            </div>
           
            <div class="flex flex-col">
              <label class="leading-loose">To Area</label>
            <select className='px-4 py-2 border focus:ring-gray-500 text-sm border-gray-300 rounded-md  ' value={ToArea} onChange={(e)=>setToArea(e.target.value)}>
              <option>select...</option>
              <option value="ooty">ooty</option>
              <option value="karaikudi"> Karaikudi</option>
              <option value="rajapalayam">Rajapalayam</option>
              <option value="chennai">Chennai</option>
              <option value="theni">theni</option>
              </select>            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="bg-green-500  w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-green-400" onClick={addbus}>submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </div>
  )
}

export default Feedback