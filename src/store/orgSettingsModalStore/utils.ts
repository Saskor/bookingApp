import { uuidv4 } from "utils/uuid";

export const getEmptyLink = () => ({ href: "", id: uuidv4() });
export const getEmptyService = () => ({
  name: "",
  description: "",
  price: 0,
  durationMinutes: 30,
  id: uuidv4(),
});
export const getEmptyPhone = () => ({ phone: "", id: uuidv4() });
