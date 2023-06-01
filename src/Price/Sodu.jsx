import React, { useState } from 'react';
import { AiOutlineLoading3Quarters, AiFillCloseCircle, AiOutlineKey ,AiOutlineUnorderedList} from 'react-icons/ai';
import axios from 'axios';
const Sodu = () => {
  const [submit, setSubmit] = useState(false);
  const [maCK, setMaCK] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedData, setSelectedData] = useState(null);
  const [khoiLuong, setKhoiLuong] = useState('');
  const [gia, setGia] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
     if (maCK.trim() === '') {
      alert('Please enter a value for ma ck');
      return;
    }
    setSubmit(!submit);
    
  };
  const handelSuccess = (e) => {
    e.preventDefault();
    if (!success) {
      alert('Please enter a password ');
    }
    else {
      alert("mua thanh cong")
      addToApi()
      setSubmit(false)
      
    }
    }
  const data = [
    {id:1,  mack: "aaa", san: "- HNX.NY", congty: " Công ty Cổ phần AAV Group" },
    { id:2, mack : "bbb", san :"- HNX.NY" , congty :" Công ty Cổ phần bbb Group"},
    { id:3, mack : "ccc", san :"- HNX.NY" , congty :" Công ty Cổ phần ccc Group"},
    { id:4, mack : "ddd", san :"- HNX.NY" , congty :" Công ty Cổ phần ddd Group"},
    { id:5, mack : "abc", san :"- HNX.NY" , congty :" Công ty Cổ phần abc Group"},
    { id:6, mack : "cdf", san :"- HNX.NY" , congty :" Công ty Cổ phần cdf Group"},
    { id:7, mack : "fab", san :"- HNX.NY" , congty :" Công ty Cổ phần fab Group"},
  ]
  const handleClickl = () => {
    const result = data.find(item => item.mack === maCK);
    if (result) {
      setSelectedData(result);
    } else {
      setSelectedData(null);
    }

  };
  const addToApi = async () => {
    try {
      const data = {
        name: maCK,
        description: khoiLuong,
        number: Number(gia),
        category: 'hghh',
      }
      const res = await axios.post('https://localhost:5001/api/product', data);
      console.log(res)
    } catch (error) {
      console.log('Error:', error);
    }
  }; 
  return (
    <div className='h-[600px]'>
      <div className='flex gap-20 mt-10 ml-40'>
        <div className='border-2 w-[300px] shadow-2xl'>
          <div className='bg-[#b3b3b3] flex items-center justify-between'>
            <h2 className='text-[#0055ba] p-1 pl-2'>SỐ DƯ TIỀN</h2>
            <p className='text-[#2371af] pr-3'><AiOutlineLoading3Quarters /></p>
          </div>
          <div className='flex justify-between pl-2 pr-2'>
            <p>Số dư tiền mặt:</p>
            <p>15,019,185</p>
          </div>
          <div className='flex justify-between py-2 pl-2 pr-2'>
            <p>Tiền ứng trước:</p>
            <p>0</p>
          </div>
          <div className='flex justify-between pl-2 pr-2'>
            <p>Tiền cho FPTS vay</p>
            <p className='border-b'>0</p>
          </div>
          <div className='flex justify-between pt-2 pl-2 pr-2'>
            <p>Số dư có thể giao dịch:</p>
            <p>15,019,185</p>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgb(223, 238, 255)' }} className='border-2 relative w-[800px] h-[120px] shadow-2xl'>
          <div className='flex items-center justify-between'>
            <div className='flex mt-2 ml-3'>
              <p className='p-1 bg-[#0055ba] border-sky-500 border-2 text-white'>MUA</p>
              <p className='p-1 text-white bg-slate-400'>BÁN</p>
            </div>
            <div className='flex mr-2'>
              <p className='pt-1 pr-2 text-[13px]'>Ghi lệnh chờ gửi:</p>
              <div className="flex bg-slate-400 rounded-3xl w-[60px] h-[25px] items-center text-white p-1 pl-2 gap-2">
                <p>Tắt</p>
                <p className="w-[20px] h-[20px] bg-white rounded-full"></p>
              </div>
            </div>
          </div>
          <div className='mt-5 ml-3'>
            <input
              className='border-2 w-[120px] rounded-md h-[32px] pl-3'
              type='text'
              placeholder='ma ck'
              value={maCK}
              onChange={(e) => setMaCK(e.target.value)}
              onClick={handleClickl}
            />
            {selectedData && (
        <div className='absolute mt-5 flex gap-8 items-center bg-white w-[430px]'>
          <h2 className='pt-2 pl-3 text-xl'>{selectedData.mack}</h2>
          <p className='pt-2'>{selectedData.san}</p>
          <p className='pt-2'>{selectedData.congty}</p>
        </div>
      )}
            <input
              className='border-2 w-[140px] mx-2 rounded-md  h-[32px]'
              maxLength={12}
              minLength="1"
              type="number"
              step={100}
              placeholder='0'
              value={khoiLuong}
                          onChange={(e) => setKhoiLuong(e.target.value)}
                      />
                      <p className='absolute top-[45px] left-[180px]'>Tối đa:</p>
                      <button className='absolute top-[10px] border bg-gray-400 border-blue-500 text-blue-500 text-md w-[120px] p-1 left-[150px]'>Tiền Mặt</button>
                      <button className='absolute text-md top-[10px] bg-white w-[120px] border p-1 left-[300px]'>Kí Quỹ</button>
                        <AiOutlineUnorderedList className='absolute text-3xl top-[10px] bg-white text-blue-600 border p-1 left-[440px]'/>
            <input
              className='border-2 w-[140px] rounded-md h-[32px] pl-3'
              type="number"
              placeholder='Giá'
              value={gia}
              step={100}

              onChange={(e) => setGia(e.target.value)}
            />
            <button onClick={handleClick} className='bg-[#0055ba] w-[120px] ml-4 rounded-md text-white h-[32px]'>GUI</button>
            <button className='w-[120px] bg-white ml-2 rounded-md text-slate-900 h-[32px]'>
              <span className='pr-2 text-red-500'>X</span>LAM LAI
            </button>
            {submit && (
              <div className='bg-white-500 w-[660px] shadow-xl left-[-200px] top-[-100px] absolute  h-[205px] bg-white rounded-md'>
                <div className='bg-[#034e94] text-white pt-3 relative text-xl h-[50px] text-center items-center'>
                  <h1>XÁC NHẬN LỆNH</h1>
                  <p onClick={() => setSubmit(!submit)}><AiFillCloseCircle className='absolute  top-[-15px] right-[-10px] text-4xl text-gray-500' /></p>
                </div>
                <div className='mx-auto w-[590px] mt-5 bg-white'>
                  <table className='border'>
                    <thead>
                      <tr className=" bg-[#dedede]">
                        <th className='text-center w-[170px] text-sm border-r'>
                          Lệnh đặt
                        </th>
                        <th className='text-center w-[170px] text-sm border-r'>
                          Mã CK
                        </th>
                        <th className='text-center w-[170px] text-sm border-r'>
                          Khối lượng
                        </th>
                        <th className='text-center w-[110px] text-sm border-r'>
                          Giá
                        </th>
                        <th className='text-center w-[240px] text-sm border-r'>
                          Thông báo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center border-r'>
                          MUA
                        </td>
                        <td className='text-center border-r'>
                          {maCK}
                        </td>
                        <td className='text-center border-r'>
                          {khoiLuong}
                        </td>
                        <td className='text-center border-r'>
                          {gia}
                        </td>
                        <td>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <form className='flex items-center mt-5 gap-8 w-[570px] relative mx-auto'>
                  <p className='text-sm text-blue-500'>Xác nhận lệnh </p>
                  <AiOutlineKey className='absolute text-2xl left-[100px] border' />
                  <input  value={success} onChange={(e) => setSuccess(e.target.value)} placeholder='mật khẩu giao dịch ' type='password' className='border rounded-sm w-[140px]' />
                  <button onClick={ handelSuccess} className='p-1 pl-4 pr-4 text-white bg-green-600 rounded-2xl'>GỬI LỆNH</button>
                  <button onClick={() => setSubmit(false)} className='text-md '> <span className='pr-3 text-xl text-red-500'>X</span>Đóng lại</button>
                             
              </form>  
                    <hr className='mt-2 border'/>     
                      <p className='text-sm pl-7'>Để sử dụng mật khẩu giao dịch một lần cho cả phiên đăng nhập, Quý khách cài đặt tại đây</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sodu;


