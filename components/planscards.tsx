import Link from "next/link";

export default function Planscards({input, input2, input3, input4}) {
    return(

        <div className="card bg-base-100 w-96 shadow-xl">
          
  <figure className="px-12 pt-4 h-80 flex justify-center items-center">
    
    <img
      src={input}
      
      className="w-full h-full object-cover rounded-xl" />
  </figure>
  <div className="flex justify-center items-center p-4">

          <div className="badge badge-neutral badge-lg">{input4}</div>
          </div>
          
  <div className="card-body items-center text-center">
    <h2 className="card-title">{input3}</h2>
    <div className="divider divider"></div>

    <ul className="text-left space-y-2">
          {input2.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
    
    <div className="card-actions pt-4">
        <Link href="/">
      <button className="btn btn-primary btn-wide">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
    )

}