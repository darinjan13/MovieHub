export default function SubscriptionPlans({ plan, prices, index, handleSubscribe }) {

    return (
        <div className="container bg-gray-700 mx-auto max-w-lg p-4  sm:p-10">
            {/* Basic Plan */}
            <div className="bg-gray-800 w-full h-80 rounded-lg shadow-2xl py-10 flex flex-col items-center justify-between flex-1">
                <h3 className={`text-xl font-semibold ${plan?.plan_name === "Basic Plan" ? " text-blue-600" : " text-purple-600"}`}>
                    {plan?.plan_name}
                </h3>
                <p className="text-2xl font-bold text-white">${prices[index]}</p>
                <ul className="mt-4  space-y-2 text-white">
                    <li>{plan?.max_profiles} Profiles</li>
                    <li>Available on Phone/Tablet/Laptop/TV</li>
                    <li>HD Streaming</li>
                    {plan?.plan_name !== "Basic Plan" && <li>4K Streaming</li>}
                    <li>{plan?.plan_name === "Premium Plan" ? "Offline Viewing" : "No offline viewing"}</li>
                </ul>
                {/* Button under the plan */}

            </div>
            <div className="mt-6 w-full">
                <button
                    onClick={() => handleSubscribe(plan.id)}
                    className="bg-[#78B3CE] hover:bg-[#C9E6F0] text-black py-2 px-4 rounded-full w-full">
                    Choose Plan
                </button>
            </div>
        </div>


    );
}
