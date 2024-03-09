import React from "react";
import Navbar from "./Navbar";
import Banner from "./Components/Banner";


import Section3 from "./Section3";
import { TransactionsTable } from "./Table";






function App() {
  return (
   <><div
        
   className="min-h-screen bg-white font-custom  max-w-[100vw]  overflow-hidden "
 >
   <div  className=" md:px-7 px-4   max-w-[1469px]   mx-auto ">
    
   <Navbar />
    <Banner />
   <Section3 />
   <TransactionsTable />
   
  
   </div>
 </div>
 


     
   </>
  );
}

export default App;
