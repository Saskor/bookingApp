# Frontend

VK Mini App: React + TypeScript + VKUI + Vite. Два режима: мастер (owner) и клиент (client).

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Dev server (port 5173)
npm run build      # Production build
```

## Structure

```
src/
  App.tsx                      # Root: Epic → View → Panel navigation
  main.tsx                     # VK Bridge init
  api/
    client.ts                  # HTTP client (Authorization: VKMiniApp <params>)
    services.ts, slots.ts, bookings.ts  # Owner API
    public.ts                  # Client API
    tree.ts                    # Tree navigation API
    mock.ts                    # Mock data (VITE_MOCK=true)
  panels/
    owner/                     # Owner panels
      OwnerHome.tsx            # Main menu
      ServiceList.tsx          # Service management
      ServiceForm.tsx          # Create/edit service
      SlotGenerator.tsx        # Generate time slots
      TreeYears/Months/Days/DaySlots.tsx  # Tree navigation
      BookingDetail.tsx        # View/manage booking
    client/                    # Client panels
      ClientHome.tsx           # Enter master VK ID
      ClientServices.tsx       # Browse services
      ClientSlots.tsx          # Browse available slots
      ClientBookingConfirm.tsx # Confirm booking
      ClientMyBookings.tsx     # Own bookings (grouped by status)
  components/
    ServiceCard.tsx, SlotCard.tsx, BookingCard.tsx, RoleSwitcher.tsx
  hooks/
    useApi.ts                  # Fetch hook with loading state
    useAuth.ts                 # VK auth hook
  store/
    context.tsx                # Global state (role, owner, targetOwnerVKID)
  types/
    index.ts                   # Owner, Service, TimeSlot, Booking, Tree*, Role
```

## Navigation

- **Epic** → View → Panel (VKUI pattern)
- History-based stack: `go(panel, params)` / `goBack()`
- Owner flow: OwnerHome → Services / Slots / Tree → ...
- Client flow: ClientHome → Services → Slots → Confirm; ClientMyBookings (separate)

## API Client

- Header: `Authorization: VKMiniApp <launch_params>`
- Mock mode: `VITE_MOCK=true`
- Dev launch params: `vk_user_id=1&vk_app_id=0&sign=dev`
