import React from 'react'
import { usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const AdminDashboard = ( { issue ={}} ) => {

    const user = usePage().props.auth.user;
    const {title, description, status} = issue
  return (
    <DashboardLayout>
    <div>
        <p>{user}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{status}</p>
    
    </div>
    </DashboardLayout>
  
  )
}

export default AdminDashboard