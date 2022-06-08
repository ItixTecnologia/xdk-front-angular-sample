import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxCoreConfig, IxCoreModule } from '@itix/core';
import { IxComponentsConfig, IxComponentsModule } from '@itix/components';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';
import { environment } from '../environments/environment';

const xdkConfig: IxCoreConfig = {
    baseUrl: environment.baseUrl,
    applicationName: 'gerenciamento-pacientes',
    routes: routes,
    security: {
        shouldUseAuthorizer: false,
        useIxOAuth: false,
        loginSyncRoute: 'login'
    }
};
const xdkCompConfig: IxComponentsConfig = {};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        IxCoreModule.forRoot(xdkConfig),
        IxComponentsModule.forRoot(xdkCompConfig),
        ComponentsModule,
        ViewsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
