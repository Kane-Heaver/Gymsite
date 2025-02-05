export default function TextInput(){
    return (
<div className="flex justify-center items-center min-h-screen  space-x-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Input Client Details</h2>
          <p>
            
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-xs w-full max-w-xs"
            ></textarea>  
            
          
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-sm w-full max-w-xs"
            ></textarea>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
      </div>

    );

 
}