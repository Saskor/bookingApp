// generated with @7nohe/openapi-react-query-codegen@2.1.0 

import { UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Options } from "../requests/sdk.gen";
import { getHealth, getMeContext, getOrganizationsByOrgId, getOrganizationsByOrgIdBookings, getOrganizationsByOrgIdMasters, getOrganizationsByOrgIdMastersByMasterId, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule, getOrganizationsByOrgIdMembers, getOrganizationsByOrgIdRoles, getOrganizationsByOrgIdSalons, getOrganizationsByOrgIdSalonsBySalonId, getOrganizationsByOrgIdSalonsBySalonIdServices, getOrganizationsByOrgIdServices, getOrganizationsByOrgIdSlots, getOrganizationsByOrgIdTreeYears, getOrganizationsByOrgIdTreeYearsByYMonths, getOrganizationsByOrgIdTreeYearsByYMonthsByMDays, getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots, getPublicBookingsMy, getPublicOrgsByOrgIdMasters, getPublicOrgsByOrgIdServices, getPublicOrgsByOrgIdSlots, getPublicOrgsByOrgIdSlotsWindows, getPublicSearchServices, getPublicWaitlistMy } from "../requests/sdk.gen";
import { GetHealthData, GetMeContextData, GetMeContextError, GetOrganizationsByOrgIdBookingsData, GetOrganizationsByOrgIdBookingsError, GetOrganizationsByOrgIdData, GetOrganizationsByOrgIdError, GetOrganizationsByOrgIdMastersByMasterIdData, GetOrganizationsByOrgIdMastersByMasterIdError, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsError, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError, GetOrganizationsByOrgIdMastersData, GetOrganizationsByOrgIdMastersError, GetOrganizationsByOrgIdMembersData, GetOrganizationsByOrgIdMembersError, GetOrganizationsByOrgIdRolesData, GetOrganizationsByOrgIdRolesError, GetOrganizationsByOrgIdSalonsBySalonIdData, GetOrganizationsByOrgIdSalonsBySalonIdError, GetOrganizationsByOrgIdSalonsBySalonIdServicesData, GetOrganizationsByOrgIdSalonsBySalonIdServicesError, GetOrganizationsByOrgIdSalonsData, GetOrganizationsByOrgIdSalonsError, GetOrganizationsByOrgIdServicesData, GetOrganizationsByOrgIdServicesError, GetOrganizationsByOrgIdSlotsData, GetOrganizationsByOrgIdSlotsError, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsError, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysError, GetOrganizationsByOrgIdTreeYearsByYMonthsData, GetOrganizationsByOrgIdTreeYearsByYMonthsError, GetOrganizationsByOrgIdTreeYearsData, GetOrganizationsByOrgIdTreeYearsError, GetPublicBookingsMyData, GetPublicBookingsMyError, GetPublicOrgsByOrgIdMastersData, GetPublicOrgsByOrgIdMastersError, GetPublicOrgsByOrgIdServicesData, GetPublicOrgsByOrgIdServicesError, GetPublicOrgsByOrgIdSlotsData, GetPublicOrgsByOrgIdSlotsError, GetPublicOrgsByOrgIdSlotsWindowsData, GetPublicOrgsByOrgIdSlotsWindowsError, GetPublicSearchServicesData, GetPublicSearchServicesError, GetPublicWaitlistMyData, GetPublicWaitlistMyError } from "../requests/types.gen";
import * as Common from "./common";
/**
* Проверка здоровья сервиса
*
* Возвращает статус работоспособности API Gateway
*/
export const useGetHealthSuspense = <TData = NonNullable<Common.GetHealthDefaultResponse>, TError = AxiosError<unknown>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetHealthData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetHealthKeyFn(clientOptions, queryKey), queryFn: () => getHealth({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Контекст текущего пользователя
*
* Возвращает роли пользователя в организациях, права доступа по каждой роли и профили мастера
*/
export const useGetMeContextSuspense = <TData = NonNullable<Common.GetMeContextDefaultResponse>, TError = AxiosError<GetMeContextError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetMeContextData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetMeContextKeyFn(clientOptions, queryKey), queryFn: () => getMeContext({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить организацию
*
* Возвращает данные организации по ID
*/
export const useGetOrganizationsByOrgIdSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список бронирований
*
* Возвращает бронирования текущего владельца с возможностью фильтрации
*/
export const useGetOrganizationsByOrgIdBookingsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdBookingsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdBookingsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdBookingsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdBookingsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdBookings({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список мастеров
*
* Возвращает список мастеров организации
*/
export const useGetOrganizationsByOrgIdMastersSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdMastersDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdMastersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMasters({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить мастера
*
* Возвращает данные мастера по ID
*/
export const useGetOrganizationsByOrgIdMastersByMasterIdSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdMastersByMasterIdDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список исключений в расписании мастера
*
* Возвращает исключения в расписании мастера за указанный период (по умолчанию — 28 дней от сегодня).
*/
export const useGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить рабочее расписание мастера
*
* Возвращает недельный шаблон рабочего времени мастера в салоне.
*/
export const useGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список участников организации
*
* Возвращает всех участников организации
*/
export const useGetOrganizationsByOrgIdMembersSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdMembersDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdMembersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMembersData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMembersKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMembers({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список ролей организации
*
* Возвращает все роли организации (системные + кастомные)
*/
export const useGetOrganizationsByOrgIdRolesSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdRolesDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdRolesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdRolesData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdRolesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdRoles({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список салонов
*
* Возвращает список салонов организации
*/
export const useGetOrganizationsByOrgIdSalonsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdSalonsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdSalonsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalons({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить салон
*
* Возвращает данные салона по ID
*/
export const useGetOrganizationsByOrgIdSalonsBySalonIdSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdSalonsBySalonIdDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalonsBySalonId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг салона
*
* Возвращает услуги организации, доступные в данном салоне (без исключённых услуг)
*/
export const useGetOrganizationsByOrgIdSalonsBySalonIdServicesSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdSalonsBySalonIdServicesDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdSalonsBySalonIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalonsBySalonIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг
*
* Возвращает список всех услуг текущего владельца
*/
export const useGetOrganizationsByOrgIdServicesSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdServicesDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список временных слотов
*
* Возвращает слоты с возможностью фильтрации по service_id, date, status
*/
export const useGetOrganizationsByOrgIdSlotsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdSlotsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSlotsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список лет (дерево)
*
* Возвращает годы, в которых есть слоты организации
*/
export const useGetOrganizationsByOrgIdTreeYearsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdTreeYearsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYears({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список месяцев (дерево)
*
* Возвращает месяцы в году, в которых есть слоты
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonthsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdTreeYearsByYMonthsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonths({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список дней (дерево)
*
* Возвращает дни в месяце, в которых есть слоты
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDays({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Слоты дня (дерево)
*
* Возвращает слоты конкретного дня с привязанными бронированиями
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsSuspense = <TData = NonNullable<Common.GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsDefaultResponse>, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Мои записи (клиент)
*
* Возвращает бронирования текущего клиента (по VK ID из авторизации)
*/
export const useGetPublicBookingsMySuspense = <TData = NonNullable<Common.GetPublicBookingsMyDefaultResponse>, TError = AxiosError<GetPublicBookingsMyError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicBookingsMyData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicBookingsMyKeyFn(clientOptions, queryKey), queryFn: () => getPublicBookingsMy({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список мастеров организации (публичный)
*
* Возвращает активных мастеров организации по её ID
*/
export const useGetPublicOrgsByOrgIdMastersSuspense = <TData = NonNullable<Common.GetPublicOrgsByOrgIdMastersDefaultResponse>, TError = AxiosError<GetPublicOrgsByOrgIdMastersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdMastersData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdMastersKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdMasters({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг организации (публичный)
*
* Возвращает активные услуги организации по её ID. При передаче salon_id возвращает только услуги, доступные в данном салоне.
*/
export const useGetPublicOrgsByOrgIdServicesSuspense = <TData = NonNullable<Common.GetPublicOrgsByOrgIdServicesDefaultResponse>, TError = AxiosError<GetPublicOrgsByOrgIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Доступные слоты организации (публичный)
*
* Возвращает доступные для записи слоты организации
*/
export const useGetPublicOrgsByOrgIdSlotsSuspense = <TData = NonNullable<Common.GetPublicOrgsByOrgIdSlotsDefaultResponse>, TError = AxiosError<GetPublicOrgsByOrgIdSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Доступные окна для записи (публичный)
*
* Возвращает доступные окна для записи с учётом продолжительности услуги (включая смежные слоты)
*/
export const useGetPublicOrgsByOrgIdSlotsWindowsSuspense = <TData = NonNullable<Common.GetPublicOrgsByOrgIdSlotsWindowsDefaultResponse>, TError = AxiosError<GetPublicOrgsByOrgIdSlotsWindowsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdSlotsWindowsData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsWindowsKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdSlotsWindows({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Поиск услуг
*
* Полнотекстовый поиск услуг по всем владельцам
*/
export const useGetPublicSearchServicesSuspense = <TData = NonNullable<Common.GetPublicSearchServicesDefaultResponse>, TError = AxiosError<GetPublicSearchServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicSearchServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicSearchServicesKeyFn(clientOptions, queryKey), queryFn: () => getPublicSearchServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Мои записи в листе ожидания (клиент)
*
* Возвращает записи в листе ожидания текущего клиента
*/
export const useGetPublicWaitlistMySuspense = <TData = NonNullable<Common.GetPublicWaitlistMyDefaultResponse>, TError = AxiosError<GetPublicWaitlistMyError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicWaitlistMyData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGetPublicWaitlistMyKeyFn(clientOptions, queryKey), queryFn: () => getPublicWaitlistMy({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
