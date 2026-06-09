import { nonExistentPositiveNumber } from "constants/shared";
import type { IReactListData } from "types";
import { getNumberId, uuidv4 } from "utils/idGenerators";

export const getEmptyReactListItem = () => ({ value: "", id: uuidv4() });

export const getReactListData = (stringList: string[]): IReactListData => {
  return stringList.reduce<IReactListData>((acc, item) => {
    const [id, value] = item.split("/");

    return [...acc, { id, value }];
  }, []);
};

export const getBodyFields = (
  obj: Record<string, unknown>,
  omitedFieldsMap: Record<string, string>
) => {
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(obj)) {
    if (!omitedFieldsMap[key]) {
      result[key] = obj[key];
    }
  }

  return result;
};

export const getEmptyService = (orgId: number) => ({
  id: getNumberId(),
  isActive: true,
  description: "",
  durationMinutes: 30,
  masterId: nonExistentPositiveNumber,
  name: "",
  orgId,
  price: 0,
  reminderHours: 24,
  extraFieldLabel: "",
  extraFieldRequired: false,
});

export const getIsPhonesListLastItemFullfilled = (phonesList: IReactListData) => {
  const phonesListLastItem = phonesList.slice(-1)[0];
  return phonesListLastItem.value.length > 0;
};
