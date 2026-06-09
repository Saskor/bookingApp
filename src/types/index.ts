export interface Owner {
  id: number;
  vk_id: number;
  name: string;
  created_at: string;
}

export interface Service {
  id: number;
  owner_id: number;
  name: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
  reminder_hours: number;
  description?: string;
}

export interface SearchServiceResult {
  service: {
    id: number;
    name: string;
    description: string;
    duration_minutes: number;
    price: number;
  };
  owner: {
    id: number;
    vk_id: number;
    name: string;
  };
}

export interface ITimeSlot {
  id: number;
  ownerId: number;
  serviceId: number;
  serviceName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export interface Booking {
  id: number;
  slot_id: number;
  owner_id: number;
  client_vk_id: number;
  service_id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
  created_at: string;
}

export interface MergedSlot {
  slot: ITimeSlot;
  booking?: Booking;
}

export interface TreeYear {
  year: number;
  slot_count: number;
}

export interface TreeMonth {
  month: number;
  slot_count: number;
}

export interface TreeDay {
  day: number;
  slot_count: number;
}

export type Role = "owner" | "client";

// eslint-disable-next-line @typescript-eslint/naming-convention
export type ValueOf<T> = T[keyof T];
