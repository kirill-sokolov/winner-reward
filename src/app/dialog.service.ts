import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  componentRef

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  // todo:
  // create Dialog.setComponent(..., ...)
  // componentRef creation in setComponent
  public create(component, data) {
    console.debug('create', this.componentRef)
    if (!this.componentRef) {
      // 1. Create a component reference from the component
      this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector)
      this.componentRef.instance.data = data
      return this.componentRef
    } else {
      return this.componentRef
    }
  }

  public show(componentRef = this.componentRef) {
    this.appRef.attachView(componentRef.hostView);  // 2. Add to component tree and CD
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.querySelector('body').appendChild(domElem);
    document.querySelector('body').classList.add('modal-open')
  }

  public close(componentRef = this.componentRef) {
    this.appRef.detachView(componentRef.hostView);
    // componentRef.destroy();
    // this.componentRef = null; // todo:
    document.querySelector('body').classList.remove('modal-open')
  }
}

// https://stackoverflow.com/questions/42848369/angular-passing-data-back-from-dynamic-component
// this.componentRef.instance.observeVariable.subscribe(result => { this.v = result;  // here observeVariable is an Observable in dynamic component(ie. this.componentRef).

