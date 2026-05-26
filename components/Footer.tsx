import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-1 border-gray-600">
      <div className="max-w-4xl mx-auto py-12 max-sm:px-6">
        {/* <footer className="flex flex-col sm:flex-row">
            <div className="sm:w-1/4 flex-auto space-y-4 pr-8 ">
              <h5 className="text-2xl tracking-tight">Let's build awesome things!</h5>
              <p className="text-gray-500 max-w-2xl">
                I'm always excited to collaborate on new projects and bring ideas to life.
              </p>
            </div>
            <div className="sm:w-1/4 flex-none"></div>
            <div className="sm:w-1/4 flex-none mt-5 lg:mt-0">
              <div className="flex sm:mb-10 mb-5 lg:mt-0 ">
                <a
                  href="https://www.linkedin.com/in/bimquitoriano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center text-white hover:opacity-60 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2" width="20"
                    height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg> 
                </a>
                
                <a href="bimquitoriano@gmail.com" className="text-sm">
                  bimquitoriano@gmail.com
                </a>
              </div>
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/bimquitoriano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center text-white hover:opacity-60 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8V24h-4V8z" />
                  </svg>
                </a> 
                <a href="https://www.linkedin.com/in/bimquitoriano/" className="text-sm" target="_blank">
                  /bimquitoriano
                </a>
              </div>

            </div>
        </footer> */}

        <footer className="flex flex-col sm:flex-row">
            <div className="flex-auto space-y-4 pr-8 ">
              <h5 className="text-2xl tracking-tight">Let's build awesome things!</h5>
              <p className="text-gray-500 max-w-2xl my-4">
                I'm always excited to collaborate on new projects and bring ideas to life.
              </p>



              <div className="sm:grid sm:grid-cols-3 sm:gap-6 items-stretch">
                <div className="flex lg:mt-0  text-gray-500 hover:text-[#dc8a8a] transition-colors duration-300">
                  <a
                    href="mailto:bimquitoriano@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2" width="20"
                      height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg> 
                  </a>
                  
                  <a href="mailto:bimquitoriano@gmail.com" className="text-sm" target="_blank">
                    bimquitoriano@gmail.com
                  </a>
                </div>
                
                <div className="flex lg:mt-0 mt-4 text-gray-500 hover:text-[#dc8a8a] transition-colors duration-300">
                  <a
                    href="https://www.linkedin.com/in/bimquitoriano/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8V24h-4V8z" />
                    </svg>
                  </a> 
                  <a href="https://www.linkedin.com/in/bimquitoriano/" className="text-sm" target="_blank">
                    /bimquitoriano
                  </a>
                </div>
              </div>
              
            </div>
        </footer>
      </div>
    </div>
    
  );
}