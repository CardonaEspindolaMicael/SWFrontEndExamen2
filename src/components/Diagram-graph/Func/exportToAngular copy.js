 const angularFile = {
  'tsconfig.json': `

  /* To learn more about this file see: https://angular.io/config/tsconfig. */
  {
    "compileOnSave": false,
    "compilerOptions": {
      "outDir": "./dist/out-tsc",
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "noImplicitOverride": true,
      "noPropertyAccessFromIndexSignature": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "esModuleInterop": true,
      "sourceMap": true,
      "declaration": false,
      "downlevelIteration": true,
      "experimentalDecorators": true,
      "moduleResolution": "node",
      "importHelpers": true,
      "target": "ES2022",
      "module": "ES2022",
      "useDefineForClassFields": false,
      "lib": ["ES2022", "dom"]
    },
    "angularCompilerOptions": {
      "enableI18nLegacyMessageIdFormat": false,
      "strictInjectionParameters": true,
      "strictInputAccessModifiers": true,
      "strictTemplates": true
    }
  }`,
  'tsconfig.app.json': `{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": []
  },
  "files": ["src/main.ts"],
  "include": ["**/*.d.ts"]
}`,
  'tailwind.config.js':`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
  'package.json': `{
  "name": "2jjwzs--run",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "@angular/animations": "18.0.6",
    "@angular/common": "18.0.6",
    "@angular/compiler": "18.0.6",
    "@angular/core": "18.0.6",
    "@angular/forms": "18.0.6",
    "@angular/platform-browser": "18.0.6",
    "@angular/platform-browser-dynamic": "18.0.6",
    "@angular/router": "18.0.6",
    "@ngrx/effects": "18.0.1",
    "@ngrx/store": "18.0.1",
    "@ngrx/store-devtools": "18.0.1",
    "rxjs": "7.8.1",
    "tslib": "2.6.3",
    "zone.js": "0.14.7"
  },
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "18.0.6",
    "@angular-devkit/core": "18.0.6",
    "@angular-devkit/schematics": "18.0.6",
    "@angular/cli": "18.0.6",
    "@angular/compiler-cli": "18.0.6",
    "@schematics/angular": "18.0.6",
    "@types/jasmine": "5.1.4",
    "@types/node": "20.11.30",
    "autoprefixer": "^10.4.21",
    "jasmine-core": "5.1.2",
    "jasmine-spec-reporter": "7.0.0",
    "karma": "6.4.3",
    "karma-chrome-launcher": "3.2.0",
    "karma-coverage": "2.2.1",
    "karma-jasmine": "5.1.0",
    "karma-jasmine-html-reporter": "2.1.0",
    "postcss": "^8.5.3",
    "protractor": "7.0.0",
    "tailwindcss": "^3.4.17",
    "ts-node": "10.9.2",
    "typescript": "5.4.5"
  }
}
`,
  'angular.json': `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "cli": {
    "analytics": "1e1de97b-a744-405a-8b5a-0397bb3d01ce"
  },
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "configurations": {
            "development": {
              "extractLicenses": false,
              "namedChunks": true,
              "optimization": false,
              "sourceMap": true
            },
            "production": {
              "aot": true,
              "extractLicenses": true,
              "namedChunks": false,
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false
            }
          },
          "options": {
            "assets": [],
            "index": "src/index.html",
            "browser": "src/main.ts",
            "outputPath": "dist/demo",
            "scripts": [],
            "styles": ["src/styles.css"],
            "tsConfig": "tsconfig.app.json"
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "development": {
              "buildTarget": "demo:build:development"
            },
            "production": {
              "buildTarget": "demo:build:production"
            }
          },
          "defaultConfiguration": "development"
        }
      },
      "prefix": "app",
      "projectType": "application",
      "root": "",
      "schematics": {},
      "sourceRoot": "src"
    }
  },
  "version": 1
}`,
  'src/styles.css': `
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  margin: 1rem;
}`,
  'src/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

import 'zone.js';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

bootstrapApplication(AppComponent, appConfig);
console.clear();`,
  'src/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My app</title>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <app-root>Loading...</app-root>
  </body>
</html>`,
  'src/app.component.html': `<app-nav-bar />
<div class="max-w-screen-xl mx-6 xl:mx-auto">
  <router-outlet></router-outlet>
