import { Publisher, Subjects, TicketCreatedEvent } from '@grooyatickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TickedCreated;
}
