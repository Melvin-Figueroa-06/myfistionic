import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoAddPage } from './producto-add.page';

describe('ProductoAddPage', () => {
  let component: ProductoAddPage;
  let fixture: ComponentFixture<ProductoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
