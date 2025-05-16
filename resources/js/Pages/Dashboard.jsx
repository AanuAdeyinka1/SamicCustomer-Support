import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import Form from '@/Components/Form';

export default function Dashboard({children}) {
 const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-green-400">
                        <div className="p-6 text-gray-100 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-center text-gray-800 dark:text-gray-800 mt-6">
                        Welcome to the Customer Support, {user.name}! We are here to help you with your queries and issues.
                    </h1>
                    <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
                        This is where you can manage your account and settings.
                    </p>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-center text-gray-800 dark:text-gray-800 mt-6">
                        Please click the button below to submit your query or issue.
                    </h1>
                    <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
                        We will get back to you as soon as possible.
                    </p>
                    <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
                        Thank you for choosing us!
                    </p>
                    <div className=" flex justify-center items-center" >
                         <Form />
                    </div>
                   
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
