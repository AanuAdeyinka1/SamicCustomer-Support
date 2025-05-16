import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'

export default function Form() {
  
   const [values, setValues] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    
    
  })

  const [showForm, setShowForm] = useState(false);
  const { processing, post} = useForm();
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/newDashboard', values)
    

    
  }

  return (
    <div className="relative">
      <button
        onClick={openForm}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Open Form
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">How may we help you ?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  id='name'
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  id='email'
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

               <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  id='title'
                  onChange={handleChange}
                  type="text"
                  value={values.title}
                  placeholder="Issue title?"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

               <div>
                <label className="block text-sm font-medium">How would you describe your issue ?</label>
                <textarea
                  id='description'
                  onChange={handleChange}
                  value={values.issue}      
                  type="text"
                  placeholder="Enter your issue"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              {/* <div>
               <label className="block text-sm font-medium">Status</label>
                <input
                  id='status'
                  onChange={handleChange}
                  type="text"
                  value={values.status}
                  
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div> */}

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
