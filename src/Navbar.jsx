import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    
    <div className=' hidden md:flex  whole justify-between items-center border-b py-5'>
        <div className='first gap-3 font-semibold items-center flex'>
            <h1 className='text-[#616E85] text-[11px] '  >Cryptos:<span className='text-[#3861fb]'> 2.2M+</span></h1>
            <h1 className='text-[#616E85] text-[11px] '  >Exchange:<span className='text-[#3861fb]'> 722</span></h1>
            <h1 className='text-[#616E85] text-[11px] '  >Market Cap:<span className='text-[#3861fb]'> $2.51T<span className=' text-[#ea3943]'> <ArrowDropDownIcon/>0.09%</span></span></h1>
            <h1 className='text-[#616E85] text-[11px] '  >24h Vol<span className='text-[#3861fb]'> $152.89b<span className='text-[#ea3943]'><ArrowDropDownIcon/>40.90%</span></span></h1>
            <h1 className='text-[#616E85] text-[11px] '  >Dominance:<span className='text-[#3861fb]'> BTC: 52.2% ETH: 18.1%</span></h1>
          
        </div>

        <div className='second flex gap-2 items-center'>
        <button className='text-[#0d1421] font-semibold text-[12px] flex items-center'>English<ArrowDropDownIcon/></button>
        <h1 className='text-[#0d1421] font-semibold text-[12px] flex items-center'><img className='w-5 h-5' src="https://www.iconarchive.com/download/i109520/cjdowner/cryptocurrency-flat/Dollar-USD.1024.png" alt="pic"  /><ArrowDropDownIcon/></h1>
        <img src="https://static.thenounproject.com/png/979888-200.png" className='w-5 h-5' alt="" />
        <h1 className='text-gray-200'>|</h1>
        <button className='text-[#0d1421] bg-gray-300 p-2 rounded-md font-semibold text-[12px] flex items-center'>Get listed<KeyboardArrowDownIcon/></button>
        <button className='text-[#0d1421] bg-gray-300 p-3 rounded-md font-semibold text-[12px] flex items-center'>API</button>
        <img src="https://cdn-icons-png.flaticon.com/512/408/408472.png" className='w-5 h-5' alt="" />
<Button className='font-semibold font-custom rounded-lg' variant="outlined">Sign in</Button>
        <Button className='font-semibold font-custom rounded-md' variant="contained">Sign Up</Button>
      
        </div>
    </div>
    
      
        
    
  )
}

export default Navbar
