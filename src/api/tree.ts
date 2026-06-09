import { apiFetch } from './client';
import type { TreeYear, TreeMonth, TreeDay, MergedSlot } from '../types';

export function listYears(): Promise<{ years: TreeYear[] }> {
  return apiFetch('/api/v1/tree/years');
}

export function listMonths(year: number): Promise<{ months: TreeMonth[] }> {
  return apiFetch(`/api/v1/tree/years/${year}/months`);
}

export function listDays(year: number, month: number): Promise<{ days: TreeDay[] }> {
  return apiFetch(`/api/v1/tree/years/${year}/months/${month}/days`);
}

export function listDaySlots(
  year: number,
  month: number,
  day: number,
): Promise<{ date: string; slots: MergedSlot[] }> {
  return apiFetch(`/api/v1/tree/years/${year}/months/${month}/days/${day}/slots`);
}
