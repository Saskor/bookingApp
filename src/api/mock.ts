import type {
  Owner,
  Service,
  ITimeSlot,
  Booking,
  TreeYear,
  TreeMonth,
  TreeDay,
  MergedSlot,
} from "../types";

let nextId = 100;
function id() {
  return ++nextId;
}

const owner: Owner = {
  id: 1,
  vk_id: 1,
  name: "Тестовый мастер",
  created_at: "2026-01-01T00:00:00Z",
};

const services: Service[] = [
  {
    id: 1,
    owner_id: 1,
    name: "Стрижка",
    duration_minutes: 30,
    price: 1500,
    is_active: true,
    reminder_hours: 24,
  },
  {
    id: 2,
    owner_id: 1,
    name: "Окрашивание",
    duration_minutes: 120,
    price: 5000,
    is_active: true,
    reminder_hours: 24,
  },
  {
    id: 3,
    owner_id: 1,
    name: "Укладка",
    duration_minutes: 45,
    price: 2000,
    is_active: false,
    reminder_hours: 12,
  },
];

const slots: ITimeSlot[] = [
  {
    id: 1,
    owner_id: 1,
    service_id: 1,
    date: "2026-03-10",
    start_time: "09:00",
    end_time: "09:30",
    status: "AVAILABLE",
  },
  {
    id: 2,
    owner_id: 1,
    service_id: 1,
    date: "2026-03-10",
    start_time: "10:00",
    end_time: "10:30",
    status: "BOOKED",
  },
  {
    id: 3,
    owner_id: 1,
    service_id: 1,
    date: "2026-03-10",
    start_time: "11:00",
    end_time: "11:30",
    status: "AVAILABLE",
  },
  {
    id: 4,
    owner_id: 1,
    service_id: 2,
    date: "2026-03-10",
    start_time: "12:00",
    end_time: "14:00",
    status: "AVAILABLE",
  },
  {
    id: 5,
    owner_id: 1,
    service_id: 1,
    date: "2026-03-11",
    start_time: "09:00",
    end_time: "09:30",
    status: "AVAILABLE",
  },
  {
    id: 6,
    owner_id: 1,
    service_id: 1,
    date: "2026-03-11",
    start_time: "10:00",
    end_time: "10:30",
    status: "AVAILABLE",
  },
];

const bookings: Booking[] = [
  {
    id: 1,
    slot_id: 2,
    service_id: 1,
    owner_id: 1,
    client_vk_id: 1,
    date: "2026-03-10",
    start_time: "10:00",
    end_time: "10:30",
    status: "PENDING",
    created_at: "2026-03-07T10:00:00Z",
  },
];

function delay(ms = 300): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

type RouteHandler = (params: Record<string, string>, body?: unknown) => unknown;

