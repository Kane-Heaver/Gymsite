import Link from 'next/link';

import Navbar from '../components/navbar';

import Button from '../components/button';

import Hero from '../components/hero';

export default function Page() {
  return (
    <div>
      <div>
   <Navbar/>
   </div>

  
   
   <Hero input="Join our community of fitness enthusiasts and get access to expert-guided workouts, 
            personalized plans, and state-of-the-art facilities. Your journey to a healthier, stronger you starts here!"/>
   <Hero input="Test your limits!"/>
  
</div>
   
  );
}