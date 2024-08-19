import MeImg from "../images/MeImg"
import Contact from "./Contact";
import { PricingCard1, PricingCard2, PricingCard3 } from "./PricingCard";

export default function Pricing() {
    return (
        <div id="pricing" className="flex pt-2 md:pt-0 justify-center px-2 md:mt-0 font-radio w-full h-screen md:h-screen overflow-none">
            <div className="flex justify-center text-center">
                <div className="flex flex-col w-full items-center ">
                    <div className="pt-0 md:pt-16 w-2/5">
                        <p className="text-turqoise text-2xl font-mono">Pricing</p>
                    </div>
                    <div className="flex flex-col md:flex-row pt-0 md:pt-16 w-full space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                        <PricingCard1 />
                        <PricingCard2 />
                        <PricingCard3 />
                    </div>
                </div>                
            </div>
            
        </div>
    )
}