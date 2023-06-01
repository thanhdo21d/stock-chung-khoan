import Img from "../assets/exchange1.png"
import {AiFillCaretDown,AiOutlineMenu,AiOutlineLoading3Quarters}from "react-icons/ai"
import { BsFillBellFill } from "react-icons/bs"
import Table from "./Table"
import { useEffect, useState, useRef } from "react"
import Sodu from "../Price/Sodu"
const Header = () => {
     const [isMoving, setIsMoving] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsMoving(true);
    };

    const handleMouseMove = (event) => {
      if (isMoving) {
        const mouseX = event.clientX;
        const movementX = mouseX - leftOffset;
        setLeftOffset(leftOffset + movementX);
      }
    };
    const handleMouseUp = (event) => {
      setIsMoving(false);
    };
    tableRef.current.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      tableRef.current.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMoving, leftOffset]);
  return (
      <div className=''>
          <div className='flex justify-between'>
                <div className='flex items-center justify-start gap-8'>
              <p className='font-bold text-[25px] pl-3'>EZ <span className='text-[#034e95]'>TRADE</span></p>
              <ul className='flex gap-8'>
                  <li className='text-[12px] border-r-2 pr-2'>LỊCH SỬ GD</li>
                  <li className='text-[12px] border-r-2 pr-2'>GD TIỀN</li>
                  <li className='text-[12px] border-r-2 pr-2'>GD ĐẶC BIỆT</li>
                  <li className='text-[12px] border-r-2 pr-2'>QUẢN LÝ TK</li>
                  <li className='text-[12px] border-r-2 pr-2'>TƯ VẤN ĐẦU TƯ</li>
                  <li className='text-[12px] '>HỖ TRỢ</li>


              </ul>
          </div>
              <div className='flex items-center gap-5 pr-10'>
                  <i className="ionicons ion-navicon-round"></i>
                  
                  <img className='h-[20px]' src={Img} />
                  <p>
                      <AiOutlineMenu/> 
                </p> 
                   <p><BsFillBellFill/></p>
                  <p className='text-[#2371af]'>058C21032 <i className="fa fa-chevron-down"></i></p>

          </div>
          </div>
          <div className='bg-black w-full h-[80px]'>
              <div className='flex gap-5 pt-3 pl-2 overflow-hidden'     ref={tableRef}
      style={{ transform: `translateX(${leftOffset}px)`, transition: ".5s" }} >
                  <div className='flex hover:border border-lime-400' >
                    <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500 text-[13px]'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
              <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                  </div>
                  <div className='flex hover:border border-lime-400'>
                   <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
                  <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                  </div>
                  <div className='flex hover:border border-lime-400'>
                   <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
                  <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                  </div>
                  <div className='flex hover:border border-lime-400'>
                   <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
                  <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                  </div>
                  <div className='flex hover:border border-lime-400'>
                   <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
                  <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                  </div>
                  <div className='flex hover:border border-lime-400 '>
                   <p className='text-white text-[13px]'>VNXALL: <span className='text-red-500'>1,587,62 <i className="text-red-500 fa fa-caret-down"></i></span></p>
                      <p className='text-red-500 text-[13px]'>-7,74 <span>-0.59%</span></p>
                      </div>
                      
                      
                     
              </div>
              {/*  */}
              <div className='flex justify-between'>
                     <div className='flex items-center justify-start gap-1 text-center'>
                  <p className='my-2 bg-green-600 px-2 w-fit h-[30px] text-white rounded-sm '>HOSE:<span> VN30</span></p>
                  <p className='my-2 pt-1 text-[12px] w-fit px-2 h-[30px] bg-slate-800 text-white rounded-sm  '>HNX</p>
                  <p className='my-2 pt-1  text-[12px]   w-fit px-2 h-[30px] bg-slate-800 text-white rounded-sm  '>UPCOME</p>
                  <p className='my-2 pt-1  text-[12px] w-fit px-2 h-[30px] bg-slate-800 text-white rounded-sm  '>Nganh</p>
                  <p className='my-2 pt-1  text-[12px] w-fit px-2 h-[30px] bg-slate-800 text-white rounded-sm '>Thong Ke</p>
                  <p className='my-2 pt-1  text-[12px] w-fit px-2 h-[30px] bg-slate-800 text-white rounded-sm '>Chung Quyen</p>
                  <p className='my-2 pt-1  text-[12px] w-fit px-2 mr-2 h-[30px] bg-slate-800 text-white rounded-sm '>Danh Muc</p>
                    <i className="fa fa-caret-down text-white text-[30px]"></i>

                  </div>
                  {/*  */}
                  <div className='flex items-center justify-center gap-5 pr-10'>
                      <i className="text-white fa fa-chart-line"></i>
                      <i className="text-white fa fa-cog"></i>
                      <p className='text-white'>26/09/2023</p>
                      <p className='text-white'>11:00:05</p>
                      <i className="fa fa-info text-white w-[30px] h-[30px] rounded-full border pl-3 pt-1 pb-2"></i>
                  </div>
              </div>
           {/*  */}
              <div className='bg-black border-2'>
                <Table/>
              </div>
      
              <div className='flex justify-end gap-5 mt-2 mr-10' >
                  <p className="pr-64">
                  <AiFillCaretDown size={30}/>
                  </p>
                      <p className='text-[13px]'>Lệnh chờ khớp</p>
                      <p className='text-[13px]'>KQ khớp lệnh trong phiên</p>
                      <p className='text-[13px]'>Lệnh trong ngày</p>
                  </div>
              
           <Sodu/>
        </div>
    </div>
  )
}

export default Header