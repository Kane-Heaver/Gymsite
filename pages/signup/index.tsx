import Link from 'next/link';

import Navbar from '../../components/navbar';

import TextInput from '../../components/textinput';

import Hero from '../../components/hero';

export default function Page() {
  return (
    
    <div >
      <div className="relative z-10">
   <Navbar/>
   </div>

   <div className="relative min-h-screen flex items-center justify-center">
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-[url(/images/weightrack1.jpg)] bg-cover bg-center
                before:absolute before:inset-0 before:bg-black/60 before:backdrop-blur-[4px]"
  ></div>

   <TextInput/>
    
    
    </div>


  

</div>
   
  );
}