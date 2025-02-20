export default function TextInput() {
  return (
    <div className="flex justify-center items-center min-h-screen space-x-4">
      <div className="card bg-base-100 w-[80rem] shadow-xl flex flex-row">

        {/* Image Section */}
        <figure className="w-1/2">
          <img
            src="/images/jumpingforjoy.jpg"
            alt="Jumping for joy"
            className="h-full object-cover"
          />
        </figure>

        {/* Form Section */}
        <div className="card-body w-1/2">
          <h2 className="card-title">Input Client Details</h2>
          <form>
            <label className="input input-bordered flex items-center gap-2">
              First Name
              <input type="text" className="grow" placeholder="John" />
            </label>

            <label className="input input-bordered flex items-center gap-2 mt-2">
              Last Name
              <input type="text" className="grow" placeholder="Doe" />
            </label>

            <label className="input input-bordered flex items-center gap-2 mt-2">
              Email
              <input type="text" className="grow" placeholder="john.doe@site.com" />
            </label>

            <label className="input input-bordered flex flex-col gap-2 mt-2">
              Message
              <textarea
                className="grow h-36 p-2 w-full resize-none"
                placeholder="Share your goals, availability, and specific needs"
              />
            </label>

            <div className="card-actions justify-end mt-2">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );


}