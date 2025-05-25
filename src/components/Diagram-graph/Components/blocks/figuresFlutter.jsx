export const figuresFlutter = [
  {
    id: "dropdown",
    label: "<b>dropdown</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
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
  },
  {
    id: "Scaffold",
    label: "<b>Scaffold</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
    content: ` 
<div class="max-w-sm mx-auto h-[850px] bg-white shadow-lg overflow-hidden mt-4">
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
    id: "card",
    label: "<b>card</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
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

  {
    id: "button-nav",
    label: "<b>Button nav</b>",
    category: "Buttons",
    attributes: { class: "gjs-block-section" },
    content: `<div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
  <div class="flex justify-around">
    <!-- Home -->
    <a href="#" class="flex flex-col items-center text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      <span class="text-xs mt-1">Home</span>
    </a>
    
    <!-- Search -->
    <a href="#" class="flex flex-col items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <span class="text-xs mt-1">Search</span>
    </a>
    
    <!-- Favorites -->
    <a href="#" class="flex flex-col items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      <span class="text-xs mt-1">Favorites</span>
    </a>
    
    <!-- Settings -->
    <a href="#" class="flex flex-col items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-xs mt-1">Settings</span>
    </a>
  </div>
</div>`,
  },

  {
    id: "button",
    label: "<b>Button</b>",
    category: "Buttons",
    attributes: { class: "gjs-block-section" },
    content: `<button
  class="
    bg-blue-500            /* fondo azul */
    text-white             /* texto blanco */
    font-medium            /* peso medio */
    rounded-full           /* bordes totalmente redondeados */
    px-4 py-2              /* padding horizontal y vertical */
    hover:bg-blue-600      /* azul más oscuro al pasar */
    focus:outline-none
    focus:ring-2 focus:ring-blue-300 focus:ring-offset-1  /* anillo de foco */
    transition-colors duration-150 ease-in-out
  "
>
  Botón Redondo
</button>`,
  },

  {
    id: "label",
    label: "<b>Label</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
    content: `<div class="w-full max-w-xs">
  <div class="relative">
    <input
      id="name"
      type="text"
      placeholder="Complete o escriba"
      class="
        block w-full px-4 py-2.5
        bg-[#FFFBFE]                     /* surface */
        border border-[#CFC9D1]         /* outline por defecto */
        rounded-[4px]                   /* radio 4px */
        text-[#1C1B1F]                  /* on-surface */
        placeholder:text-[#7A7580]      /* placeholder suave */
        focus:outline-none
        focus:border-[#6750A4]           /* outline en primary */
        focus:ring-2 focus:ring-[#EADDFF]/* anillo con primary-container */
        transition-colors duration-200 ease-in-out
      "
    />
    <!-- Label flotante (solo visual) -->
    <span
      class="absolute left-3 top-0 -translate-y-1/2 bg-[#FFFBFE] px-1 text-xs text-[#6750A4]"
    >
      Nombre
    </span>
  </div>
</div>`,
  },

  {
    id: "inputWithButton",
    label: "<b>Input + Botón</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
    content: `
    <div class="flex items-end space-x-4 w-full max-w-md">
      <!-- Campo de texto -->
      <div class="flex-1 flex flex-col">
        <label for="elemento" class="text-sm font-medium text-[#1C1B1F] mb-1">
          Elemento
        </label>
        <input
          id="elemento"
          type="text"
          placeholder=""
          class="
            w-full bg-transparent
            border-b border-gray-300
            text-[#1C1B1F] placeholder-[#7A7580]
            focus:outline-none focus:border-[#6750A4]
            focus:ring-0
            pb-1
          "
        />
      </div>
      <!-- Botón Agregar -->
      <button
        type="button"
        class="
          bg-blue-500
          text-white
          font-medium
          rounded-full
          px-4 py-2
          shadow-sm"
      >
        Agregar
      </button>
    </div>`,
  },
  {
    id: "text",
    label: "<b>Text</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
    content: `
    <div class="flex items-end space-x-4 w-full max-w-md">
      <p>Escriba</p>
    </div>`,
  },

  {
    id: "sidebar",
    label: "<b>Sidebar</b>",
    category: "Basicos",
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Sidebar Material 3 con Tailwind -->
    <aside class="w-64 h-screen bg-[#FFFBFE] border-r border-gray-200 p-4 flex flex-col">
      <!-- Logo / Título -->
      <div class="text-2xl font-semibold text-[#1C1B1F] mb-8">
        Mi App
      </div>
      <!-- Navegación -->
      <nav class="flex-1 space-y-2">
        <a href="#"
           class="flex items-center px-3 py-2 text-[#1C1B1F] rounded-[4px] hover:bg-[#EADDFF] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2L2 8h3v8h4V12h2v4h4V8h3L10 2z" />
          </svg>
          <span class="ml-3 font-medium">Dashboard</span>
        </a>
        <a href="#"
           class="flex items-center px-3 py-2 text-[#1C1B1F] rounded-[4px] hover:bg-[#EADDFF] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h3l2 2h7a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span class="ml-3 font-medium">Proyectos</span>
        </a>
        <a href="#"
           class="flex items-center px-3 py-2 text-[#1C1B1F] rounded-[4px] hover:bg-[#EADDFF] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10 2a1 1 0 011 1v.07a7 7 0 013.411 1.906l.05-.05a1 1 0 011.414 1.414l-.05.05A7 7 0 0116.93 9H17a1 1 0 110 2h-.07a7 7 0 01-1.906 3.411l.05.05a1 1 0 01-1.414 1.414l-.05-.05A7 7 0 0111 16.93V17a1 1 0 11-2 0v-.07a7 7 0 01-3.411-1.906l-.05.05a1 1 0 01-1.414-1.414l.05-.05A7 7 0 013.07 11H3a1 1 0 110-2h.07a7 7 0 011.906-3.411l-.05-.05a1 1 0 011.414-1.414l.05.05A7 7 0 019 3.07V3a1 1 0 011-1z"/>
          </svg>
          <span class="ml-3 font-medium">Ajustes</span>
        </a>
      </nav>
      <!-- Logout -->
      <div>
        <a href="#"
           class="flex items-center px-3 py-2 text-[#1C1B1F] rounded-[4px] hover:bg-[#EADDFF] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3 9a1 1 0 000 2h8v3l4-4-4-4v3H3z"/>
          </svg>
          <span class="ml-3 font-medium">Cerrar sesión</span>
        </a>
      </div>
    </aside>
  `,
  },

  {
  id: "tablaM3",
  label: "<b>Tabla M3</b>",
  category: "Básicos",
  attributes: { class: "gjs-block-section" },
  content: `
    <div class="overflow-x-auto rounded-lg shadow-[var(--md-sys-elevation-level1)]">
      <table class="min-w-full divide-y divide-gray-200">
        <!-- Encabezado -->
        <thead class="bg-[var(--md-sys-color-primary-container)]">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--md-sys-color-on-primary-container)]">ID</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--md-sys-color-on-primary-container)]">Nombre</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--md-sys-color-on-primary-container)]">Edad</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-[var(--md-sys-color-on-primary-container)]">Email</th>
          </tr>
        </thead>
        <!-- Filas -->
        <tbody class="bg-[var(--md-sys-color-surface)] divide-y divide-gray-200">
          <tr class="hover:bg-[var(--md-sys-color-primary-container)] hover:text-[var(--md-sys-color-on-primary-container)] transition-colors">
            <td class="px-6 py-4 whitespace-nowrap text-sm">1</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Ana Pérez</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">28</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">ana.perez@mail.com</td>
          </tr>
          <tr class="hover:bg-[var(--md-sys-color-primary-container)] hover:text-[var(--md-sys-color-on-primary-container)] transition-colors">
            <td class="px-6 py-4 whitespace-nowrap text-sm">2</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Luis Gómez</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">34</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">luis.gomez@mail.com</td>
          </tr>
          <tr class="hover:bg-[var(--md-sys-color-primary-container)] hover:text-[var(--md-sys-color-on-primary-container)] transition-colors">
            <td class="px-6 py-4 whitespace-nowrap text-sm">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">María López</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">22</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">maria.lopez@mail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
},

  
];