</div>`,
  'src/app.component.ts': `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/components/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {}`,
  'src/core/components/nav-bar.component.ts': `import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: 'nav-bar.component.html',
})
export class NavBarComponent {}`,


  'src/features/hola-mundo/hola-mundo.component.ts': `import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.component.html',
})
export class HolaMundoComponent {}`,
  'src/features/hola-mundo/hola-mundo.component.html': `<p>
  ¡Hola mundo funciona!
</p>`
};

// Esta función integrará las páginas de GrapesJS al template de Angular
 const generateAngularFiles = (pagesData) => {
  // Clonar la estructura base para evitar modificar el original
  const generatedFiles = { ...angularFile };
  
  // Componentes a generar de las páginas GrapesJS
  const newComponents = [];
  
  // Generar archivos de componentes para cada página
  pagesData.forEach(page => {
    if (!page.name || !page.html) return;
    
    // Generar nombre de componente en kebab-case (ej: "Home Page" -> "home-page")
    const componentName = page.name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Evitar nombres de componentes existentes
    if (componentName === 'hola-mundo') {
      return;
    }
    
    // Generar nombre de clase PascalCase (ej: "home-page" -> "HomePageComponent")
    const className = componentName.split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Component';
    
    // Crear HTML del componente con el HTML de GrapesJS
    generatedFiles[`src/features/${componentName}/${componentName}.component.html`] = page.html;
    
    // Crear archivo TypeScript del componente
    generatedFiles[`src/features/${componentName}/${componentName}.component.ts`] = `import { Component } from '@angular/core';

@Component({
  selector: 'app-${componentName}',
  standalone: true,
  imports: [],
  templateUrl: './${componentName}.component.html',
})
export class ${className} {}`;
    
    // Añadir a la lista de nuevos componentes
    newComponents.push({
      path: componentName,
      className: className
    });
  });
  
  // Actualizar rutas si hay nuevos componentes
  if (newComponents.length > 0) {
    // Generar archivo de rutas
    generatedFiles['src/app.routes.ts'] = generateRoutes(newComponents);
    
    // Generar navbar con los nuevos componentes
    generatedFiles['src/core/components/nav-bar.component.html'] = generateNavbar(newComponents);
  } else {
    // Si no hay nuevos componentes, usar los existentes
    generatedFiles['src/app.routes.ts'] = `import { Routes } from '@angular/router';
import { HolaMundoComponent } from './features/hola-mundo/hola-mundo.component';

export const routes: Routes = [
  { path: 'hola-mundo', component: HolaMundoComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
];`;
    
    generatedFiles['src/core/components/nav-bar.component.html'] = `<div class="join justify-center flex my-4">
  <button class="btn btn-info join-item" routerLink="hola-mundo" routerLinkActive="btn-active">hola mundo</button>
</div>`;
  }
  
  return generatedFiles;
};

// Función para generar el archivo de rutas
function generateRoutes(newComponents) {
  // Imports de componentes existentes
  let imports = `import { Routes } from '@angular/router';
import { HolaMundoComponent } from './features/hola-mundo/hola-mundo.component';`;

  // Añadir imports para los nuevos componentes
  newComponents.forEach(comp => {
    imports += `\nimport { ${comp.className} } from './features/${comp.path}/${comp.path}.component';`;
  });

  // Rutas existentes
  let routes = `\n\nexport const routes: Routes = [
  { path: 'hola-mundo', component: HolaMundoComponent },`;

  // Añadir nuevas rutas
  newComponents.forEach(comp => {
    routes += `\n  { path: '${comp.path}', component: ${comp.className} },`;
  });

  // Cerrar la definición de rutas
  routes += `\n  { path: '', redirectTo: 'shop', pathMatch: 'full' },\n];`;

  return imports + routes;
}

// Función para generar la barra de navegación
function generateNavbar(newComponents) {
  let navbarHtml = `<div class="join justify-center flex my-4">
  <button class="btn btn-info join-item" routerLink="hola-mundo" routerLinkActive="btn-active">hola mundo</button>`;

  // Añadir botones para nuevos componentes
  newComponents.forEach(comp => {
    const displayName = comp.path.replace(/-/g, ' ');
    navbarHtml += `\n  <button class="btn btn-info join-item" routerLink="${comp.path}" routerLinkActive="btn-active">${displayName}</button>`;
  });

  navbarHtml += '\n</div>';
  return navbarHtml;
}