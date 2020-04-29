import { PropertyUnitsModule } from './property-units.module';

describe('PropertyUnitsModule', () => {
  let propertyunitsModule: PropertyUnitsModule;

  beforeEach(() => {
    propertyunitsModule = new PropertyUnitsModule();
  });

  it('should create an instance', () => {
    expect(propertyunitsModule).toBeTruthy();
  });
});
