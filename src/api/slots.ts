import { apiFetch } from "./client";
import type { ITimeSlot } from "../types";

export function generateSlots(data: {
  service_id: number;
  date: string;
  start_time: string;
  end_time: string;
}): Promise<{ slots: ITimeSlot[] }> {
  return apiFetch("/api/v1/slots/generate", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listSlots(params?: {
  service_id?: number;
  date?: string;
  status?: string;
}): Promise<{ slots: ITimeSlot[] }> {
  const query = new URLSearchParams();
  if (params?.service_id) query.set("service_id", String(params.service_id));
  if (params?.date) query.set("date", params.date);
  if (params?.status) query.set("status", params.status);
  const qs = query.toString();
  return apiFetch(`/api/v1/slots${qs ? `?${qs}` : ""}`);
}
