import { apiFetch } from "./client";
import type {
  Service,
  ITimeSlot,
  Booking,
  SearchServiceResult,
} from "../types";

export function searchServices(
  q: string,
  limit?: number,
  offset?: number
): Promise<{ results: SearchServiceResult[]; total_count: number }> {
  const query = new URLSearchParams();
  query.set("q", q);
  if (limit) query.set("limit", String(limit));
  if (offset) query.set("offset", String(offset));
  return apiFetch(`/api/v1/public/search/services?${query.toString()}`);
}

export function listOwnerServices(
  ownerVKID: number
): Promise<{ services: Service[] }> {
  return apiFetch(`/api/v1/public/${ownerVKID}/services`);
}

export function listOwnerSlots(
  ownerVKID: number,
  params?: { date?: string; service_id?: number }
): Promise<{ slots: ITimeSlot[] }> {
  const query = new URLSearchParams();
  if (params?.date) query.set("date", params.date);
  if (params?.service_id) query.set("service_id", String(params.service_id));
  const qs = query.toString();
  return apiFetch(`/api/v1/public/${ownerVKID}/slots${qs ? `?${qs}` : ""}`);
}

export function listMyBookings(params?: {
  status?: string;
}): Promise<{ bookings: Booking[] }> {
  const query = new URLSearchParams();
  if (params?.status) query.set("status", params.status);
  const qs = query.toString();
  return apiFetch(`/api/v1/public/bookings/my${qs ? `?${qs}` : ""}`);
}

export function createBooking(
  ownerVKID: number,
  data: {
    slot_id: number;
    service_id: number;
    date: string;
    start_time: string;
    end_time: string;
  }
): Promise<{ booking: Booking; slot: { id: number; status: string } }> {
  return apiFetch(`/api/v1/public/${ownerVKID}/bookings`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
