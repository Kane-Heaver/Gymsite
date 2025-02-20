import Link from 'next/link';

import Navbar from '../../components/navbar';

import TextInput from '../../components/textinput';

import Planscards from '../../components/planscards';

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
<div className="flex flex-wrap justify-center gap-10 mt-5">
   <Planscards input="/images/dansgym.jpg" input2={[
    "Everything in the Basic Plan",
    "Unlimited Group Fitness Classes",
    "Monthly Body Composition Analysis",
    "Discount on Supplements & Merchandise"
  ]}


input3="$19.99/week" input4="Basic"/>

   <Planscards input="/images/adamdeadlift.jpg" input2={[
    "Everything in the Basic Plan",
    "Unlimited Group Fitness Classes",
    "Monthly Body Composition Analysis",
    "Discount on Supplements & Merchandise"
  ]} input3="$39.99/week" input4="Premium"/>  

   <Planscards input="/images/PT1.jpg" 
   input2={[
    "Everything in the Basic Plan",
    "Unlimited Group Fitness Classes",
    "Monthly Body Composition Analysis",
    "Discount on Supplements & Merchandise"
  ]}
   
   input3="$79.99/week" input4="Elite"/>
   </div>  
    </div>


  

</div>
   
  );
}