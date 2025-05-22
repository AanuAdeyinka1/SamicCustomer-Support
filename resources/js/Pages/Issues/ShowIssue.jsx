import React, { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ShowIssue = () => {
    const { issue } = usePage().props; // ✅ Fix here
    const { data, setData, post, processing, reset } = useForm({
        content: '',
    });
    const [openReply, setOpenReply] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('replies.store', { issue: issue.id }), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setOpenReply(false);
            },
        });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    // ✅ Avoid rendering if issue is undefined
    if (!issue) return <div>Loading...</div>;

    return (
        <AuthenticatedLayout>
            <div className='flex justify-center items-center mt-10 px-10'>
                <div className='p-10 bg-gray-50 text-black/100 mt-10 shadow-lg rounded-xl h-30 w-full'>
                    <p className='flex justify-center items-center font-bold text-xl'>
                        Title: {issue.title}
                    </p>
                    <p className='flex m-auto align-text-bottom items-center text-lg mt-7'>
                        <span className='font-bold text-xl mr-4'>Description:</span>
                        {issue.description}
                    </p>
                    <div className='flex justify-center mt-5 items-center'>
                        <span className='font-bold text-xl'>Status:</span>
                        <p className='text-lg ml-2'>{issue.status}</p>
                    </div>

                    {/* Replies Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Replies</h2>
                        {issue.replies && issue.replies.length > 0 ? (
                            issue.replies.map((reply) => (
                                <div key={reply.id} className="border-l-4 border-gray-200 pl-4 py-2 mb-4">
                                    <p className="font-medium">
                                        {reply.user ? reply.user.name : 'Unknown User'}
                                    </p>
                                    <p className="my-2">{reply.content}</p>
                                    <p className="text-sm text-gray-500">
                                        {formatDate(reply.created_at)}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No replies yet</p>
                        )}
                    </div>

                    <button
                        onClick={() => setOpenReply(true)}
                        className='bg-green-500 text-white px-4 py-2 m-auto flex rounded-md mt-4'
                    >
                        Reply
                    </button>

                    {/* Reply Modal */}
                    {openReply && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Add a reply..."
                                        rows="4"
                                        required
                                    />
                                    <div className="flex justify-end space-x-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpenReply(false)}
                                            className='bg-red-500 text-white px-4 py-2 rounded-md'
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                                        >
                                            {processing ? 'Posting...' : 'Post Reply'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowIssue;

