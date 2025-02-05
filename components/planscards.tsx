import Link from "next/link";

export default function Planscards({input, input2, input3}){
    return(

        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={input}
      
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{input3}</h2>
    <p>{input2}</p>
    <div className="card-actions">
        <Link href="../../signup">
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
    )

}