const routes: { method: string; pattern: RegExp; handler: RouteHandler }[] = [
  // Owner
  {
    method: "POST",
    pattern: /^\/api\/v1\/owners\/me$/,
    handler: () => owner,
  },
  // Services
  {
    method: "GET",
    pattern: /^\/api\/v1\/services$/,
    handler: () => ({ services }),
  },
  {
    method: "POST",
    pattern: /^\/api\/v1\/services$/,
    handler: (_p, body) => {
      const s = {
        id: id(),
        owner_id: 1,
        is_active: true,
        ...(body as object),
      } as Service;
      services.push(s);
      return { service: s };
    },
  },
  {
    method: "PUT",
    pattern: /^\/api\/v1\/services\/(\d+)$/,
    handler: (p, body) => {
      const s = services.find((x) => x.id === Number(p["1"]));
      if (s) Object.assign(s, body);
      return { service: s };
    },
  },
  // Slots generate
  {
    method: "POST",
    pattern: /^\/api\/v1\/slots\/generate$/,
    handler: (_p, body) => {
      const b = body as {
        service_id: number;
        date: string;
        start_time: string;
        end_time: string;
      };
      const generated: ITimeSlot[] = [];
      const svc = services.find((s) => s.id === b.service_id);
      const dur = svc?.duration_minutes ?? 30;
      let [h, m] = b.start_time.split(":").map(Number);
      const [eh, em] = b.end_time.split(":").map(Number);
      while (h * 60 + m + dur <= eh * 60 + em) {
        const start = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        m += dur;
        h += Math.floor(m / 60);
        m %= 60;
        const end = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        const slot: ITimeSlot = {
          id: id(),
          owner_id: 1,
          service_id: b.service_id,
          date: b.date,
          start_time: start,
          end_time: end,
          status: "AVAILABLE",
        };
        generated.push(slot);
        slots.push(slot);
      }
      return { slots: generated, count: generated.length };
    },
  },
  // Slots list
  {
    method: "GET",
    pattern: /^\/api\/v1\/slots/,
    handler: () => ({ slots }),
  },
  // Bookings status
  {
    method: "PUT",
    pattern: /^\/api\/v1\/bookings\/(\d+)\/status$/,
    handler: (p, body) => {
      const b = bookings.find((x) => x.id === Number(p["1"]));
      if (b) b.status = (body as { status: string }).status;
      return { booking: b };
    },
  },
  // Tree
  {
    method: "GET",
    pattern: /^\/api\/v1\/tree\/years$/,
    handler: () => {
      const map = new Map<number, number>();
      for (const s of slots) {
        const y = Number(s.date.split("-")[0]);
        map.set(y, (map.get(y) ?? 0) + 1);
      }
      const years: TreeYear[] = [...map.entries()].map(
        ([year, slot_count]) => ({ year, slot_count })
      );
      return { years };
    },
  },
  {
    method: "GET",
    pattern: /^\/api\/v1\/tree\/years\/(\d+)\/months$/,
    handler: (p) => {
      const y = Number(p["1"]);
      const map = new Map<number, number>();
      for (const s of slots) {
        const [sy, sm] = s.date.split("-").map(Number);
        if (sy === y) map.set(sm, (map.get(sm) ?? 0) + 1);
      }
      const months: TreeMonth[] = [...map.entries()].map(
        ([month, slot_count]) => ({ month, slot_count })
      );
      return { months };
    },
  },
  {
    method: "GET",
    pattern: /^\/api\/v1\/tree\/years\/(\d+)\/months\/(\d+)\/days$/,
    handler: (p) => {
      const y = Number(p["1"]);
      const m = Number(p["2"]);
      const map = new Map<number, number>();
      for (const s of slots) {
        const [sy, sm, sd] = s.date.split("-").map(Number);
        if (sy === y && sm === m) map.set(sd, (map.get(sd) ?? 0) + 1);
      }
      const days: TreeDay[] = [...map.entries()].map(([day, slot_count]) => ({
        day,
        slot_count,
      }));
      return { days };
    },
  },
  {
    method: "GET",
    pattern:
      /^\/api\/v1\/tree\/years\/(\d+)\/months\/(\d+)\/days\/(\d+)\/slots$/,
    handler: (p) => {
      const y = Number(p["1"]);
      const m = Number(p["2"]);
      const d = Number(p["3"]);
      const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const daySlots = slots.filter((s) => s.date === dateStr);
      const merged: MergedSlot[] = daySlots.map((slot) => ({
        slot,
        booking: bookings.find((b) => b.slot_id === slot.id),
      }));
      return { date: dateStr, slots: merged };
    },
  },
  // Public: search services
  {
    method: "GET",
    pattern: /^\/api\/v1\/public\/search\/services\?q=([^&]*)/,
    handler: (p, _body) => {
      const q = decodeURIComponent(p["1"] || "").toLowerCase();
      const activeServices = services.filter(
        (s) =>
          s.is_active &&
          (s.name.toLowerCase().includes(q) ||
            ((s as { description?: string }).description ?? "")
              .toLowerCase()
              .includes(q))
      );
      const results = activeServices.map((s) => ({
        service: {
          id: s.id,
          name: s.name,
          description: (s as { description?: string }).description ?? "",
          duration_minutes: s.duration_minutes,
          price: s.price,
        },
        owner: {
          id: owner.id,
          vk_id: owner.vk_id,
          name: owner.name,
        },
      }));
      return { results, total_count: results.length };
    },
  },
  // Public: my bookings
  {
    method: "GET",
    pattern: /^\/api\/v1\/public\/bookings\/my/,
    handler: (_p, _body) => {
      // Return all bookings where client_vk_id matches the mock user (vk_user_id=1)
      const myBookings = bookings.filter((b) => b.client_vk_id === 1);
      return { bookings: myBookings };
    },
  },
  // Public
  {
    method: "GET",
    pattern: /^\/api\/v1\/public\/\d+\/services$/,
    handler: () => ({ services: services.filter((s) => s.is_active) }),
  },
  {
    method: "GET",
    pattern: /^\/api\/v1\/public\/\d+\/slots/,
    handler: () => {
      const available = slots.filter((s) => s.status === "AVAILABLE");
      return { slots: available };
    },
  },
  {
    method: "POST",
    pattern: /^\/api\/v1\/public\/\d+\/bookings$/,
    handler: (_p, body) => {
      const b = body as {
        slot_id: number;
        service_id: number;
        date: string;
        start_time: string;
        end_time: string;
      };
      const slot = slots.find((s) => s.id === b.slot_id);
      if (slot && slot.status !== "AVAILABLE") {
        throw { status: 409, message: "Slot already taken" };
      }
      if (slot) slot.status = "BOOKED";
      const booking: Booking = {
        id: id(),
        slot_id: b.slot_id,
        service_id: b.service_id,
        owner_id: 1,
        client_vk_id: 1,
        date: b.date,
        start_time: b.start_time,
        end_time: b.end_time,
        status: "PENDING",
        created_at: new Date().toISOString(),
      };
      bookings.push(booking);
      return { booking };
    },
  },
];

export async function mockFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  await delay();
  const method = (options.method ?? "GET").toUpperCase();
  const body = options.body ? JSON.parse(options.body as string) : undefined;

  for (const route of routes) {
    if (route.method !== method) continue;
    const match = path.match(route.pattern);
    if (!match) continue;
    const params: Record<string, string> = {};
    match.forEach((v, i) => {
      if (i > 0) params[String(i)] = v;
    });
    try {
      const result = route.handler(params, body);
      return result as T;
    } catch (e: unknown) {
      const err = e as { status?: number; message?: string };
      const error = new Error(err.message ?? "Mock error");
      (error as unknown as { status: number }).status = err.status ?? 500;
      throw error;
    }
  }

  throw new Error(`Mock: no route for ${method} ${path}`);
}
