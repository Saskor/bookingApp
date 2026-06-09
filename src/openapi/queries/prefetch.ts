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
export const prefetchUseGetHealth = (queryClient: QueryClient, clientOptions: Options<GetHealthData, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGetHealthKeyFn(clientOptions), queryFn: () => getHealth({ ...clientOptions }).then(response => response.data) });
/**
* Контекст текущего пользователя
*
* Возвращает роли пользователя в организациях, права доступа по каждой роли и профили мастера
*/
export const prefetchUseGetMeContext = (queryClient: QueryClient, clientOptions: Options<GetMeContextData, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGetMeContextKeyFn(clientOptions), queryFn: () => getMeContext({ ...clientOptions }).then(response => response.data) });
/**
* Получить организацию
*
* Возвращает данные организации по ID
*/
export const prefetchUseGetOrganizationsByOrgId = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgId({ ...clientOptions }).then(response => response.data) });
/**
* Список бронирований
*
* Возвращает бронирования текущего владельца с возможностью фильтрации
*/
export const prefetchUseGetOrganizationsByOrgIdBookings = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdBookingsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdBookingsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdBookings({ ...clientOptions }).then(response => response.data) });
/**
* Список мастеров
*
* Возвращает список мастеров организации
*/
export const prefetchUseGetOrganizationsByOrgIdMasters = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdMastersKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMasters({ ...clientOptions }).then(response => response.data) });
/**
* Получить мастера
*
* Возвращает данные мастера по ID
*/
export const prefetchUseGetOrganizationsByOrgIdMastersByMasterId = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterId({ ...clientOptions }).then(response => response.data) });
/**
* Список исключений в расписании мастера
*
* Возвращает исключения в расписании мастера за указанный период (по умолчанию — 28 дней от сегодня).
*/
export const prefetchUseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions({ ...clientOptions }).then(response => response.data) });
/**
* Получить рабочее расписание мастера
*
* Возвращает недельный шаблон рабочего времени мастера в салоне.
*/
export const prefetchUseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule({ ...clientOptions }).then(response => response.data) });
/**
* Список участников организации
*
* Возвращает всех участников организации
*/
export const prefetchUseGetOrganizationsByOrgIdMembers = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdMembersData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdMembersKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdMembers({ ...clientOptions }).then(response => response.data) });
/**
* Список ролей организации
*
* Возвращает все роли организации (системные + кастомные)
*/
export const prefetchUseGetOrganizationsByOrgIdRoles = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdRolesData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdRolesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdRoles({ ...clientOptions }).then(response => response.data) });
/**
* Список салонов
*
* Возвращает список салонов организации
*/
export const prefetchUseGetOrganizationsByOrgIdSalons = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalons({ ...clientOptions }).then(response => response.data) });
/**
* Получить салон
*
* Возвращает данные салона по ID
*/
export const prefetchUseGetOrganizationsByOrgIdSalonsBySalonId = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalonsBySalonId({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг салона
*
* Возвращает услуги организации, доступные в данном салоне (без исключённых услуг)
*/
export const prefetchUseGetOrganizationsByOrgIdSalonsBySalonIdServices = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdServicesData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdServicesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSalonsBySalonIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг
*
* Возвращает список всех услуг текущего владельца
*/
export const prefetchUseGetOrganizationsByOrgIdServices = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdServicesData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdServicesKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Список временных слотов
*
* Возвращает слоты с возможностью фильтрации по service_id, date, status
*/
export const prefetchUseGetOrganizationsByOrgIdSlots = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdSlotsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdSlotsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdSlots({ ...clientOptions }).then(response => response.data) });
/**
* Список лет (дерево)
*
* Возвращает годы, в которых есть слоты организации
*/
export const prefetchUseGetOrganizationsByOrgIdTreeYears = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYears({ ...clientOptions }).then(response => response.data) });
/**
* Список месяцев (дерево)
*
* Возвращает месяцы в году, в которых есть слоты
*/
export const prefetchUseGetOrganizationsByOrgIdTreeYearsByYMonths = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonths({ ...clientOptions }).then(response => response.data) });
/**
* Список дней (дерево)
*
* Возвращает дни в месяце, в которых есть слоты
*/
export const prefetchUseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDays = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDays({ ...clientOptions }).then(response => response.data) });
/**
* Слоты дня (дерево)
*
* Возвращает слоты конкретного дня с привязанными бронированиями
*/
export const prefetchUseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots = (queryClient: QueryClient, clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsKeyFn(clientOptions), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots({ ...clientOptions }).then(response => response.data) });
/**
* Мои записи (клиент)
*
* Возвращает бронирования текущего клиента (по VK ID из авторизации)
*/
export const prefetchUseGetPublicBookingsMy = (queryClient: QueryClient, clientOptions: Options<GetPublicBookingsMyData, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicBookingsMyKeyFn(clientOptions), queryFn: () => getPublicBookingsMy({ ...clientOptions }).then(response => response.data) });
/**
* Список мастеров организации (публичный)
*
* Возвращает активных мастеров организации по её ID
*/
export const prefetchUseGetPublicOrgsByOrgIdMasters = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdMastersData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicOrgsByOrgIdMastersKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdMasters({ ...clientOptions }).then(response => response.data) });
/**
* Список услуг организации (публичный)
*
* Возвращает активные услуги организации по её ID. При передаче salon_id возвращает только услуги, доступные в данном салоне.
*/
export const prefetchUseGetPublicOrgsByOrgIdServices = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdServicesData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicOrgsByOrgIdServicesKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdServices({ ...clientOptions }).then(response => response.data) });
/**
* Доступные слоты организации (публичный)
*
* Возвращает доступные для записи слоты организации
*/
export const prefetchUseGetPublicOrgsByOrgIdSlots = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdSlotsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdSlots({ ...clientOptions }).then(response => response.data) });
/**
* Доступные окна для записи (публичный)
*
* Возвращает доступные окна для записи с учётом продолжительности услуги (включая смежные слоты)
*/
export const prefetchUseGetPublicOrgsByOrgIdSlotsWindows = (queryClient: QueryClient, clientOptions: Options<GetPublicOrgsByOrgIdSlotsWindowsData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsWindowsKeyFn(clientOptions), queryFn: () => getPublicOrgsByOrgIdSlotsWindows({ ...clientOptions }).then(response => response.data) });
/**
* Поиск услуг
*
* Полнотекстовый поиск услуг по всем владельцам
*/
export const prefetchUseGetPublicSearchServices = (queryClient: QueryClient, clientOptions: Options<GetPublicSearchServicesData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicSearchServicesKeyFn(clientOptions), queryFn: () => getPublicSearchServices({ ...clientOptions }).then(response => response.data) });
/**
* Мои записи в листе ожидания (клиент)
*
* Возвращает записи в листе ожидания текущего клиента
*/
export const prefetchUseGetPublicWaitlistMy = (queryClient: QueryClient, clientOptions: Options<GetPublicWaitlistMyData, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGetPublicWaitlistMyKeyFn(clientOptions), queryFn: () => getPublicWaitlistMy({ ...clientOptions }).then(response => response.data) });
