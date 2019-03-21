
import { of } from 'rxjs';

export const stateServiceStub = {
    addPayment: (title: string, price: number) => of(),
    changeWorth: () => of()
};