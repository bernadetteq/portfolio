import Link from "next/link";
// import MobileCarousel from "@/components/MobileCarousel";

export default function ProjectsPage() {
  return (
    <main className="py-24 space-y-20">
        <div className="space-y-8">
                <Link href="/projects" className="ttransition hover:text-[#dc8a8a] transition-colors duration-300">
                ← Back to Projects
                </Link>
            </div>
        <section className="space-y-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
            PREDICTIVE ANALYTICS &#10072; Machine Learning
            </p>
            <h1 className="text-4xl tracking-tight mb-6">Predictive Energy Forecasting</h1>
            <p className="text-lg text-gray-500 max-w-2xl">
            {/* Developed a predictive energy forecasting model that leveraged historical consumption data and machine learning techniques to optimize energy usage and reduce costs for commercial clients. */}
            Explored how machine learning techniques can support operational forecasting by evaluating predictive models for estimating power plant energy output.
            </p>    

            
        </section>
        <section className="space-y-6">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 flex-none space-y-4 pr-8 mb-6 sm:mb-0">
                    <div className="flex items-center gap-4">

                        {/* SVG Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded-xl shrink-0">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>



                        </div>

                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-semibold tracking-tight">
                            Role
                            </p>

                            <p className="text-sm text-gray-500 max-w-2xl">
                            Product Manager
                            </p>
                        </div>

                        </div>
                    
                </div>
                <div className="w-fullsm:w-2/3 flex-none space-y-4 pr-8 "></div>
            </div>
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl tracking-tight mb-6 tracking-tight">Project Overview</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            This project explored how predictive modeling techniques could be applied to estimate the electrical energy output of a Combined Cycle Power Plant using operational input variables. The objective was to identify a practical and interpretable modeling approach that could support forecasting and operational decision-making.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
            To establish a reliable baseline model, I evaluated multiple linear regression as an initial approach due to the presence of multiple input variables influencing a single numerical outcome. The exercise focused not only on model accuracy, but also on understanding feature relationships, evaluating model fit, and interpreting results in a business-relevant way.
            </p>
            <h2 className="text-2xl tracking-tight mb-6 tracking-tight">Problem</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            Power generation systems rely on accurate forecasting to optimize operational efficiency and resource planning. However, predicting electrical energy output involves analyzing multiple operational variables that may collectively influence performance.a practical and interpretable modeling approach that could support forecasting and operational decision-making.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
            The challenge was to identify an interpretable predictive modeling approach capable of estimating energy output while balancing simplicity, explainability, and baseline performance evaluation.
            </p>
            <h2 className="text-2xl tracking-tight mb-6">Creative Process</h2>

            <ul className="list-[upper-roman] list-outside text-lg text-gray-500 max-w-2xl pl-6">
                <li>Problem Framing
                    <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                        <li>Defined the prediction goal and identified the relationship between operational inputs and energy output</li>
                        <li>Evaluated modeling approaches suitable for numerical prediction problems</li>
                    </ul>
                </li>
                <li>Model Selection
                    <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                        <li>Selected Multiple Linear Regression as the initial benchmark model</li>
                        <li>Chose the approach due to:
                            <ul className="list-[lower-alpha] list-outside text-lg text-gray-500 max-w-2xl pl-6">
                                <li>multiple predictor variables</li>
                                <li>a single numerical outcome variable</li>
                                <li>strong interpretability for early-stage analysis</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Model Evaluation
                    <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                        <li>Compared model performance using:
                            <ul className="list-[lower-alpha] list-outside text-lg text-gray-500 max-w-2xl pl-6">
                                <li>R-squared to assess overall fit</li>
                                <li>Mean Absolute Error (MAE) to evaluate prediction accuracy</li>
                            </ul>
                        </li>
                        <li>Evaluated how different feature combinations influenced predictive performance</li>
                    </ul>
                </li>
                <li>Insight Interpretation
                    <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6"  >
                        <li>Analyzed feature coefficients to understand variable influence on energy output</li>
                        <li>Compared full-feature models against simplified single-feature approaches</li>
                        <li>Assessed tradeoffs between model simplicity and predictive accuracy</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl tracking-tight mb-6">Key Insights</h2>
            <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                <li>Multiple Linear Regression provided a strong baseline model for predicting energy output</li>
                <li>Models using all available operational features performed better than single-feature approaches</li>
                <li>Feature selection significantly influenced predictive performance and model fit</li>
                <li>Interpretable models can provide valuable operational insights even before introducing more advanced machine learning techniques</li>
            </ul>
            <h2 className="text-2xl tracking-tight mb-6">Key Takeaway</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            This project reinforced the importance of starting with interpretable baseline models before pursuing more complex machine learning solutions. Rather than optimizing immediately for sophistication, the exercise emphasized structured experimentation, model evaluation, and understanding the relationship between inputs and outcomes.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">It also highlighted how analytical thinking and predictive modeling can support operational forecasting and data-informed decision-making which are skills that are increasingly valuable in modern product management.</p>
            <h2 className="text-2xl tracking-tight mb-6">Assets</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            Excel files containing the dataset, model outputs, and performance metrics are available upon request for those interested in exploring the data and analysis further. <a href="https://onedrive.live.com/edit?id=8713F8625B9FEEA8!sde7579f077c64c2484e530db02bf7010&resid=8713F8625B9FEEA8!sde7579f077c64c2484e530db02bf7010&cid=8713f8625b9feea8&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy84NzEzZjg2MjViOWZlZWE4L0VmQjVkZDdHZHlSTWhPVXcyd0tfY0JBQjNpekhpbWtGNldWOGRWQWV5dG50OEE_ZT1uMDhzYnY&migratedtospo=true&wdo=2 " target="_blank" className="text-white">Click here &#x2192;</a>
            </p>    
        </section>
    </main>
  );
}