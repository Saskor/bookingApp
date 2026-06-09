// generated with @7nohe/openapi-react-query-codegen@2.1.0 

import { type QueryClient } from "@tanstack/react-query";
import type { Options } from "../requests/sdk.gen";
import { getHealth, getMeContext, getOrganizationsByOrgId, getOrganizationsByOrgIdBookings, getOrganizationsByOrgIdMasters, getOrganizationsByOrgIdMastersByMasterId, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule, getOrganizationsByOrgIdMembers, getOrganizationsByOrgIdRoles, getOrganizationsByOrgIdSalons, getOrganizationsByOrgIdSalonsBySalonId, getOrganizationsByOrgIdSalonsBySalonIdServices, getOrganizationsByOrgIdServices, getOrganizationsByOrgIdSlots, getOrganizationsByOrgIdTreeYears, getOrganizationsByOrgIdTreeYearsByYMonths, getOrganizationsByOrgIdTreeYearsByYMonthsByMDays, getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots, getPublicBookingsMy, getPublicOrgsByOrgIdMasters, getPublicOrgsByOrgIdServices, getPublicOrgsByOrgIdSlots, getPublicOrgsByOrgIdSlotsWindows, getPublicSearchServices, getPublicWaitlistMy } from "../requests/sdk.gen";
import { GetHealthData, GetMeContextData, GetOrganizationsByOrgIdBookingsData, GetOrganizationsByOrgIdData, GetOrganizationsByOrgIdMastersByMasterIdData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, GetOrganizationsByOrgIdMastersData, GetOrganizationsByOrgIdMembersData, GetOrganizationsByOrgIdRolesData, GetOrganizationsByOrgIdSalonsBySalonIdData, GetOrganizationsByOrgIdSalonsBySalonIdServicesData, GetOrganizationsByOrgIdSalonsData, GetOrganizationsByOrgIdServicesData, GetOrganizationsByOrgIdSlotsData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, GetOrganizationsByOrgIdTreeYearsByYMonthsData, GetOrganizationsByOrgIdTreeYearsData, GetPublicBookingsMyData, GetPublicOrgsByOrgIdMastersData, GetPublicOrgsByOrgIdServicesData, GetPublicOrgsByOrgIdSlotsData, GetPublicOrgsByOrgIdSlotsWindowsData, GetPublicSearchServicesData, GetPublicWaitlistMyData } from "../requests/types.gen";
import * as Common from "./common";
/**
* Проверка здоровья сервиса
*
* Возвращает статус работоспособности API Gateway
*/
export const ensureUseGetHealthData = (queryClient: QueryClient, clientOptions: Options<GetHealthData, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseGetHealthKeyFn(clientOptions), queryFn: () => getHealth({ ...clientOptions }).then(response => response.data) });
/**
* Контекст текущего пользователя
*
* Возвращает роли пользователя в организациях, права доступа по каждой роли и профили мастера
*/
export const ensureUseGetMeContextData = (queryClient: QueryClient, clientOptions: Options<GetMeContextData, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseGetMeContextKeyFn(clientOptions), queryFn: () => getMeContext({ ...clientOptions }).then(response => response.data) });
/**
* Получить организацию
*
* Возвращает данные организации по ID
*/
export const ensureUseGetOrganizationsByOrgIdData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgId({ ...clientOptions }).then(response => response.data) });
/**
* Список бронирований
*
* Возвращает бронирования текущего владельца с возможностью фильтрации
*/
export const ensureUseGetOrganizationsByOrgIdBookingsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdBookingsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdBookingsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdBookings({ ...clientOptions }).then(response => response.data) });
/**
* Список мастеров
*
* Возвращает список мастеров организации
*/
export const ensureUseGetOrganizationsByOrgIdMastersData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdMastersKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMasters({ ...clientOptions }).then(response => response.data) });
/**
* Получить мастера
*
* Возвращает данные мастера по ID
*/
export const ensureUseGetOrganizationsByOrgIdMastersByMasterIdData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterId({ ...clientOptions }).then(response => response.data) });
/**
* Список исключений в расписании мастера
*
* Возвращает исключения в расписании мастера за указанный период (по умолчанию — 28 дней от сегодня).
*/
export const ensureUseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions({ ...clientOptions }).then(response => response.data) });
/**
* Получить рабочее расписание мастера
*
* Возвращает недельный шаблон рабочего времени мастера в салоне.
*/
export const ensureUseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule({ ...clientOptions }).then(response => response.data) });
/**
* Список участников организации
*
* Возвращает всех участников организации
*/
export const ensureUseGetOrganizationsByOrgIdMembersData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMembersData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdMembersKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMembers({ ...clientOptions }).then(response => response.data) });
/**
* Список ролей организации
*
* Возвращает все роли организации (системные + кастомные)
*/
export const ensureUseGetOrganizationsByOrgIdRolesData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdRolesData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdRolesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdRoles({ ...clientOptions }).then(response => response.data) });
/**
* Список салонов
*
* Возвращает список салонов организации
*/
export const ensureUseGetOrganizationsByOrgIdSalonsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalons({ ...clientOptions }).then(response => response.data) });
/**
* Получить салон
*
* Возвращает данные салона по ID
*/
export const ensureUseGetOrganizationsByOrgIdSalonsBySalonIdData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalonsBySalonId({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг салона
*
* Возвращает услуги организации, доступные в данном салоне (без исключённых услуг)
*/
export const ensureUseGetOrganizationsByOrgIdSalonsBySalonIdServicesData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdServicesData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdServicesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalonsBySalonIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг
*
* Возвращает список всех услуг текущего владельца
*/
export const ensureUseGetOrganizationsByOrgIdServicesData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdServicesData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdServicesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Список временных слотов
*
* Возвращает слоты с возможностью фильтрации по service_id, date, status
*/
export const ensureUseGetOrganizationsByOrgIdSlotsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSlotsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdSlotsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSlots({ ...clientOptions }).then(response => response.data) });
/**
* Список лет (дерево)
*
* Возвращает годы, в которых есть слоты организации
*/
export const ensureUseGetOrganizationsByOrgIdTreeYearsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYears({ ...clientOptions }).then(response => response.data) });
/**
* Список месяцев (дерево)
*
* Возвращает месяцы в году, в которых есть слоты
*/
export const ensureUseGetOrganizationsByOrgIdTreeYearsByYMonthsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonths({ ...clientOptions }).then(response => response.data) });
/**
* Список дней (дерево)
*
* Возвращает дни в месяце, в которых есть слоты
*/
export const ensureUseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDays({ ...clientOptions }).then(response => response.data) });
/**
* Слоты дня (дерево)
*
* Возвращает слоты конкретного дня с привязанными бронированиями
*/
export const ensureUseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots({ ...clientOptions }).then(response => response.data) });
/**
* Мои записи (клиент)
*
* Возвращает бронирования текущего клиента (по VK ID из авторизации)
*/
export const ensureUseGetPublicBookingsMyData = (queryClient: QueryClient, clientOptions: Options<GetPublicBookingsMyData, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicBookingsMyKeyFn(clientOptions), queryFn: () => getPublicBookingsMy({ ...clientOptions }).then(response => response.data) });
/**
* Список мастеров организации (публичный)
*
* Возвращает активных мастеров организации по её ID
*/
export const ensureUseGetPublicOrgsByOrgIdMastersData = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdMastersData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicOrgsByOrgIdMastersKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdMasters({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг организации (публичный)
*
* Возвращает активные услуги организации по её ID. При передаче salon_id возвращает только услуги, доступные в данном салоне.
*/
export const ensureUseGetPublicOrgsByOrgIdServicesData = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdServicesData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicOrgsByOrgIdServicesKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Доступные слоты организации (публичный)
*
* Возвращает доступные для записи слоты организации
*/
export const ensureUseGetPublicOrgsByOrgIdSlotsData = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdSlotsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdSlots({ ...clientOptions }).then(response => response.data) });
/**
* Доступные окна для записи (публичный)
*
* Возвращает доступные окна для записи с учётом продолжительности услуги (включая смежные слоты)
*/
export const ensureUseGetPublicOrgsByOrgIdSlotsWindowsData = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdSlotsWindowsData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsWindowsKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdSlotsWindows({ ...clientOptions }).then(response => response.data) });
/**
* Поиск услуг
*
* Полнотекстовый поиск услуг по всем владельцам
*/
export const ensureUseGetPublicSearchServicesData = (queryClient: QueryClient, clientOptions: Options<GetPublicSearchServicesData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicSearchServicesKeyFn(clientOptions), queryFn: () => getPublicSearchServices({ ...clientOptions }).then(response => response.data) });
/**
* Мои записи в листе ожидания (клиент)
*
* Возвращает записи в листе ожидания текущего клиента
*/
export const ensureUseGetPublicWaitlistMyData = (queryClient: QueryClient, clientOptions: Options<GetPublicWaitlistMyData, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseGetPublicWaitlistMyKeyFn(clientOptions), queryFn: () => getPublicWaitlistMy({ ...clientOptions }).then(response => response.data) });
