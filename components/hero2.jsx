export default function Hero2 ({input}){

return(

    <div className="card bg-base-100 w-[70rem] shadow-xl">
    <div className="card-body">
      <h1 className="card-title text-3xl">About Us</h1>
      <p>Welcome to [Gym Name], where strength, community, and transformation come together!

Founded by [Owner's Name], an experienced personal trainer and fitness coach with over [X] years in the industry, our gym is more than just a place to work out—it’s a place to push limits, break barriers, and achieve goals you never thought possible.

Hailing from [City/State], [Owner’s Name] has dedicated their career to helping people of all fitness levels build strength, confidence, and a love for movement. Whether you're a beginner taking your first step into fitness or an athlete looking to refine your performance, we’re here to guide and support you every step of the way.

At [Gym Name], we believe in training smart, training hard, and making fitness an enjoyable part of your life. With a focus on functional training, strength & conditioning, and personalized coaching, we create programs tailored to your needs. Our community is built on support, motivation, and results—because when you train with us, you're not just a member, you’re family.

Ready to take your fitness to the next level? Come in, say g’day, and let’s get to work!
<br/>
<br/>📍 Location: 195-201 Victoria Rd, Largs Bay SA 5016
<br/>📞 Contact: 0432609184
<br/>📧 Email: ad.blundell@hotmail.com
</p>
    </div>
    <figure>
      <img
        src={input}
        alt="Shoes" />
    </figure>
  </div>
)

}