import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import { Tune } from '@mui/icons-material';

const Section3 = () => {
  return (
    <>
    <div className='py-5 border-b flex justify-between items-center font-custom '>
      <div className='flex gap-4 items-center'>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'><img className='w-3 h-3' src="https://www.clipartmax.com/png/small/261-2613569_the-icon-is-a-square-composed-of-four-separate-sized-collage-icon.png" alt="pic" />
        Cryptocurrencies</button>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'><img className='w-3 h-3' src="https://www.pikpng.com/pngl/m/541-5410770_png-file-svg-categories-icon-png-clipart.png" alt="pic" />
        Categories</button>
        <h1>|</h1>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'>🏆
        CMC Crypto Award 2024</button>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'>🔥
        Solana Ecosystem</button>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'>🔥
        Memes</button>
        <button className='text-[#58667e] font-extrabold focus:text-[#3861fb] duration-300 focus:bg-[#3861fb]/10  p-2 rounded-md  items-center hover:bg-gray-100 text-[12px] gap-1 flex'>🔥
        AI</button>

      
       
      </div>
      <div className='flex gap-2 items-center'>
        <h1 className='text-[#58667e] text-[12px]'>show rows</h1>
        <button className='text-[12px] flex items-center py-1 px-2 rounded-md font-bold text-black bg-[#eff2f5]'>20<KeyboardArrowDownIcon color='gray' /></button>
        <button className='text-[12px]  flex items-center py-1 px-2 rounded-md font-bold text-black bg-[#eff2f5]'><Tune color='gray' />Filters</button>
        <button className='text-[12px] flex items-center py-1 px-2 rounded-md font-bold text-black bg-[#eff2f5]'><ViewWeekOutlinedIcon color='gray' />Customize</button>
      </div>
    </div>
    </>
  )
}

export default Section3;
