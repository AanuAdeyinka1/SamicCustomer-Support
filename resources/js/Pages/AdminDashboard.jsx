import React from 'react'
import { usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';


const AdminDashboard = ({ issues = {}}) => {

    const user = usePage().props.auth.user;
    
  return (
    <AuthenticatedLayout>
      
    {issues.map((issue) => (
      <Link
        href={route('issues.show', issue.id )}
        
        key={issue.id}
       
        className='flex justify-center items-center mt-10 px-10'
      >
        
        <div className='p-10 w-100 bg-gray-50 text-black/100  mt-10 shadow-lg rounded-xl h-50 w-full'>
          <p className='bg-gray-300 w-2'>{issue.user_id}</p>
          <p className='flex justify-center items-center font-bold text-xl'>Title: {issue.title}</p>
          <p className='flex m-auto align-text-bottom items-center text-lg'>
            <span className='font-bold text-xl mr-4'>Description:</span> {issue.description}
          </p>
          <div className='flex justify-center mt-5 items-center'>
            <span className='font-bold text-xl '> Status: </span>
            <p className='text-lg'>{issue.status}</p>
          </div>
          {/* <Pagination links={issues.links} meta={issues.meta} /> */}
        </div>
      </Link>

      
    ))}
    {/* Pagination Links */}
            {/* <div className="flex space-x-2 mt-4">
                {issues.links.map((link, issues) => (
                    <Link
                        key={issues}
                        href={link.url || '#'}
                        className={`px-3 py-1 rounded ${
                            link.active ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div> */}
    </AuthenticatedLayout>
  
  )
}

export default AdminDashboard