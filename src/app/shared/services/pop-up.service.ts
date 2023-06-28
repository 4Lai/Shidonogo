import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Type,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  openModal(component: Type<any>) {
    const dialogRef = createComponent(ModalComponent, {
      environmentInjector: this.injector,
    });

    document.body.appendChild(dialogRef.location.nativeElement);

    this.appRef.attachView(dialogRef.hostView);
    this.createContentComponent(component);
    dialogRef.instance.close.subscribe((val) => {
      dialogRef.destroy();
    });
  }
  createContentComponent(component: Type<any>) {
    const contentRef = createComponent(component, {
      environmentInjector: this.injector,
    });
    document
      .getElementById('content')!
      .appendChild(contentRef.location.nativeElement);
  }
}
