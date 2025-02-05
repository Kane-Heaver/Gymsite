
import Link from "next/link";



export default function Navbar() {
    return (
<div className="navbar bg-neutral text-secondary-content">
  <div className="navbar-start">
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <label htmlFor="my-drawer" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </label>
      </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li><Link href="../../">Home</Link></li>
        <li><Link href="../../signup">Sign Up</Link></li>
        <li><Link href="../../aboutus">About Us</Link></li>
        <li><a>Plans</a></li>
        </ul>
    </div>
    </div>
  </div>
  <div className="navbar-center">
    <Link href="../../"><h1 className="btn btn-ghost text-3xl">Active Nation</h1></Link>
  </div>
  <div className="navbar-end">
  <div className="form-control">
    <Link href="https://www.instagram.com/abs_active_nation/">
     <button className="btn btn-ghost text-3xl"> <img className="w-10 h-10" src="/images/Instagram.png"/></button>
     </Link>
    </div>
    
     <a className="btn btn-ghost text-3xl"> <img className="w-10 h-10" src="/images/Twitter.png"/></a>
    </div>
    <Link href="https://www.facebook.com/ABStrengthTraining">
     <button className="btn btn-ghost text-3xl"> <img className="w-10 h-10" src="/images/Facebook.png"/></button>
     </Link>
    </div>
 
    );
}