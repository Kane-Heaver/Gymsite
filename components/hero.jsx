import TextInput from "./textinput";
import Link from "next/link";

export default function Hero({input}){

    return(<div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/pexels-victorfreitas-841130.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Transform Your Body Today</h1>
            <p className="mb-5">
            {input}
            </p>
            <Link href="../../signup">
            <button className="btn btn-white">Get Started</button>
            </Link>
          </div>
        </div>
      </div>);
}