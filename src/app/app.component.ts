import { AlertComponent } from './alert/alert.component';

import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  @ViewChild('alertContainer', { read: ViewContainerRef }) container;

  public componentRef: ComponentRef<AlertComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  public createAlert(type: string): void {
    this.container.clear();

    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;
    this.componentRef.instance.alertClosed.subscribe(() => this.destroyAlert());
  }

  public destroyAlert(): void {
    this.componentRef.destroy();
  }

  public ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
