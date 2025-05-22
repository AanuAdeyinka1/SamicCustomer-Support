import React from 'react';
import { router } from '@inertiajs/react';

export default function Pagination({ links = [], meta = {} }) {
    // Provide default values if meta is undefined
    const { from = 0, to = 0, total = 0, current_page = 1, last_page = 1 } = meta;

    return (
        <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
                Showing {from} to {to} of {total} results
            </div>
            
            <div className="flex space-x-1">
                {links.map((link, index) => (
                    <button
                        key={index}
                        onClick={() => link.url && router.get(link.url)}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-3 py-1 rounded ${
                            link.active
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                ))}
            </div>
        </div>
    )}