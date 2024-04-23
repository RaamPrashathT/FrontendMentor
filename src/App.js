import React from 'react';

function App() {
  return (
    <div>
      
      <div className="flex justify-center items-center h-[70.6px] width-[100%] bg-white">
        <div className="flex w-[97%] mh-[30px] justify-between items-center bg-white">
          <img src="./img/logo-FEM.svg" alt="SVG" className="w-[196px] h-[28px]" />
          <div className="flex font-bold">
            <ul className="flex m-6">
              <li className="m-[10px]"><a href="" className="font-Barlow">LEARNING PATHS</a></li>
              <li className="m-[10px]"><a href="" className="">CHALLENGES</a></li>
              <li className="m-[10px]"><a href="" className="">SOLUTIONS</a></li>
              <li className="m-[10px]"><a href="" className="">ARTICLES</a></li>
              <li className="m-[10px]"><a href="" className="">UNLOCK PRO</a></li>
            </ul>
            
            
            <div className="flex items-center justify-center">
              <a href="#" className="flex bg-black rounded-[25px] w-[202px] h-[43px] items-center justify-center ">
                <p className="text-white text-center text-[14px]">LOGIN WITH GITHUB</p>
                <img src="/img/github.png" className="w-[20px] h-[20px] ml-2" alt="GitHub Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

