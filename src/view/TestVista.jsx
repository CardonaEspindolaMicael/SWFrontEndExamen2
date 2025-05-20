import React from 'react'

export const TestVista = () => {
    return (
        <div className="p-4 text-black">
            <section className="max-w-screen-xl mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-t">
                        {/* Search */}
                        <div className="w-full md:w-1/2 relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-3 py-2 border rounded text-sm"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 4a4..." />
                                </svg>
                            </div>
                        </div>

                        {/* Add Button */}
                        <div className="flex justify-end">
                            <button type="button" id="createProductButton" data-modal-toggle="createProductModal" className="flex items-center just font-medium rounded-lg text-sm px-4 py-2  ">
                                <svg className="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add product
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="p-3">Product</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Stock</th>
                                    <th className="p-3">Sales/Month</th>
                                    <th className="p-3">Sales</th>
                                    <th className="p-3">Revenue</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-3 flex items-center gap-2">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" className="h-8" alt="Product" />
                                        <span>Apple iMac 27"</span>
                                    </td>
                                    <td className="p-3">
                                        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">Desktop PC</span>
                                    </td>
                                    <td className="p-3 flex items-center gap-2">
                                        <span className="inline-block h-3 w-3 rounded-full bg-red-600" />
                                        95
                                    </td>
                                    <td className="p-3">0.47</td>
                                    <td className="p-3 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="..." />
                                        </svg>
                                        2.6M
                                    </td>
                                    <td className="p-3">$3.2M</td>
                                    <td className="p-3 flex gap-2">
                                        <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                                        <button className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-3 flex items-center gap-2">
                                        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_992181-MRD81380578342_122024-T.webp" className="h-8" alt="Product" />
                                        I-Phone"
                                    </td>
                                    <td className="p-3">
                                        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">CellPhone</span>
                                    </td>
                                    <td className="p-3 flex items-center gap-2">
                                        <span className="inline-block h-3 w-3 rounded-full bg-red-600" />
                                        80
                                    </td>
                                    <td className="p-3">0.47</td>
                                    <td className="p-3 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="..." />
                                        </svg>
                                        2.6M
                                    </td>
                                    <td className="p-3">$3.2M</td>
                                    <td className="p-3 flex gap-2">
                                        <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                                        <button className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
