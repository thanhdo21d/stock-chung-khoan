import Img from "../assets/exchange1.png";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { BiCandles } from "react-icons/bi";
import { AiOutlineRollback } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";
import { BsCloudArrowDown } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import Highcharts from "highcharts/highstock";
import "highcharts/modules/stock";
import { useEffect, useState } from "react";
import Sodu from "./Sodu"
import Lenhchokhop from "./Lenhchokhop"
const Price = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const chartData = localStorage.getItem("chartData");
    let initialData = [];

    if (chartData) {
      initialData = JSON.parse(chartData);
    }

    const chart = Highcharts.stockChart("myChart", {
      rangeSelector: {
        selected: 1,
      },

      plotOptions: {
        candlestick: {
          color: "green",
          upColor: "green",
          lineColor: "black",
          upLineColor: "black",
          pointPadding: 0.01,
          groupPadding: 0,
        },
      },
      series: [
        {
          type: "candlestick",
          name: "BTC",
          data: initialData,
          dataGrouping: {
            enabled: false,
          },
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });

    let prevClose = null;
    const updateChart = () => {
      const timestamp = new Date().getTime();
      const open = Math.random() * 3000;
      const high = open + Math.random() * 400;
      const low = open - Math.random() * 400;
      const close = open + Math.random() * 1000;
      const color = prevClose !== null && close < prevClose ? "red" : "green";
      prevClose = close;
      const point = {
        x: timestamp,
        open,
        high,
        low,
        close,
        color: color,
      };
      const series = chart.series[0];
      series.addPoint(point, true, series.data.length >= 60);
      chart.xAxis[0].setExtremes(
        chart.series[0].data[0].x,
        chart.series[0].data[chart.series[0].data.length - 1].x
      );
    };

    updateChart();

    const interval = setInterval(updateChart, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const chart = Highcharts.charts[0];
    if (chart) {
      const chartData = chart.series[0].options.data;
      localStorage.setItem("chartData", JSON.stringify(chartData));
    }
  }, []);
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
          <div className='bg-black w-full h-[50px]'>
              <div className='flex gap-5 pt-3 pl-2 overflow-hidden' >
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
          </div>
          <div className="flex">
              <div>
                  <div className="bg-[#131722] w-[1000px] flex justify-between h-[50px] items-center">
                  <div className="flex items-center">
                      <p className="pl-5 text-slate-400">BVH</p>
                  <p className="pl-10 text-xl text-slate-600">D</p>
                  <BiCandles size={30} className="ml-10 border-l border-r text-slate-600"/>
                  <p className="ml-3 text-xl text-slate-500">~</p>
                  <p className="pl-10 text-md text-slate-600">Indicators</p>
                  <AiOutlineRollback size={30} className="ml-10 text-slate-600"/>
                  <GrFormNextLink size={20} className="ml-10 text-slate-600"/>
                  </div>
                  <div className="flex items-center mr-5">
                      <AiOutlineCamera size={20} className="ml-3 text-xl text-slate-500"/>
                      <BsCloudArrowDown size={20} className="ml-3 text-xl text-slate-500" />
                      <p className="ml-3 text-xl text-slate-500">Luu</p>
                      <AiFillSetting size={20} className="ml-3 text-xl text-slate-500"/>
                      <p  className="ml-3 text-xl text-slate-500">Spit</p>
                  </div>
                  </div>
                    <div id="myChart" style={{ maxWidth: "1000px", height: "360px" }}></div>
              </div>
              <div className="w-[450px] bg-black">
                  <div className="flex gap-5 ml-5">
                       <p className="text-2xl text-white ">BVH</p>
                  <AiFillCaretDown size={30} className="text-red-500 " />
                  <p className="text-xl text-red-600">45,95</p>
                  <p className="pt-1 text-sm text-red-600">0.05(0.2%)</p>
                  </div>
                  <div className="flex gap-2">
                      <div className="">
                          <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">K.Lượng</p>
                          <p className="text-white">50,000</p>
                      </div>
                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">Trần</p>
                          <p className="text-pink-400 pl-7">49.1</p>
                      </div>
                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">T.Chiếu</p>
                          <p className="pl-2 text-orange-300">45.9</p>
                      </div>

                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">Sàn</p>
                          <p className="pl-8 text-sky-400">42.7</p>
                      </div>
                       <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">NN Mua</p>
                      </div>
                      </div>
                      <div className="mt-10">
                          
                          <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">Mở cửa	</p>
                          <p className="pl-3 text-orange-300">45.9</p>
                      </div>
                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">Cao nhất	</p>
                          <p className="text-green-400 ">46.25</p>
                      </div>
                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">Thấp nhất	</p>
                          <p className="text-orange-300 ">45.9</p>
                      </div>
                        <div className="flex gap-10 mt-4 ml-5">
                            <p className="text-white">NN Bán	</p>
                          <p className="pl-2 text-white">23,100</p>
                      </div>
                      </div>
                  </div>
                  <div>
                      <div className="flex justify-around bg-gray-700 items-center h-[40px]">
                        <p className="text-white text-md">TOP MUA</p>
                      <p className="text-white text-md">TOP BÁN</p>
                      </div>
                      <table>
                          <thead >
                              <tr className="h-[35px] items-center">
                                  <th className="text-sm text-white w-[120px] border-r border-b">KL</th>
                                  <th className="text-sm text-white w-[120px] border-r border-b">Giá</th>
                                  <th className="text-sm text-white w-[120px] border-r border-b">Giá</th>
                                  <th className="text-sm text-white w-[120px] border-r border-b">KL</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="h-[35px] items-center">
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">4,100	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">45.95	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">46	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">5,700	</td>
                              </tr>
                              <tr className="h-[35px] items-center">
                                  <td className="text-sm text-orange-300 text-end pr-2 w-[120px] border-r border-b">4,100	</td>
                                  <td className="text-sm text-orange-300 text-end pr-2 w-[120px] border-r border-b">45.95	</td>
                                  <td className="text-sm text-red-500 text-end pr-2 w-[120px] border-r border-b">46	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">5,700	</td>
                              </tr>
                              <tr className="h-[35px] items-center">
                                  <td className="text-sm text-red-500 text-end pr-2 w-[120px] border-r border-b">4,100	</td>
                                  <td className="text-sm text-red-500 text-end pr-2 w-[120px] border-r border-b">45.95	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">46	</td>
                                  <td className="text-sm text-green-500 text-end pr-2 w-[120px] border-r border-b">5,700	</td>
                              </tr>
                          </tbody>
                     </table>
                  </div>
              </div>
          </div>
      <div className='flex justify-between gap-5 mt-2 mr-10' >
        <div className="ml-5">
                  {state && <p className="text-xl text-red-600 cursor-pointer " onClick={()=>setState(false)}>[ERC] <span className="text-xl">Thoát</span> </p>}
        </div>
        <div className="flex gap-5 mt-2 mr-10">
             <p className="pr-64">
                  <AiFillCaretDown size={30}/>
                  </p>
                  <p onClick={()=>setState(true)} className='cursor-pointer	 text-[13px]'>Lệnh chờ khớp</p>
                  <p className='text-[13px]'>KQ khớp lệnh trong phiên</p>
                  <p className='text-[13px]'>Lệnh trong ngày</p>
        </div>
      </div>
      {
        state ? <Lenhchokhop/>: <Sodu/>
      }
        </div>
  )
}
export default Price