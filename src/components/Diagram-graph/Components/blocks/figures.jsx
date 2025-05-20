import { Category } from "grapesjs";

export const figuresGrape = [
  {
    id: 'section',
    label: '<b>Section</b>',
    category: 'Basicos',
    attributes: { class: 'gjs-block-section' },
    content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
  },
  {
    id: 'button-tailwind',
    label: 'Button',
    category: 'Basicos',
    content: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click me
              </button>`,
  },  
  {
    id: 'card-tailwind',
    label: 'Card',
    category: 'Basicos',
    content: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <img class="w-full" src="https://via.placeholder.com/300x150" alt="Card image">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Card Title</div>
                  <p class="text-gray-700 dark:text-gray-300 text-base">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>`,
  }
,  
{
  id: 'input-tailwind',
  label: 'Input',
  category: 'Basicos',
  content: `<input type="text" placeholder="Enter text" class="border border-gray-300 p-2 rounded w-full" />`,
}
,
{
  id: 'flex-container',
  label: 'Flex Container',
  category: 'Basicos',
  content: `<div class="flex gap-4">
              <div class="bg-gray-300 p-4 rounded">Item 1</div>
              <div class="bg-gray-400 p-4 rounded">Item 2</div>
            </div>`,
}
,
{
  id: 'alert-tailwind',
  label: 'Alert',
  category: 'Basicos',
  content: `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
              <p class="font-bold">Advertencia</p>
              <p>Este es un mensaje de alerta.</p>
            </div>`,
}
,
{
  id: 'testimonial',
  label: 'Testimonial',
  category: 'Basicos',
  content: `<div class="max-w-xl mx-auto text-center bg-white dark:bg-gray-800 p-6 rounded shadow">
              <p class="text-lg italic text-gray-600 dark:text-gray-300">"Un excelente servicio, muy recomendado!"</p>
              <div class="mt-4 font-bold text-gray-900 dark:text-white">Juan Pérez</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Cliente satisfecho</div>
            </div>`,
}
,
{
  id: 'divider',
  label: 'Divider',
  category: 'Basicos',
  content: `<hr class="my-6 border-gray-300 dark:border-gray-600" />`,
}
,
{
  id: 'hero-section',
  label: 'Hero',
  category: 'Basicos',
  content: `<section class="bg-gray-100 dark:bg-gray-900 py-20">
              <div class="max-w-7xl mx-auto px-4 text-center">
                <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Bienvenido</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">Esta es una hero section simple.</p>
                <a href="#" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Empezar</a>
              </div>
            </section>`,
}
,
{
  id: 'footer-tailwind',
  label: 'Footer',
  category: 'Basicos',
  content: `<footer class="bg-gray-800 text-white py-4">
              <div class="container mx-auto text-center">
                <p>&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
              </div>
            </footer>`,
}
,
  {
    id: 'text',
    label: 'Text',
    category: 'Basicos',
    content: '<div data-gjs-type="text">Insert your text here</div>',
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Basicos',
    select: true,
    content: { type: 'image' },
    activate: true,
  },
  {
    id: 'sidebar-container',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 17 17"><path d="M0 0h5v17h-5v-17z"></path></svg>
              <span>Sidebar Container</span>
            </div>`,
    category: 'Basicos',
    content: `<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <!-- Sidebar content goes here -->
              </div>
            </aside>`,
  },
  {
    id: 'sidebar-menu-item',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2a8.014 8.014 0 17.748 6.252z"></path></svg>
              <span>Menu Item</span>
            </div>`,
    category: 'Basicos',
    content: `<li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span class="ml-3">Menu Item</span>
              </a>
            </li>`,
  },
  {
    id: 'sidebar-dropdown',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span>Dropdown Menu</span>
            </div>`,
    category: 'Basicos',
    content: `<li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">Dropdown</span>
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-example" class="hidden py-2 space-y-2">
                <li>
                  <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Option 1</a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Option 2</a>
                </li>
              </ul>
            </li>`,
  },
  {
    id: 'sidebar-section',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              <span>Sidebar Section</span>
            </div>`,
    category: 'Basicos',
    content: `<ul class="space-y-2">
              <!-- Menu items go here -->
            </ul>`,
  },
  {
    id: 'crud-search',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span>Search Field</span>
            </div>`,
    category: 'Basicos',
    content: `<div class="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search..."
                class="w-full pl-10 pr-3 py-2 border rounded text-sm"
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
            </div>`,
  },
  {
    id: 'crud-add-button',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 20 20"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" /></svg>
              <span>Add Button</span>
            </div>`,
    category: 'Basicos',
    content: `<button type="button" class="flex items-center font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
              <svg class="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
              Add item
            </button>`,
  },
  {
    id: 'crud-table',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 9H21M3 15H21M9 9L9 20M15 9L15 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>Table Basic</span>
            </div>`,
    category: 'Basicos',
    content: `<div class="overflow-x-auto">
              <table class="w-full text-sm text-left">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-3"><input type="checkbox" /></th>
                    <th class="p-3"><span>Column 1</span></th>
                    <th class="p-3"><span>Column 2</span></th>
                    <th class="p-3"><span>Column 3</span></th>
                    <th class="p-3"><span>Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t">
                    <td class="p-3"><input type="checkbox" /></td>
                    <td class="p-3">Data 1</td>
                    <td class="p-3">Data 2</td>
                    <td class="p-3">Data 3</td>
                    <td class="p-3 flex gap-2">
                      <button class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                      <button class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>`,
  },
  {
    id: 'crud-table-row',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 15H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>Table Row</span>
            </div>`,
    category: 'Basicos',
    content: `<tr class="border-t">
              <td class="p-3"><input type="checkbox" /></td>
              <td class="p-3 flex items-center gap-2">
                <img src="/api/placeholder/50/50" class="h-8" alt="Item" />
                <span>Item name</span>
              </td>
              <td class="p-3">
                <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">Category</span>
              </td>
              <td class="p-3 flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full bg-red-600"></span>
                <span>100</span>
              </td>
              <td class="p-3 flex gap-2">
                <button class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                <button class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
              </td>
            </tr>`,
  },
  {
    id: 'crud-badge',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>Badge</span>
            </div>`,
    category: 'Basicos',
    content: `<span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">Badge</span>`,
  },
  {
    id: 'crud-status-indicator',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ff0000"></circle></svg>
              <span>Status Indicator</span>
            </div>`,
    category: 'Basicos',
    content: `<div class="flex items-center gap-2">
              <span class="inline-block h-3 w-3 rounded-full bg-red-600"></span>
              <span>Status Text</span>
            </div>`,
  },
  {
    id: 'crud-action-buttons',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
              <svg width="32" height="32" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>Action Buttons</span>
            </div>`,
    category: 'Basicos',
    content: `<div class="flex gap-2">
              <button class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
              <button class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
            </div>`,
  },
  {
    id: 'Header1',
    label:  `<div style="display: flex; flex-direction: column; align-items: center;">
<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.216 16.216" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#030104;" d="M15.367,0H0.848C0.381,0,0.001,0.38,0.001,0.848v14.52c0,0.468,0.38,0.848,0.847,0.848h14.519 c0.468,0,0.848-0.38,0.848-0.848V0.847C16.215,0.38,15.835,0,15.367,0z M13.724,0.955c0.631,0,1.144,0.512,1.144,1.144 c0,0.631-0.513,1.143-1.144,1.143c-0.632,0-1.144-0.512-1.144-1.143C12.58,1.467,13.092,0.955,13.724,0.955z M10.677,0.955 c0.632,0,1.144,0.512,1.144,1.144c0,0.631-0.512,1.143-1.144,1.143c-0.631,0-1.143-0.512-1.143-1.143 C9.534,1.467,10.046,0.955,10.677,0.955z M14.944,14.943H1.273V4.026h13.671V14.943z M7.868,2.624H1.405V1.405h6.464v1.219H7.868z"></path> </g> </g></svg></div>`,
    category: 'Header',
    content: `<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Diagram</span>
            </a>
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
</header>
`,
  },
  {
    id: 'Login1',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1"   viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M511.489,20.065C509.128,8.518,498.662,0,486.881,0h-76.96c-4.428,0-8.017,3.588-8.017,8.017 c0,4.428,3.588,8.017,8.017,8.017h76.96c4.953,0,9.086,4.127,9.086,9.086v60.392H16.033V25.119c0-4.953,4.133-9.086,9.086-9.086 h342.046c4.428,0,8.017-3.588,8.017-8.017c0-4.428-3.588-8.017-8.017-8.017H25.119C11.429,0,0,11.423,0,25.119v324.944 c0,4.428,3.589,8.017,8.017,8.017c4.427,0,8.017-3.588,8.017-8.017V101.545h479.933v385.336c0,5.01-4.076,9.086-9.086,9.086 H25.119c-5.01,0-9.086-4.076-9.086-9.086v-94.063c0-4.428-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.588-8.017,8.017v94.063 C0,500.732,11.268,512,25.119,512h461.762C500.732,512,512,500.732,512,486.881V25.119C512,23.422,511.829,21.721,511.489,20.065z "></path> </g> </g> <g> <g> <path d="M67.875,25.653c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119s25.119-11.268,25.119-25.119 C92.994,36.922,81.725,25.653,67.875,25.653z M67.875,59.858c-5.01,0-9.086-4.076-9.086-9.086c0-5.01,4.076-9.086,9.086-9.086 c5.01,0,9.086,4.076,9.086,9.086C76.96,55.782,72.885,59.858,67.875,59.858z"></path> </g> </g> <g> <g> <path d="M136.284,25.653c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119 s25.119-11.268,25.119-25.119C161.403,36.922,150.135,25.653,136.284,25.653z M136.284,59.858c-5.01,0-9.086-4.076-9.086-9.086 c0-5.01,4.076-9.086,9.086-9.086s9.086,4.076,9.086,9.086C145.37,55.782,141.294,59.858,136.284,59.858z"></path> </g> </g> <g> <g> <path d="M204.693,25.653c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119 s25.119-11.268,25.119-25.119C229.812,36.922,218.544,25.653,204.693,25.653z M204.693,59.858c-5.01,0-9.086-4.076-9.086-9.086 c0-5.01,4.076-9.086,9.086-9.086s9.086,4.076,9.086,9.086C213.779,55.782,209.703,59.858,204.693,59.858z"></path> </g> </g> <g> <g> <path d="M384.267,350.597H136.284c-4.427,0-8.017,3.588-8.017,8.017v34.205c0,4.428,3.589,8.017,8.017,8.017h247.983 c4.428,0,8.017-3.588,8.017-8.017v-34.205C392.284,354.185,388.696,350.597,384.267,350.597z M376.251,384.802h-231.95V366.63 h231.95V384.802z"></path> </g> </g> <g> <g> <path d="M384.267,419.006H136.284c-4.427,0-8.017,3.588-8.017,8.017v34.205c0,4.428,3.589,8.017,8.017,8.017h247.983 c4.428,0,8.017-3.588,8.017-8.017v-34.205C392.284,422.595,388.696,419.006,384.267,419.006z M376.251,453.211h-231.95V435.04 h231.95V453.211z"></path> </g> </g> <g> <g> <path d="M461.228,42.756h-17.102c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h17.102 c4.428,0,8.017-3.588,8.017-8.017C469.244,46.344,465.656,42.756,461.228,42.756z"></path> </g> </g> <g> <g> <path d="M418.472,42.756H290.205c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h128.267 c4.428,0,8.017-3.588,8.017-8.017C426.489,46.344,422.9,42.756,418.472,42.756z"></path> </g> </g> <g> <g> <path d="M307.307,196.676h-0.534v-26.188c0-23.281-18.941-42.221-42.221-42.221h-17.102c-23.281,0-42.221,18.941-42.221,42.221 v8.551c0,4.428,3.589,8.017,8.017,8.017s8.017-3.588,8.017-8.017v-8.551c0-14.441,11.748-26.188,26.188-26.188h17.102 c14.441,0,26.188,11.747,26.188,26.188v26.188h-86.046c-13.851,0-25.119,11.268-25.119,25.119v102.614 c0,4.428,3.589,8.017,8.017,8.017h136.818c4.428,0,8.017-3.588,8.017-8.017V221.795 C332.426,207.945,321.158,196.676,307.307,196.676z M316.393,316.393H195.608v-94.597c0-5.01,4.076-9.086,9.086-9.086h102.614 c5.01,0,9.086,4.076,9.086,9.086V316.393z"></path> </g> </g> <g> <g> <path d="M256,230.881c-13.851,0-25.119,11.268-25.119,25.119c0,11.048,7.172,20.446,17.102,23.8v18.956 c0,4.428,3.589,8.017,8.017,8.017c4.428,0,8.017-3.588,8.017-8.017V279.8c9.93-3.354,17.102-12.752,17.102-23.8 C281.119,242.149,269.851,230.881,256,230.881z M256,265.086c-5.01,0-9.086-4.076-9.086-9.086s4.076-9.086,9.086-9.086 s9.086,4.076,9.086,9.086S261.01,265.086,256,265.086z"></path> </g> </g> </g></svg>
            </div>`,
    category: 'Login',
    content: `<div> <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Diagram   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
`,
  },
  {
    id: 'Hero1',
    label:  `<div style="display: flex; flex-direction: column; align-items: center;">
<svg fill="#100f0f" viewBox="-5 -5 35 40"  height="200px" width="200px" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.5 15c-.797 0-1.456.314-1.88.793-.424.48-.62 1.098-.62 1.707 0 .78-.568 1.418-.81 1.607-.372.294-.165.892.31.893H17c.786 0 1.517-.23 2.072-.662.555-.432.928-1.09.928-1.838 0-.683-.193-1.32-.63-1.785C18.93 15.25 18.273 15 17.5 15zm0 1c.57 0 .914.16 1.14.4.227.24.36.602.36 1.1 0 .432-.19.776-.54 1.05-.353.272-.872.45-1.46.45h-1.423c.237-.4.422-.9.422-1.5 0-.39.13-.772.368-1.043.24-.27.583-.457 1.132-.457zM29.284 5.01c-.126.015-.233.048-.352.09-.238.08-.513.21-.838.374-.65.33-1.477.813-2.35 1.365-1.75 1.103-3.66 2.457-4.642 3.438-.935.934-1.616 1.784-1.936 2.637-.32.852-.186 1.777.478 2.44.665.665 1.59.8 2.442.48.853-.32 1.703-1.002 2.637-1.936.98-.983 2.335-2.893 3.44-4.64.552-.876 1.035-1.704 1.365-2.353.165-.324.293-.6.375-.838.04-.12.072-.226.086-.352.013-.126.047-.327-.167-.54-.214-.215-.413-.18-.54-.167zm-.647 1.444c-.307.603-.78 1.416-1.32 2.27-1.08 1.713-2.46 3.628-3.3 4.468-.888.887-1.678 1.48-2.283 1.707-.604.225-.954.177-1.383-.25-.427-.43-.475-.78-.25-1.384.228-.604.82-1.394 1.71-2.28.84-.84 2.754-2.22 4.466-3.3.856-.542 1.668-1.015 2.272-1.322.134-.036.13.022.09.09zM2.5 8h17c.277 0 .5.223.5.5s-.223.5-.5.5h-17c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5c0 .276-.224.5-.5.5S6 6.776 6 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S4 6.776 4 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S2 6.776 2 6.5s.224-.5.5-.5.5.224.5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h25c.822 0 1.5-.678 1.5-1.5v-12c0-.668-1-.665-1 0v12c0 .286-.214.5-.5.5h-25c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h25c.665 0 .657-1 0-1z"></path></g></svg>                </div>`,
    category: 'Hero',
    content: `<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Flowbite is out! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
<div class="flex justify-around items-center mt-8 text-gray-500">
    <a href="#" class="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
        <img class="h-20 w-20 object-contain" src="https://images.icon-icons.com/2389/PNG/512/product_hunt_logo_icon_144963.png">
        <span class="ml-4 text-lg font-semibold">Product Hunt</span>                                              
    </a>
    <a href="#" class="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
        <img class="h-20 w-20 object-contain" src="https://static-00.iconduck.com/assets.00/reddit-fill-logo-icon-256x256-3z8kcz41.png">
        <span class="ml-4 text-lg font-semibold">Reddit</span>                                            
    </a>         
</div>

      
</div>

        </div> 
    </div>
</section>
`,
  },
  {
    id:'Sidebar1',
    label:`<div style="display: flex; flex-direction: column; align-items: center;">
    <<svg width="200" height="200" viewBox="0 0 17 17" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h5v17h-5v-17zM7 17h1v-1h-1v1zM14.222 17h0.889v-1h-0.889v1zM12.444 17h0.889v-1h-0.889v1zM8.889 17h0.889v-1h-0.889v1zM10.667 17h0.889v-1h-0.889v1zM16 17h1v-1h-1v1zM16 3h1v-1h-1v1zM16 15h1v-1h-1v1zM16 7h1v-1h-1v1zM16 5h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 0v1h1v-1h-1zM14.223 1h0.889v-1h-0.889v1zM12.445 1h0.889v-1h-0.889v1zM10.667 1h0.889v-1h-0.889v1zM8.889 1h0.889v-1h-0.889v1zM7 1h1v-1h-1v1zM7 15h1v-1h-1v1zM7 13h1v-1h-1v1zM7 7h1v-1h-1v1zM7 11h1v-1h-1v1zM7 5h1v-1h-1v1zM7 3h1v-1h-1v1zM7 9h1v-1h-1v1z" fill="#000000"></path> </g></svg>
</div>`,
    category:'Sidebar',
    content:`<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
  <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                  </li>
              </ul>
          </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Docs</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-3">Components</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Help</span>
              </a>
          </li>
      </ul>
  </div>
  <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
      <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
      </a>
      <a href="#" data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
      </a>
      <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Settings page
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
      </button>
      <!-- Dropdown -->
      <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
        <ul class="py-1" role="none">
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                  <g fill-rule="evenodd">
                    <g stroke-width="1pt">
                      <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                      <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                    </g>
                    <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                    <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
                  </g>
                </svg>              
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                  <defs>
                    <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/>
                  </defs>
                  <path fill="#de2910" d="M0 0h512v512H0z"/>
                  <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"/>
                  <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"/>
                </svg>
                中文 (繁體)
              </div>
            </a>
          </li>
        </ul>
      </div>
  </div>
</aside>`
  },
  {
    id:'Crud1',
    label: `<div style="display: flex; flex-direction: column; align-items: center;">
<svg width="200" height="200" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M3 15H21M9 9L9 20M15 9L15 20M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                </div>`,
    category:'Cruds',
    content:`<div class="p-4 text-black">
  <section class="max-w-screen-xl mx-auto">
    <div class="bg-white shadow rounded overflow-hidden">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-t">
        <!-- Search -->
        <div class="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-10 pr-3 py-2 border rounded text-sm"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 4a4..." />
            </svg>
          </div>
        </div>

        <!-- Add Button -->
        <div class="flex justify-end">
          <button type="button" id="createProductButton" class="flex items-center just font-medium rounded-lg text-sm px-4 py-2">
            <svg class="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
            Add product
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3">
                <input type="checkbox" />
              </th>
              <th class="p-3"><span>Product</span></th>
              <th class="p-3"><span>Category</span></th>
              <th class="p-3"><span>Stock</span></th>
              <th class="p-3"><span>Sales/Month</span></th>
              <th class="p-3"><span>Sales</span></th>
              <th class="p-3"><span>Revenue</span></th>
              <th class="p-3"><span>Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="p-3">
                <input type="checkbox" />
              </td>
              <td class="p-3 flex items-center gap-2">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" class="h-8" alt="Product" />
                 <span>Apple iMac 27"</span>
              </td>
              <td class="p-3">
                <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">Desktop PC</span>
              </td>
              <td class="p-3 flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full bg-red-600"></span>
                <span>95</span>
              </td>
              <td class="p-3"><span>0.47</span></td>
              <td class="p-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
                <span>2.6M</span>
              </td>
              <td class="p-3"> <span>$3.2M</span></td>
              <td class="p-3 flex gap-2">
                <button class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                <button class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3">
                <input type="checkbox" />
              </td>
              <td class="p-3 flex items-center gap-2">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_992181-MRD81380578342_122024-T.webp" class="h-8" alt="Product" />
                 <span>I-Phone</span>
              </td>
              <td class="p-3">
                <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">CellPhone</span>
              </td>
              <td class="p-3 flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full bg-red-600"></span>
                <span>80</span>
              </td>
              <td class="p-3"><span>1.5</span></td>
              <td class="p-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
                 <span>3.6M</span>
              </td>
              <td class="p-3"><span>$6.2M</span></td>
              <td class="p-3 flex gap-2">
                <button class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Edit</button>
                <button class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
`
  }
]


