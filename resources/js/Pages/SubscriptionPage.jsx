import Dropdown from '@/Components/Dropdown';
import SubscriptionPlans from '@/Components/SubscriptionPlans';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/react'

const SubscriptionPage = ({ plans }) => {

    const user = usePage().props.auth.user;
    const prices = [29.99, 99.99]

    const handleSubscribe = (planId) => {
        // Make a POST request to the subscribe route
        Inertia.post(route('subscribe'), { planId });
    };

    return (
        <>
            <AuthenticatedLayout subscribed={false}>
                <Head title='Subsciption Plans' />
                <div className="max-w-screen-lg mx-auto px-4 py-10">
                    <div className="text-center mb-12 text-white">
                        <h2 className="text-3xl font-bold">Choose your plan</h2>
                        <p className="mt-2">Choose the plan that’s right for you</p>
                    </div>
                    <div className="flex justify-center space-x-8">
                        {plans?.map((plan, index) => (
                            <SubscriptionPlans key={plan.id} plan={plan} prices={prices} index={index} handleSubscribe={handleSubscribe} />
                        ))}
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
export default SubscriptionPage;
