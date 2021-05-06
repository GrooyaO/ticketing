import { Subjects } from './subjects';

export interface TicketCreatedEvent {
  subject: Subjects.TickedCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
