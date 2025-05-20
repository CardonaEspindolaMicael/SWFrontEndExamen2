export const figuresFlutter= [
      {
    id: 'dropdown',
    label: '<b>dropdown</b>',
    category: 'Basicos',
    attributes: { class: 'gjs-block-section' },
    content: `      <!-- Dropdown Menu -->
      <li class="mx-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
        <div class="flex items-center justify-between cursor-pointer">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span class="ml-3">Projects</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <!-- Dropdown Content -->
        <ul class="ml-6 mt-2 space-y-1">
          <li class="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Project Alpha</li>
          <li class="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Project Beta</li>
          <li class="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Project Gamma</li>
        </ul>
      </li>`,
  },    {
    id: 'Scaffold',
    label: '<b>Scaffold</b>',
    category: 'Basicos',
    attributes: { class: 'gjs-block-section' },
    content: ` 
<div class="max-w-sm mx-auto h-[850px] bg-white rounded-2xl shadow-lg overflow-hidden mt-4">
  <!-- Header -->
  <div class="bg-blue-600 text-white p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <button class="mr-4 focus:outline-none">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span class="text-lg font-semibold">CRM System</span>
      </div>
      <div>
        <span id="iqkj4">12:00</span>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-5 w-5 inline-block ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.105 0-2-.9-2-2v-3h-3a2 2 0 00-2-2H5a2 2 0 01-2-2V5z" />
        </svg>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-5 w-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Client Info -->
  <div class="p-4">
    <div class="flex items-center">
      <svg fill="currentColor" viewBox="0 0 20 20" class="h-10 w-10 text-gray-500 mr-2">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
      <span class="text-lg font-medium">Lorem client</span>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 ml-auto text-green-500">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.105 0-2-.9-2-2v-3h-3a2 2 0 00-2-2H5a2 2 0 01-2-2V5z" />
      </svg>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 ml-2 text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.512 9-5.458 9-3.947 0-6.733-4.943-8.007-9z" />
      </svg>
    </div>
  </div>

  <!-- Task List -->
  <div class="flex flex-col justify-between">
    <!-- Repeat this block for each task -->
    <div class="bg-blue-400 text-white rounded-xl p-4">
      <div class="flex items-center justify-between mb-2">
        <div>
          <div class="flex items-center">
            <div class="rounded-full bg-green-400 w-2 h-2 mr-2"></div>
            <span class="text-sm">08 Jun 2019</span>
          </div>
          <span class="block font-medium">Create banner</span>
        </div>
        <div>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 inline-block text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6c-2.475 0-4.544 1.977-5.352 4.627A6.004 6.004 0 004 11v3.158c0 .538-.214 1.055-.595 1.436L4 17h5" />
          </svg>
        </div>
      </div>
    </div>
    <!-- End repeat -->
  </div>
</div>

`,
  },

        {
    id: 'card',
    label: '<b>card</b>',
    category: 'Basicos',
    attributes: { class: 'gjs-block-section' },
    content: `   <div class="bg-blue-400 text-white rounded-xl p-4 mx-4 my-2">
    <div class="flex items-center justify-between mb-2">
      <div>
        <div class="flex items-center">
          <div class="rounded-full bg-green-400 w-2 h-2 mr-2"></div>
          <span class="text-sm">08 Jun 2019</span>
        </div>
        <span class="block font-medium">Create banner</span>
      </div>
      <div>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
         class="h-6 w-6 inline-block text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6c-2.475 0-4.544 1.977-5.352 4.627A6.004 6.004 0 004 11v3.158c0 .538-.214 1.055-.595 1.436L4 17h5">
          </path>
        </svg>
      </div>
    </div>
  </div>`,
  }, 

  


]