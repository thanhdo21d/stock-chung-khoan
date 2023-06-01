import axios from "axios"
import { useEffect, useState } from "react"
const Lenhchokhop = () => {
const [data, setData] = useState([]);
const [selectedIds, setSelectedIds] = useState([]);
    const [edir, setEdir] = useState(false);
    const [input, setInput] = useState('');
    const [inputs, setInputs] = useState('');
    const [inputss, setInputss] = useState('');

    const [editId, setEditId] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:5001/api/product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
      const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };
const handelDelete = async () => {
    try {
      for (const id of selectedIds) {
        await axios.delete(`https://localhost:5001/api/product/${id}`);
      }
      const updatedData = data.filter((item) => !selectedIds.includes(item.id));
      setData(updatedData);
      setSelectedIds([]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
};
    const handelEdir = async(id) => {
         try {
             const response = await axios.get(`https://localhost:5001/api/product/${id}`);
             console.log(response.data);
             setEditId(response.data);
             setEdir(!edir)
             setInput(response.data.name)
             setInputs(response.data.description)
             setInputss(response.data.number)

      } catch (error) {
        console.error('Error fetching data:', error);
        }
    }
    const suaSanPham = async (id) => {
        console.log(id)
    try {
      const sanPham = {
        name: input,
        description: inputs,
        number: Number(inputss)
      };
      const response = await axios.put(`https://localhost:5001/api/product/${id}`, sanPham);
        alert('Sửa sản phẩm thành công!');
        console.log(response)
        window.onload()
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };
    return (
        <div className='ml-10 h-[500px]'>
      <div className='flex justify-between mt-2'>
          <div>
         <p className='text-[14px] text-slate-600'> <span className='font-bold text-slate-950'>Lưu ý:</span> Khi Quý khách sửa lệnh đối với chứng khoán sàn HOSE, hệ thống sẽ thực hiện lần lượt:</p>
        <p className='text-[14px] text-slate-600'>  (1) Hủy phần chưa khớp của lệnh gốc</p>
        <p className='text-[14px] text-slate-600'>  (2) Tạo lệnh mới tương ứng theo yêu cầu sau khi bước (1) hoàn tất</p>
          </div>
          <div className='flex gap-5 mr-11'>
              <div>
                  <p className='text-[15px]  text-gray-600 pl-2'>Sàn GD</p>
                  <select className='p-2 border w-[110px] h-[40px] rounded-md'>
                      <option>Tất cả</option>
                      <option>HNX</option>
                  </select>
              </div>
               <div>
                  <p className='text-[15px] pl-2 text-gray-600'>Mã CK</p>
                  <select className='p-2 border w-[110px] h-[40px] rounded-md'>
                      <option>Tất cả</option>
                      <option>HNX</option>
                  </select>
              </div>
               <div>
                  <p className='text-[15px]  text-gray-600'>Sắp xếp theo</p>
                  <select className='p-2 border w-[110px] h-[40px] rounded-md'>
                      <option>Thời gian </option>
                      <option>Mã chứng khoán</option>
                      <option>Số lượng</option>
                  </select>
              </div>
               <div>
                  <p className='text-[15px]  text-gray-600'>T.tự sắp xếp</p>
                  <select className='p-2 border w-[110px]  h-[40px] rounded-md'>
                      <option className='text-slate-400'>Tất cả</option>
                      <option>HNX</option>
                  </select>
              </div>
              <button  className='p-2 mt-5 bg-blue-600 text-white w-[110px] h-[40px] rounded-md'>CẬP NHẬT</button>
          </div>
            </div>
            <div className='mt-2'>
                <table className='border '>
                    <thead>
                        <tr className='bg-[#dedede]  text-sm text-slate-800'>
                            <th  className='p-4 w-[100px] cursor-pointer text-center border'>Sửa</th>
                            <th className='p-4 text-center border'>Huỷ </th>
                            <th className='p-4 text-center border'>Mã CK</th>
                            <th className='p-4 text-center border'>Lệnh đặt</th>
                            <th className='p-4 text-center border'>Loại GD</th>
                             <th className='p-4 text-center border'>KL chờ	</th>
                            <th className='p-4 text-center border'>KL đặt	</th>
                            <th className='p-4 text-center border'>Giá</th>
                            <th className='p-4 text-center border'>Tình trạng lệnh</th>
                             <th className='p-4 text-center border'>Diễn giải	</th>
                             <th className='p-4 text-center border'>Sàn GD	</th>
                            <th className='p-4 text-center border'>SHL Tại sàn	</th>
                             <th className='p-4 text-center border'>Thời gian đặt lệnh</th>
                        </tr>
                    </thead>
                    <tbody>
                {data.map((item) => (
                        <tr key={item.id} className='text-blue-400'>
                            <td className='p-2 text-center border'> <span  onClick={() => handelEdir(item?.id)} className='p-1 pl-3 pr-3 font-bold text-white bg-blue-600 rounded-md cursor-pointer'>SỬA</span> </td>
                        <td className='p-2 text-center border'> <input type="checkbox"
                  onChange={() => handleCheckboxChange(item.id)} /></td>
                        <td className='p-2 text-center border'>{ item.name}</td>
                            <td className='p-2 text-center border'>Mua</td>
                            <td className='p-2 text-center border'>Lệnh thường</td>
                            <td className='p-2 text-center border'>1</td>
                        <td className='p-2 text-center border'>{ item.description}</td>
                        <td className='p-2 text-center border'>{ item.number}</td>
                            <td className='p-2 text-center border'>Chờ gửi</td>
                            <td className='p-2 text-center border'>Lệnh đặt thành công!</td>
                            <td className='p-2 text-center border'>HSX</td>
                            <td className='p-2 text-center border'>58007052</td>
                            <td className='p-2 text-center border'>09/05/2023 10:27:07</td>
                        </tr>))}        
                        <tr >
                            <td></td>
                            <td className='p-2 text-center border'> <button  onClick={handelDelete} className=' pl-3 pr-3 font-bold text-slate-600 border bg-[#dedede] rounded-md'>Huỷ</button></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {edir && !!editId&& <div className="">
                    <p className="p-2 text-2xl text-white bg-blue">MÀN HÌNH SỬA LỆNH</p>
                 <div className='mx-auto w-[590px] mt-5 bg-white'>
                  <table className='border'>
                    <thead>
                      <tr className=" bg-[#dedede]">
                        <th className='text-center w-[170px] text-sm border-r'>
                          Sàn GD
                        </th>
                        <th className='text-center w-[170px] text-sm border-r'>
                          Mã CK
                        </th>
                        <th className='text-center w-[170px] text-sm border-r'>
                          Mua/Bán
                        </th>
                        <th className='text-center w-[110px] text-sm border-r'>
                          Loại lệnh
                        </th>
                        <th className='text-center w-[240px] text-sm border-r'>
                          Khối lượng
                        </th>
                        <th className='text-center w-[240px] text-sm border-r'>
                          Giá (x1000đ)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center text-blue-600 border-r'> HNX</td>
                                <td className='text-center border-r'>
                          <input  className='w-[80px]' value={input} onChange={e=>setInput(e.target.value)} /></td>
                        <td className='text-center text-blue-500 border-r'>Mua</td>
                        <td className='text-center w-[120px] text-blue-500 border-r'> thường</td>
                         <td className="text-center border-r"><input step={100} type='number' className='w-[80px]' value={inputs} onChange={e=>setInputs(e.target.value)} /></td>
                        <td className="text-center border-r"> <input step={100} type='number' className='w-[80px]' value={inputss} onChange={e=>setInputss(e.target.value)} />
                          </td>
                        </tr>
                    </tbody>
                    </table>
                    <button onClick={()=>suaSanPham(editId.id)} className='bg-[#0055ba] mt-5 w-[120px] ml-4 rounded-md text-white h-[32px]'>SUA</button>
            <button onClick={() => setInputss('')} className='w-[120px] bg-white ml-2 rounded-md text-slate-900 h-[32px]'>
              <span className='pr-2 text-red-500'>X</span>LAM LAI
            </button>
                </div>
                </div>}
        </div>
  )
}
export default Lenhchokhop