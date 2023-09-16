import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { StaticComponent } from './static/static.component';
import { GraphComponent } from './graph/graph.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataViewComponent } from './data-view/data-view.component';
import { HourlySalesComponent } from './hourly-sales/hourly-sales.component';
import { SalesByStationComponent } from './sales-by-station/sales-by-station.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickableDirective } from './core/clickable.directive';
import { ClickDirective } from './core/click.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StaticComponent,
    GraphComponent,
    SideBarComponent,
    DataViewComponent,
    HourlySalesComponent,
    SalesByStationComponent,
    ClickableDirective,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
