import { nonExistentPositiveNumber } from "constants/shared";
import { uuidv4 } from "utils/idGenerators";

export const orgInitialState = {
  createdAt: "",
  createdByVkId: nonExistentPositiveNumber,
  id: nonExistentPositiveNumber,
  maxLinks: [`${uuidv4()}/`],
  name: "",
  phones: [`${uuidv4()}/`],
  rescheduleReminderHours: 24,
  tgLinks: [`${uuidv4()}/`],
  vkLinks: [`${uuidv4()}/`],
  waitlistConfirmationHours: 2,
  websiteLinks: [`${uuidv4()}/`],
};

export const serviceMetaFieldsMap = {
  id: "id",
  isActive: "isActive",
  orgId: "orgId",
};

export const serviceInitialState = {
  description: "",
  durationMinutes: 60,
  id: nonExistentPositiveNumber,
  isActive: true,
  name: "Стрижка",
  orgId: nonExistentPositiveNumber,
  price: 0,
  reminderHours: 24,
};

export const servicesInitialState = [];
