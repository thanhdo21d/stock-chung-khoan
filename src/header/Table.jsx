const Table = () => {
  return (
      <div>
       <table className="text-center border-collapse table-auto" style={{ width: '100%' }}>
    <thead>
                          <tr className="bg-zinc-700">
     
        <th className="px-4 py-2 text-white border-r border-1"> mã</th>
        <th className="px-4 py-2 text-white border-r">TC</th>
        <th className="px-4 py-2 text-white border-r">Trần</th>
        <th className="px-4 py-2 text-white border-r">Sàn</th>
     <th className="px-4 py-2 text-white"></th>
     <th></th>
     <th className="px-4 py-2 text-white">mua</th>
     <th></th>
     <th className='border-r'></th>

            <th></th>
           <th className="py-2 text-white ">Khop lenh</th>
         <th className='border-r'></th>
          
             <th></th>
         <th></th>
         <th className="px-4 py-2 text-white">ban</th>
           <th></th>
         <th></th>
            
             <th className='border-r '></th>
           <th className='text-white border-r'>Tổng Kl</th>
           <th className='text-white border-r'>Mở Cửa</th>
         <th className='text-white border-r'>Cao Nhat</th>
      </tr>
    </thead>
    <tbody>
          <tr draggable="true"
          className="border-t border-gray-300">
      
        <td className="flex gap-1 px-4 py-2 text-red-500 border-r"><input className='pl-2' type='checkbox'/><a href="http://localhost:5173/price">VRE</a></td>
        
        <td className="px-4 py-2 text-yellow-500 border-r">27,7</td>
        <td className="px-4 py-2 border-r text-violet-500">87,8</td>
        <td className="px-4 py-2 border-r text-cyan-500">54,7</td>
         
        <td className="px-2 py-2 text-white border-r">G3</td>
        <td className="px-4 py-2 text-white border-r">KL3</td>
          <td className="px-4 py-2 text-white border-r">G2</td>
        <td className="px-4 py-2 text-white border-r">G1</td>
                                  <td className="px-4 py-2 text-white border-r">K1</td>
                                  
          <td className="px-4 py-2 text-white border-r">Giá</td>
        <td className="px-4 py-2 text-white border-r">KL</td>
           <td className="px-4 py-2 text-white border-r">+/-</td>
                       
            <td className="px-4 py-2 text-white border-r">G1</td>
           <td className="px-4 py-2 text-white border-r">KL1</td>
            <td className="px-4 py-2 text-white border-r">G2</td>
           <td className="px-4 py-2 text-white border-r">KL2</td>
           <td className="px-4 py-2 text-white border-r">G3</td>
           <td className="px-4 py-2 text-white border-r">KL3</td>
        
           <td className="px-4 py-2 text-white border-r">1327</td>
           <td className="px-4 py-2 text-yellow-500 border-r">87</td>
           <td className="px-4 py-2 text-yellow-500 border-r">87</td>

      </tr>
      <tr draggable="true"  className="border-t border-gray-300">
        <td className="flex gap-1 px-4 py-2 text-red-500 border-r"><input type='checkbox'/>SSI</td>
        <td className="px-4 py-2 text-yellow-500 border-r">25,9</td>
        <td className="px-4 py-2 border-r text-violet-500">77,9</td>
        <td className="px-4 py-2 text-red-500 border-r">88,6</td>
        <td className="px-4 py-2 text-green-500 border-r">88,6</td>
        <td className="px-4 py-2 text-red-500 border-r">88,6</td>
        <td className="px-4 py-2 text-green-500 border-r">88,6</td>
        <td className="px-4 py-2 text-red-500 border-r">88,6</td>
       <td className="px-4 py-2 border-r text-cyan-500">88</td>
       <td className="px-4 py-2 border-r text-cyan-500">88</td>
        <td className="px-4 py-2 text-green-500 border-r">88,6</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
      <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
                                  
           <td className="px-4 py-2 text-white border-r">14</td>
                                  
     <td className="px-4 py-2 text-red-500 border-r">129327</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
         <td className="px-4 py-2 text-red-500 border-r">88,6</td> 
       <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
      <td className="px-4 py-2 text-red-500 border-r">88</td>                            
      <td className="px-4 py-2 text-red-500 border-r">88</td>                            

      </tr>
      <tr draggable="true"  className="border-t border-gray-300">
      
        <td className="flex gap-1 px-4 py-2 text-green-500 border-r"><input type='checkbox'/>STB</td>
        <td className="px-4 py-2 text-yellow-500 border-r">19,9</td>
        <td className="px-4 py-2 border-r text-violet-700">65,8</td>
                                  <td className="px-4 py-2 border-r text-cyan-500">33,8</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
                                  
        <td className="px-4 py-2 text-green-500 border-r">88,6</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
        <td className="px-4 py-2 text-red-500 border-r">88,6</td>
          <td className="px-4 py-2 text-red-500 border-r">88,6</td>
           <td className="px-4 py-2 text-white border-r">27</td>
                                  

                                  {/*  */}
             <td className="px-4 py-2 border-r text-cyan-500">129327</td>
        <td className="px-4 py-2 text-yellow-500 border-r">88,6</td>
        <td className="px-4 py-2 text-yellow-500 border-r">88,6</td>
            {/*  */}
          <td className="px-4 py-2 text-red-500 border-r">88,6</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
         <td className="px-4 py-2 text-green-500 border-r">88,6</td> 
       <td className="px-4 py-2 text-red-500 border-r">88,6</td>
        <td className="px-4 py-2 border-r text-cyan-500">88,6</td>
        <td className="px-4 py-2 text-green-500 border-r">88,6</td>   
        <td className="px-4 py-2 text-red-500 border-r">88,6</td>   
        <td className="px-4 py-2 text-green-500 border-r">88</td>   


                                  
   </tr>
    
       
    </tbody>
        </table>
    </div>
  )
}

export default Table
