import { Subjects, Publisher, PaymentCreatedEvent } from '@grooyatickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
