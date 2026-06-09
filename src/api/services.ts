import { apiFetch } from './client';
import type { Service } from '../types';

export function listServices(): Promise<{ services: Service[] }> {
  return apiFetch('/api/v1/services');
}

export function createService(data: {
  name: string;
  duration_minutes: number;
  price: number;
  reminder_hours?: number;
}): Promise<Service> {
  return apiFetch('/api/v1/services', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateService(
  id: number,
  data: {
    name: string;
    duration_minutes: number;
    price: number;
    is_active?: boolean;
    reminder_hours?: number;
  },
): Promise<Service> {
  return apiFetch(`/api/v1/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
