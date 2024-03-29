## Add Angular
    yarn add @angular/cli
## Create Angular app 
    ng new app-name --skip-install
    cd ./app-name
    npm i  //loooong -> yarn install
## Runn server
    ng serve
## To open
    http://localhost:4200
## Add tailwind
    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init
   ## tw.config
	content: ["./src/**/*.{html,ts}"],
   ## in style.scss
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

## Create component
    ng g component views/pages/compName
    ng g component views/shared/header
	
	ng g service services/servName

  yarn add @auth0/angular-jwt
    
## TO START APP
    cd ./ang-start
    ng serve

## Router
const routes: Routes = [{path: '',component: HomeComponent}];
<router-outlet></router-outlet>
routerLink="/register" 
[routerLinkActive]="['active']"

// Deploy
yarn add angular-cli-ghpages@1
ng build --configuration production --base-href "https://4svEXE.github.io/okeyPostAngular/"

angular-cli-ghpages --dir=dist/okey-post


ng g component views/shared/main-button --skip-tests
ng g component pages/home --skip-tests


ng g c pages/home --skip-tests
ng g c shared/components/main-button --skip-tests
ng g c shared/components/input --skip-tests
ng g c shared/components/validation-errors --skip-tests
ng g c shared/components/select --skip-tests
ng g c shared/components/a-button --skip-tests

ng g c shared/components/filter-button --skip-tests

ng g directive core/directives/control-value-accessor --skip-tests

ng g m pages

ng g module pages/auth/auth
ng g c pages/auth/register
ng g c pages/auth/login --skip-tests
ng g c pages/catalog --skip-tests
ng g c shared/layout/header --skip-tests
ng g c shared/layout/modal --skip-tests
ng g c shared/layout/nav-bar --skip-tests

ng g c pages/components/popup-modal --skip-tests
 

ng g c pages/user-profile --skip-tests
ng g module pages/user-profile

ng g c shared\layout\header\components\search --skip-tests

//  core/interceptors
//  core/services
//  core/guards
//  core/interfaces
//  core/variables


ng g c shared/components/filter-button --skip-tests
