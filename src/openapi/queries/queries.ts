// generated with @7nohe/openapi-react-query-codegen@2.1.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Options } from "../requests/sdk.gen";
import { deleteOrganizationsByOrgIdBookingsByIdReschedule, deleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId, deleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate, deleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceId, deleteOrganizationsByOrgIdMembersByVkId, deleteOrganizationsByOrgIdRolesByRoleId, deleteOrganizationsByOrgIdSalonsBySalonId, deleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId, deleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhone, deletePublicBookingsById, deletePublicWaitlistById, getHealth, getMeContext, getOrganizationsByOrgId, getOrganizationsByOrgIdBookings, getOrganizationsByOrgIdMasters, getOrganizationsByOrgIdMastersByMasterId, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions, getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule, getOrganizationsByOrgIdMembers, getOrganizationsByOrgIdRoles, getOrganizationsByOrgIdSalons, getOrganizationsByOrgIdSalonsBySalonId, getOrganizationsByOrgIdSalonsBySalonIdServices, getOrganizationsByOrgIdServices, getOrganizationsByOrgIdSlots, getOrganizationsByOrgIdTreeYears, getOrganizationsByOrgIdTreeYearsByYMonths, getOrganizationsByOrgIdTreeYearsByYMonthsByMDays, getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots, getPublicBookingsMy, getPublicOrgsByOrgIdMasters, getPublicOrgsByOrgIdServices, getPublicOrgsByOrgIdSlots, getPublicOrgsByOrgIdSlotsWindows, getPublicSearchServices, getPublicWaitlistMy, patchOrganizationsByOrgIdBookingsByIdDuration, postOrganizations, postOrganizationsByOrgIdBookings, postOrganizationsByOrgIdBookingsByIdReschedule, postOrganizationsByOrgIdMasters, postOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId, postOrganizationsByOrgIdMastersByMasterIdServicesByServiceId, postOrganizationsByOrgIdMembers, postOrganizationsByOrgIdRoles, postOrganizationsByOrgIdSalons, postOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId, postOrganizationsByOrgIdSalonsBySalonIdPhones, postOrganizationsByOrgIdServices, postOrganizationsByOrgIdSlotsGenerate, postPublicOrgsByOrgIdBookings, postPublicOrgsByOrgIdWaitlist, postPublicWaitlistByIdConfirm, putOrganizationsByOrgId, putOrganizationsByOrgIdBookingsByIdStatus, putOrganizationsByOrgIdMastersByMasterId, putOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate, putOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule, putOrganizationsByOrgIdRolesByRoleId, putOrganizationsByOrgIdSalonsBySalonId, putOrganizationsByOrgIdServicesById, putPublicBookingsByIdReschedule } from "../requests/sdk.gen";
import { DeleteOrganizationsByOrgIdBookingsByIdRescheduleData, DeleteOrganizationsByOrgIdBookingsByIdRescheduleError, DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdError, DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateError, DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdError, DeleteOrganizationsByOrgIdMembersByVkIdData, DeleteOrganizationsByOrgIdMembersByVkIdError, DeleteOrganizationsByOrgIdRolesByRoleIdData, DeleteOrganizationsByOrgIdRolesByRoleIdError, DeleteOrganizationsByOrgIdSalonsBySalonIdData, DeleteOrganizationsByOrgIdSalonsBySalonIdError, DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdError, DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneData, DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneError, DeletePublicBookingsByIdData, DeletePublicBookingsByIdError, DeletePublicWaitlistByIdData, DeletePublicWaitlistByIdError, GetHealthData, GetMeContextData, GetMeContextError, GetOrganizationsByOrgIdBookingsData, GetOrganizationsByOrgIdBookingsError, GetOrganizationsByOrgIdData, GetOrganizationsByOrgIdError, GetOrganizationsByOrgIdMastersByMasterIdData, GetOrganizationsByOrgIdMastersByMasterIdError, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsError, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError, GetOrganizationsByOrgIdMastersData, GetOrganizationsByOrgIdMastersError, GetOrganizationsByOrgIdMembersData, GetOrganizationsByOrgIdMembersError, GetOrganizationsByOrgIdRolesData, GetOrganizationsByOrgIdRolesError, GetOrganizationsByOrgIdSalonsBySalonIdData, GetOrganizationsByOrgIdSalonsBySalonIdError, GetOrganizationsByOrgIdSalonsBySalonIdServicesData, GetOrganizationsByOrgIdSalonsBySalonIdServicesError, GetOrganizationsByOrgIdSalonsData, GetOrganizationsByOrgIdSalonsError, GetOrganizationsByOrgIdServicesData, GetOrganizationsByOrgIdServicesError, GetOrganizationsByOrgIdSlotsData, GetOrganizationsByOrgIdSlotsError, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsError, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysError, GetOrganizationsByOrgIdTreeYearsByYMonthsData, GetOrganizationsByOrgIdTreeYearsByYMonthsError, GetOrganizationsByOrgIdTreeYearsData, GetOrganizationsByOrgIdTreeYearsError, GetPublicBookingsMyData, GetPublicBookingsMyError, GetPublicOrgsByOrgIdMastersData, GetPublicOrgsByOrgIdMastersError, GetPublicOrgsByOrgIdServicesData, GetPublicOrgsByOrgIdServicesError, GetPublicOrgsByOrgIdSlotsData, GetPublicOrgsByOrgIdSlotsError, GetPublicOrgsByOrgIdSlotsWindowsData, GetPublicOrgsByOrgIdSlotsWindowsError, GetPublicSearchServicesData, GetPublicSearchServicesError, GetPublicWaitlistMyData, GetPublicWaitlistMyError, PatchOrganizationsByOrgIdBookingsByIdDurationData, PatchOrganizationsByOrgIdBookingsByIdDurationError, PostOrganizationsByOrgIdBookingsByIdRescheduleData, PostOrganizationsByOrgIdBookingsByIdRescheduleError, PostOrganizationsByOrgIdBookingsData, PostOrganizationsByOrgIdBookingsError, PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdError, PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdError, PostOrganizationsByOrgIdMastersData, PostOrganizationsByOrgIdMastersError, PostOrganizationsByOrgIdMembersData, PostOrganizationsByOrgIdMembersError, PostOrganizationsByOrgIdRolesData, PostOrganizationsByOrgIdRolesError, PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdError, PostOrganizationsByOrgIdSalonsBySalonIdPhonesData, PostOrganizationsByOrgIdSalonsBySalonIdPhonesError, PostOrganizationsByOrgIdSalonsData, PostOrganizationsByOrgIdSalonsError, PostOrganizationsByOrgIdServicesData, PostOrganizationsByOrgIdServicesError, PostOrganizationsByOrgIdSlotsGenerateData, PostOrganizationsByOrgIdSlotsGenerateError, PostOrganizationsData, PostOrganizationsError, PostPublicOrgsByOrgIdBookingsData, PostPublicOrgsByOrgIdBookingsError, PostPublicOrgsByOrgIdWaitlistData, PostPublicOrgsByOrgIdWaitlistError, PostPublicWaitlistByIdConfirmData, PostPublicWaitlistByIdConfirmError, PutOrganizationsByOrgIdBookingsByIdStatusData, PutOrganizationsByOrgIdBookingsByIdStatusError, PutOrganizationsByOrgIdData, PutOrganizationsByOrgIdError, PutOrganizationsByOrgIdMastersByMasterIdData, PutOrganizationsByOrgIdMastersByMasterIdError, PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateError, PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError, PutOrganizationsByOrgIdRolesByRoleIdData, PutOrganizationsByOrgIdRolesByRoleIdError, PutOrganizationsByOrgIdSalonsBySalonIdData, PutOrganizationsByOrgIdSalonsBySalonIdError, PutOrganizationsByOrgIdServicesByIdData, PutOrganizationsByOrgIdServicesByIdError, PutPublicBookingsByIdRescheduleData, PutPublicBookingsByIdRescheduleError } from "../requests/types.gen";
import * as Common from "./common";
/**
* Проверка здоровья сервиса
*
* Возвращает статус работоспособности API Gateway
*/
export const useGetHealth = <TData = Common.GetHealthDefaultResponse, TError = AxiosError<unknown>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetHealthData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetHealthKeyFn(clientOptions, queryKey), queryFn: () => getHealth({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Контекст текущего пользователя
*
* Возвращает роли пользователя в организациях, права доступа по каждой роли и профили мастера
*/
export const useGetMeContext = <TData = Common.GetMeContextDefaultResponse, TError = AxiosError<GetMeContextError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetMeContextData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetMeContextKeyFn(clientOptions, queryKey), queryFn: () => getMeContext({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить организацию
*
* Возвращает данные организации по ID
*/
export const useGetOrganizationsByOrgId = <TData = Common.GetOrganizationsByOrgIdDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список бронирований
*
* Возвращает бронирования текущего владельца с возможностью фильтрации
*/
export const useGetOrganizationsByOrgIdBookings = <TData = Common.GetOrganizationsByOrgIdBookingsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdBookingsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdBookingsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdBookingsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdBookings({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список мастеров
*
* Возвращает список мастеров организации
*/
export const useGetOrganizationsByOrgIdMasters = <TData = Common.GetOrganizationsByOrgIdMastersDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdMastersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMasters({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить мастера
*
* Возвращает данные мастера по ID
*/
export const useGetOrganizationsByOrgIdMastersByMasterId = <TData = Common.GetOrganizationsByOrgIdMastersByMasterIdDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список исключений в расписании мастера
*
* Возвращает исключения в расписании мастера за указанный период (по умолчанию — 28 дней от сегодня).
*/
export const useGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions = <TData = Common.GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptions({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить рабочее расписание мастера
*
* Возвращает недельный шаблон рабочего времени мастера в салоне.
*/
export const useGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule = <TData = Common.GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список участников организации
*
* Возвращает всех участников организации
*/
export const useGetOrganizationsByOrgIdMembers = <TData = Common.GetOrganizationsByOrgIdMembersDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdMembersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdMembersData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdMembersKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdMembers({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список ролей организации
*
* Возвращает все роли организации (системные + кастомные)
*/
export const useGetOrganizationsByOrgIdRoles = <TData = Common.GetOrganizationsByOrgIdRolesDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdRolesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdRolesData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdRolesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdRoles({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список салонов
*
* Возвращает список салонов организации
*/
export const useGetOrganizationsByOrgIdSalons = <TData = Common.GetOrganizationsByOrgIdSalonsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdSalonsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalons({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Получить салон
*
* Возвращает данные салона по ID
*/
export const useGetOrganizationsByOrgIdSalonsBySalonId = <TData = Common.GetOrganizationsByOrgIdSalonsBySalonIdDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalonsBySalonId({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг салона
*
* Возвращает услуги организации, доступные в данном салоне (без исключённых услуг)
*/
export const useGetOrganizationsByOrgIdSalonsBySalonIdServices = <TData = Common.GetOrganizationsByOrgIdSalonsBySalonIdServicesDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdSalonsBySalonIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSalonsBySalonIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSalonsBySalonIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSalonsBySalonIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг
*
* Возвращает список всех услуг текущего владельца
*/
export const useGetOrganizationsByOrgIdServices = <TData = Common.GetOrganizationsByOrgIdServicesDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список временных слотов
*
* Возвращает слоты с возможностью фильтрации по service_id, date, status
*/
export const useGetOrganizationsByOrgIdSlots = <TData = Common.GetOrganizationsByOrgIdSlotsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdSlotsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список лет (дерево)
*
* Возвращает годы, в которых есть слоты организации
*/
export const useGetOrganizationsByOrgIdTreeYears = <TData = Common.GetOrganizationsByOrgIdTreeYearsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYears({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список месяцев (дерево)
*
* Возвращает месяцы в году, в которых есть слоты
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonths = <TData = Common.GetOrganizationsByOrgIdTreeYearsByYMonthsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonths({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список дней (дерево)
*
* Возвращает дни в месяце, в которых есть слоты
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonthsByMDays = <TData = Common.GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDays({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Слоты дня (дерево)
*
* Возвращает слоты конкретного дня с привязанными бронированиями
*/
export const useGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots = <TData = Common.GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsDefaultResponse, TError = AxiosError<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlotsKeyFn(clientOptions, queryKey), queryFn: () => getOrganizationsByOrgIdTreeYearsByYMonthsByMDaysByDSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Мои записи (клиент)
*
* Возвращает бронирования текущего клиента (по VK ID из авторизации)
*/
export const useGetPublicBookingsMy = <TData = Common.GetPublicBookingsMyDefaultResponse, TError = AxiosError<GetPublicBookingsMyError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicBookingsMyData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicBookingsMyKeyFn(clientOptions, queryKey), queryFn: () => getPublicBookingsMy({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список мастеров организации (публичный)
*
* Возвращает активных мастеров организации по её ID
*/
export const useGetPublicOrgsByOrgIdMasters = <TData = Common.GetPublicOrgsByOrgIdMastersDefaultResponse, TError = AxiosError<GetPublicOrgsByOrgIdMastersError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdMastersData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdMastersKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdMasters({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Список услуг организации (публичный)
*
* Возвращает активные услуги организации по её ID. При передаче salon_id возвращает только услуги, доступные в данном салоне.
*/
export const useGetPublicOrgsByOrgIdServices = <TData = Common.GetPublicOrgsByOrgIdServicesDefaultResponse, TError = AxiosError<GetPublicOrgsByOrgIdServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdServicesKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Доступные слоты организации (публичный)
*
* Возвращает доступные для записи слоты организации
*/
export const useGetPublicOrgsByOrgIdSlots = <TData = Common.GetPublicOrgsByOrgIdSlotsDefaultResponse, TError = AxiosError<GetPublicOrgsByOrgIdSlotsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdSlotsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdSlots({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Доступные окна для записи (публичный)
*
* Возвращает доступные окна для записи с учётом продолжительности услуги (включая смежные слоты)
*/
export const useGetPublicOrgsByOrgIdSlotsWindows = <TData = Common.GetPublicOrgsByOrgIdSlotsWindowsDefaultResponse, TError = AxiosError<GetPublicOrgsByOrgIdSlotsWindowsError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicOrgsByOrgIdSlotsWindowsData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicOrgsByOrgIdSlotsWindowsKeyFn(clientOptions, queryKey), queryFn: () => getPublicOrgsByOrgIdSlotsWindows({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Поиск услуг
*
* Полнотекстовый поиск услуг по всем владельцам
*/
export const useGetPublicSearchServices = <TData = Common.GetPublicSearchServicesDefaultResponse, TError = AxiosError<GetPublicSearchServicesError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicSearchServicesData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicSearchServicesKeyFn(clientOptions, queryKey), queryFn: () => getPublicSearchServices({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Мои записи в листе ожидания (клиент)
*
* Возвращает записи в листе ожидания текущего клиента
*/
export const useGetPublicWaitlistMy = <TData = Common.GetPublicWaitlistMyDefaultResponse, TError = AxiosError<GetPublicWaitlistMyError>, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<GetPublicWaitlistMyData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGetPublicWaitlistMyKeyFn(clientOptions, queryKey), queryFn: () => getPublicWaitlistMy({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
/**
* Создать организацию
*
* Создает новую организацию от имени текущего пользователя
*/
export const usePostOrganizations = <TData = Common.PostOrganizationsMutationResult, TError = AxiosError<PostOrganizationsError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsKeyFn(mutationKey), mutationFn: clientOptions => postOrganizations(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Ручная запись клиента (владелец)
*
* Владелец создаёт запись вручную — для VK-клиента (по ID) или walk-in клиента (имя + телефон)
*/
export const usePostOrganizationsByOrgIdBookings = <TData = Common.PostOrganizationsByOrgIdBookingsMutationResult, TError = AxiosError<PostOrganizationsByOrgIdBookingsError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdBookingsData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdBookingsData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdBookingsKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdBookings(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Предложить перенос (владелец)
*
* Владелец предлагает клиенту перенос бронирования на новый слот
*/
export const usePostOrganizationsByOrgIdBookingsByIdReschedule = <TData = Common.PostOrganizationsByOrgIdBookingsByIdRescheduleMutationResult, TError = AxiosError<PostOrganizationsByOrgIdBookingsByIdRescheduleError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdBookingsByIdRescheduleData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdBookingsByIdRescheduleData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdBookingsByIdRescheduleKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdBookingsByIdReschedule(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Создать мастера
*
* Создает нового мастера в организации
*/
export const usePostOrganizationsByOrgIdMasters = <TData = Common.PostOrganizationsByOrgIdMastersMutationResult, TError = AxiosError<PostOrganizationsByOrgIdMastersError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdMastersData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdMastersData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdMastersKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdMasters(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Привязать мастера к салону
*
* Добавляет мастера в список салонов
*/
export const usePostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId = <TData = Common.PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdMutationResult, TError = AxiosError<PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Назначить услугу мастеру
*
* Добавляет услугу в список услуг мастера
*/
export const usePostOrganizationsByOrgIdMastersByMasterIdServicesByServiceId = <TData = Common.PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdMutationResult, TError = AxiosError<PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdMastersByMasterIdServicesByServiceId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Добавить участника организации
*
* Добавляет пользователя VK в организацию с указанной ролью
*/
export const usePostOrganizationsByOrgIdMembers = <TData = Common.PostOrganizationsByOrgIdMembersMutationResult, TError = AxiosError<PostOrganizationsByOrgIdMembersError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdMembersData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdMembersData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdMembersKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdMembers(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Создать роль организации
*
* Создаёт кастомную роль с набором прав. Требует права manageRoles.
*/
export const usePostOrganizationsByOrgIdRoles = <TData = Common.PostOrganizationsByOrgIdRolesMutationResult, TError = AxiosError<PostOrganizationsByOrgIdRolesError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdRolesData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdRolesData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdRolesKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdRoles(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Создать салон
*
* Создает новый салон в организации. Требует права manageOrgInfo.
*/
export const usePostOrganizationsByOrgIdSalons = <TData = Common.PostOrganizationsByOrgIdSalonsMutationResult, TError = AxiosError<PostOrganizationsByOrgIdSalonsError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdSalonsData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdSalonsData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdSalonsKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdSalons(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Добавить исключённую услугу в филиал
*
* Временно исключает услугу из перечня услуг филиала
*/
export const usePostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId = <TData = Common.PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdMutationResult, TError = AxiosError<PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Добавить телефон в филиал
*
* Добавляет номер телефона в список телефонов филиала. Требует права manageOrgInfo.
*/
export const usePostOrganizationsByOrgIdSalonsBySalonIdPhones = <TData = Common.PostOrganizationsByOrgIdSalonsBySalonIdPhonesMutationResult, TError = AxiosError<PostOrganizationsByOrgIdSalonsBySalonIdPhonesError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdSalonsBySalonIdPhonesData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdSalonsBySalonIdPhonesData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdSalonsBySalonIdPhonesKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdSalonsBySalonIdPhones(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Создать услугу
*
* Создает новую услугу для текущего владельца
*/
export const usePostOrganizationsByOrgIdServices = <TData = Common.PostOrganizationsByOrgIdServicesMutationResult, TError = AxiosError<PostOrganizationsByOrgIdServicesError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdServicesData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdServicesData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdServicesKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdServices(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Сгенерировать временные слоты
*
* Генерирует слоты для массива интервалов рабочего времени с диапазоном дат
*/
export const usePostOrganizationsByOrgIdSlotsGenerate = <TData = Common.PostOrganizationsByOrgIdSlotsGenerateMutationResult, TError = AxiosError<PostOrganizationsByOrgIdSlotsGenerateError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostOrganizationsByOrgIdSlotsGenerateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostOrganizationsByOrgIdSlotsGenerateData, true>, TContext>({ mutationKey: Common.UsePostOrganizationsByOrgIdSlotsGenerateKeyFn(mutationKey), mutationFn: clientOptions => postOrganizationsByOrgIdSlotsGenerate(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Создать бронирование (публичный)
*
* Создает бронирование через Saga-паттерн (ReserveSlot → CreateBooking → ConfirmSlot)
*/
export const usePostPublicOrgsByOrgIdBookings = <TData = Common.PostPublicOrgsByOrgIdBookingsMutationResult, TError = AxiosError<PostPublicOrgsByOrgIdBookingsError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostPublicOrgsByOrgIdBookingsData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostPublicOrgsByOrgIdBookingsData, true>, TContext>({ mutationKey: Common.UsePostPublicOrgsByOrgIdBookingsKeyFn(mutationKey), mutationFn: clientOptions => postPublicOrgsByOrgIdBookings(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Встать в лист ожидания (клиент)
*
* Клиент встаёт в лист ожидания к владельцу с предпочтительным временем
*/
export const usePostPublicOrgsByOrgIdWaitlist = <TData = Common.PostPublicOrgsByOrgIdWaitlistMutationResult, TError = AxiosError<PostPublicOrgsByOrgIdWaitlistError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostPublicOrgsByOrgIdWaitlistData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostPublicOrgsByOrgIdWaitlistData, true>, TContext>({ mutationKey: Common.UsePostPublicOrgsByOrgIdWaitlistKeyFn(mutationKey), mutationFn: clientOptions => postPublicOrgsByOrgIdWaitlist(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Подтвердить слот из листа ожидания (клиент)
*
* Клиент подтверждает предложенный слот из листа ожидания (создаёт бронирование и подтверждает слот)
*/
export const usePostPublicWaitlistByIdConfirm = <TData = Common.PostPublicWaitlistByIdConfirmMutationResult, TError = AxiosError<PostPublicWaitlistByIdConfirmError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PostPublicWaitlistByIdConfirmData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PostPublicWaitlistByIdConfirmData, true>, TContext>({ mutationKey: Common.UsePostPublicWaitlistByIdConfirmKeyFn(mutationKey), mutationFn: clientOptions => postPublicWaitlistByIdConfirm(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить организацию
*
* Обновляет данные организации. Требует права manageOrgInfo.
*/
export const usePutOrganizationsByOrgId = <TData = Common.PutOrganizationsByOrgIdMutationResult, TError = AxiosError<PutOrganizationsByOrgIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить статус бронирования
*
* Изменяет статус бронирования (подтвердить, отклонить, отменить)
*/
export const usePutOrganizationsByOrgIdBookingsByIdStatus = <TData = Common.PutOrganizationsByOrgIdBookingsByIdStatusMutationResult, TError = AxiosError<PutOrganizationsByOrgIdBookingsByIdStatusError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdBookingsByIdStatusData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdBookingsByIdStatusData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdBookingsByIdStatusKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdBookingsByIdStatus(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить мастера
*
* Обновляет данные мастера
*/
export const usePutOrganizationsByOrgIdMastersByMasterId = <TData = Common.PutOrganizationsByOrgIdMastersByMasterIdMutationResult, TError = AxiosError<PutOrganizationsByOrgIdMastersByMasterIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdMastersByMasterIdKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdMastersByMasterId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Добавить или обновить исключение в расписании
*
* Задаёт особый режим работы мастера на конкретную дату (выходной или нестандартные часы).
* Автоматически пересоздаёт слоты для этой даты.
*/
export const usePutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate = <TData = Common.PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateMutationResult, TError = AxiosError<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Настроить рабочее расписание мастера
*
* Заменяет недельный шаблон рабочего времени мастера в салоне и автоматически генерирует слоты на 28 дней.
* Передайте пустой массив schedules, чтобы очистить расписание.
*/
export const usePutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule = <TData = Common.PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleMutationResult, TError = AxiosError<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkScheduleKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdWorkSchedule(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить роль организации
*
* Обновляет название и/или права кастомной роли. Требует права manageRoles.
*/
export const usePutOrganizationsByOrgIdRolesByRoleId = <TData = Common.PutOrganizationsByOrgIdRolesByRoleIdMutationResult, TError = AxiosError<PutOrganizationsByOrgIdRolesByRoleIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdRolesByRoleIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdRolesByRoleIdData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdRolesByRoleIdKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdRolesByRoleId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить салон
*
* Обновляет данные салона. Требует права manageOrgInfo.
*/
export const usePutOrganizationsByOrgIdSalonsBySalonId = <TData = Common.PutOrganizationsByOrgIdSalonsBySalonIdMutationResult, TError = AxiosError<PutOrganizationsByOrgIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdSalonsBySalonIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdSalonsBySalonIdData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdSalonsBySalonIdKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdSalonsBySalonId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Обновить услугу
*
* Обновляет данные услуги по ID. Требует права manageServicesSelf или manageServicesOthers.
*/
export const usePutOrganizationsByOrgIdServicesById = <TData = Common.PutOrganizationsByOrgIdServicesByIdMutationResult, TError = AxiosError<PutOrganizationsByOrgIdServicesByIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutOrganizationsByOrgIdServicesByIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutOrganizationsByOrgIdServicesByIdData, true>, TContext>({ mutationKey: Common.UsePutOrganizationsByOrgIdServicesByIdKeyFn(mutationKey), mutationFn: clientOptions => putOrganizationsByOrgIdServicesById(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Ответить на предложение переноса (клиент)
*
* Клиент принимает или отклоняет предложение переноса от владельца
*/
export const usePutPublicBookingsByIdReschedule = <TData = Common.PutPublicBookingsByIdRescheduleMutationResult, TError = AxiosError<PutPublicBookingsByIdRescheduleError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PutPublicBookingsByIdRescheduleData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PutPublicBookingsByIdRescheduleData, true>, TContext>({ mutationKey: Common.UsePutPublicBookingsByIdRescheduleKeyFn(mutationKey), mutationFn: clientOptions => putPublicBookingsByIdReschedule(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Изменить длительность бронирования
*
* Владелец изменяет продолжительность бронирования; при необходимости резервируются смежные слоты
*/
export const usePatchOrganizationsByOrgIdBookingsByIdDuration = <TData = Common.PatchOrganizationsByOrgIdBookingsByIdDurationMutationResult, TError = AxiosError<PatchOrganizationsByOrgIdBookingsByIdDurationError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PatchOrganizationsByOrgIdBookingsByIdDurationData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PatchOrganizationsByOrgIdBookingsByIdDurationData, true>, TContext>({ mutationKey: Common.UsePatchOrganizationsByOrgIdBookingsByIdDurationKeyFn(mutationKey), mutationFn: clientOptions => patchOrganizationsByOrgIdBookingsByIdDuration(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Отозвать предложение переноса (владелец)
*
* Владелец отзывает предложение переноса, бронирование возвращается в CONFIRMED
*/
export const useDeleteOrganizationsByOrgIdBookingsByIdReschedule = <TData = Common.DeleteOrganizationsByOrgIdBookingsByIdRescheduleMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdBookingsByIdRescheduleError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdBookingsByIdRescheduleData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdBookingsByIdRescheduleData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdBookingsByIdRescheduleKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdBookingsByIdReschedule(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Отвязать мастера от салона
*
* Убирает мастера из списка салонов
*/
export const useDeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId = <TData = Common.DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Удалить исключение из расписания
*
* Удаляет исключение и восстанавливает слоты по недельному шаблону для этой даты.
*/
export const useDeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate = <TData = Common.DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDateKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdMastersByMasterIdSalonsBySalonIdScheduleExceptionsByDate(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Удалить услугу у мастера
*
* Убирает услугу из списка услуг мастера
*/
export const useDeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceId = <TData = Common.DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdMastersByMasterIdServicesByServiceId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Удалить участника организации
*
* Удаляет пользователя из организации
*/
export const useDeleteOrganizationsByOrgIdMembersByVkId = <TData = Common.DeleteOrganizationsByOrgIdMembersByVkIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdMembersByVkIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdMembersByVkIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdMembersByVkIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdMembersByVkIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdMembersByVkId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Удалить роль организации
*
* Удаляет кастомную роль. Системные роли удалить нельзя. Требует права manageRoles.
*/
export const useDeleteOrganizationsByOrgIdRolesByRoleId = <TData = Common.DeleteOrganizationsByOrgIdRolesByRoleIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdRolesByRoleIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdRolesByRoleIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdRolesByRoleIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdRolesByRoleIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdRolesByRoleId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Деактивировать салон
*
* Деактивирует салон (is_active = false). Требует права manageOrgInfo.
*/
export const useDeleteOrganizationsByOrgIdSalonsBySalonId = <TData = Common.DeleteOrganizationsByOrgIdSalonsBySalonIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdSalonsBySalonIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdSalonsBySalonIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdSalonsBySalonId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Убрать исключённую услугу из филиала
*
* Возвращает услугу в перечень услуг филиала
*/
export const useDeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId = <TData = Common.DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceIdKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdSalonsBySalonIdExcludedServicesByServiceId(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Удалить телефон из филиала
*
* Удаляет номер телефона из списка телефонов филиала. Требует права manageOrgInfo.
*/
export const useDeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhone = <TData = Common.DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneMutationResult, TError = AxiosError<DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneData, true>, TContext>({ mutationKey: Common.UseDeleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhoneKeyFn(mutationKey), mutationFn: clientOptions => deleteOrganizationsByOrgIdSalonsBySalonIdPhonesByPhone(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Отменить свою запись (клиент)
*
* Клиент отменяет собственную запись со статусом PENDING или CONFIRMED
*/
export const useDeletePublicBookingsById = <TData = Common.DeletePublicBookingsByIdMutationResult, TError = AxiosError<DeletePublicBookingsByIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeletePublicBookingsByIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeletePublicBookingsByIdData, true>, TContext>({ mutationKey: Common.UseDeletePublicBookingsByIdKeyFn(mutationKey), mutationFn: clientOptions => deletePublicBookingsById(clientOptions) as unknown as Promise<TData>, ...options });
/**
* Отменить запись в листе ожидания (клиент)
*
* Клиент отменяет свою запись в листе ожидания; если слот был зарезервирован — освобождает его
*/
export const useDeletePublicWaitlistById = <TData = Common.DeletePublicWaitlistByIdMutationResult, TError = AxiosError<DeletePublicWaitlistByIdError>, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<DeletePublicWaitlistByIdData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<DeletePublicWaitlistByIdData, true>, TContext>({ mutationKey: Common.UseDeletePublicWaitlistByIdKeyFn(mutationKey), mutationFn: clientOptions => deletePublicWaitlistById(clientOptions) as unknown as Promise<TData>, ...options });
