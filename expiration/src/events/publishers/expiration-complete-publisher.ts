import { Publisher, ExpirationCompleteEvent, Subjects } from '@grooyatickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
