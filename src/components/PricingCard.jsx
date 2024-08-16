import Checkmark from "./Checkmark";

const PricingCard1 = () => {
    return (
        <div className="flex flex-col md:h-full p-6 mx-auto font-radio w-full md:w-5/12 text-center text-white rounded-lg border border-turqoise">
              <h3 className="mb-0 text-2xl font-semibold">Professional</h3>
              <p className="font-light text-gray-400 sm:text-base">For personal websites.</p>
              <div className="flex justify-center items-baseline my-2 md:my-8">
                  <span className="mr-2 text-5xl font-extrabold">$199</span>
                  
              </div>
              <ul role="list" className="mb-2 md:mb-8 space-y-2 md:space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Up to 4 customizable pages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Custom GoDaddy Domain</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Free support: <span className="font-semibold">Forever!</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Free updates for <span className="font-semibold">6 months</span></span>
                  </li>
              </ul>
        </div>
    )
}

const PricingCard2 = () => {
    return (
        <div className="flex flex-col p-6 mx-auto font-radio w-full md:w-5/12 text-center text-white rounded-lg border border-turqoise">
              <h3 className="mb-0 md:mb-8 text-2xl font-semibold">Business</h3>
              <p className="font-light text-gray-400 text-base w-full">For businesses/restaurants.</p>
              <div className="flex justify-center items-baseline my-2 md:my-8">
                  <span className="mr-2 text-5xl font-extrabold">$299</span>
                  
              </div>
              <ul role="list" className="mb-2 md:mb-8 mt-4 space-y-2 md:space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Everything in <span className="font-semibold">Professional</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Up to <span className="font-semibold">8</span> customizable pages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Free updates for <span className="font-semibold">12 months</span></span>
                  </li>               
              </ul>
        </div>
    )
}

//For another Time!
const PricingCard3 = () => {
    return (
        <div className="flex flex-col p-6 mx-auto font-radio w-full md:w-5/12 text-center text-white rounded-lg border border-turqoise">
              <h3 className="mb-0 md:mb-8 text-2xl font-semibold">Custom</h3>
              <p className="font-light text-gray-400 sm:text-base">Need more than Professional?</p>
              <div className="flex justify-center items-baseline my-2 md:my-8">
                  <span className="mr-2 text-5xl font-extrabold">Custom</span>
                  
              </div>
              <ul role="list" className="mb-2 md:mb-8 space-y-2 md:space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>For larger websites</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Checkmark />
                      <span>Contact for information</span>
                  </li>
                  
              </ul>
        </div>
    )
}

export { PricingCard1, PricingCard2, PricingCard3 };