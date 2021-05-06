import { Publisher, Subjects, TicketUpdatedEvent } from '@grooyatickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
