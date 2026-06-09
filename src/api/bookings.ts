import { apiFetch } from './client';
import type { Booking } from '../types';

export function listBookings(params?: {
  date?: string;
  status?: string;
}): Promise<{ bookings: Booking[] }> {
  const query = new URLSearchParams();
  if (params?.date) query.set('date', params.date);
  if (params?.status) query.set('status', params.status);
  const qs = query.toString();
  return apiFetch(`/api/v1/bookings${qs ? `?${qs}` : ''}`);
}

export function updateBookingStatus(
  id: number,
  data: { status: string; slot_id: number },
): Promise<{ booking: Booking }> {
  return apiFetch(`/api/v1/bookings/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
