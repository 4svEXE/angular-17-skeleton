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
ng g component views/pages/home/firstScreen --skip-tests
ng g component views/shared/secondary-button --skip-tests

ng g component pages/home --skip-tests
ng g component pages/home/components/first-banner --skip-tests
ng g component pages/home/components/recomendet --skip-tests

ng g c pages/home --skip-tests
ng g c shared/components/main-button --skip-tests

ng g m pages
