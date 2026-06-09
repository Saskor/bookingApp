import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

import {
  useGetOrganizationsByOrgId,
  UseGetOrganizationsByOrgIdKeyFn,
  useGetOrganizationsByOrgIdServices,
  UseGetOrganizationsByOrgIdServicesKeyFn,
  usePostOrganizationsByOrgIdServices,
  usePutOrganizationsByOrgId,
  usePutOrganizationsByOrgIdServicesById,
} from "openapi/queries";
import {
  type InternalHandlerOrganizationWrap,
  type InternalHandlerServiceResponse,
  type InternalHandlerServicesListWrap,
} from "openapi/requests";
import { useOrgId } from "pages/master/hooks";
import type { RootStore } from "store/reexports";
import type { IReactListData } from "types";

import { orgInitialState, serviceMetaFieldsMap } from "./constants";
import type { IWebLinks, IWebLinksKey } from "./types";
import { getBodyFields, getEmptyReactListItem, getReactListData } from "./utils";

export const UseModal = (rootStore: RootStore, modalId: string) => {
  const { goBack: removeLastModal, navHistory: modalsStack } = rootStore.panelsStore;

  const isOpen = modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalId;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  return { isOpen, close };
};

const useGetOrgStateShares = () => {
  const qc = useQueryClient();
  const { orgId } = useOrgId();
  const queryKey = UseGetOrganizationsByOrgIdKeyFn({
    path: {
      org_id: orgId,
    },
  });

  const { data: { organization = orgInitialState } = {} } = useGetOrganizationsByOrgId({
    path: {
      org_id: orgId,
    },
  });

  const mutation = usePutOrganizationsByOrgId();

  const saveState = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- разделить поля на беке на meta и data
    const { createdAt, createdByVkId, id, ...rest } =
      qc.getQueryData<InternalHandlerOrganizationWrap>(queryKey)?.organization || orgInitialState;

    rest.phones = rest.phones?.filter((phone) => {
      const isPhonefullfilled = phone.split("/")[1].length > 0;

      return isPhonefullfilled;
    });

    mutation.mutate(
      {
        path: {
          org_id: orgId,
        },
        body: rest,
      },
      { onSuccess: () => qc.invalidateQueries({ queryKey }) }
    );
  }, [mutation, orgId, qc, queryKey]);

  return { qc, organization, queryKey, saveState };
};

export const useOrgSettingsPanelState = () => {
  const { qc, organization, queryKey, saveState } = useGetOrgStateShares();

  const {
    name: orgName = orgInitialState.name,
    rescheduleReminderHours: reminderHours = orgInitialState.rescheduleReminderHours,
  } = organization;

  const setOrgName = useCallback(
    (newValue: string) => {
      qc.setQueryData<InternalHandlerOrganizationWrap>(queryKey, (prevState) => ({
        ...prevState,
        organization: { ...prevState?.organization, name: newValue },
      }));
    },
    [qc, queryKey]
  );

  const setReminderHours = useCallback(
    (newValue: number) =>
      qc.setQueryData<InternalHandlerOrganizationWrap>(queryKey, (prevState) => ({
        organization: { ...prevState?.organization, rescheduleReminderHours: newValue },
      })),
    [qc, queryKey]
  );

  return { orgName, setOrgName, reminderHours, setReminderHours, saveState };
};

export const usePhonesListPanelState = () => {
  const { qc, organization, queryKey, saveState } = useGetOrgStateShares();

  const { phones = orgInitialState.phones } = organization;

  const setPhonesList = useCallback(
    (newValue: IReactListData) => {
      const phones = newValue.reduce<string[]>(
        (acc, { id, value }) => [...acc, `${id}/${value}`],
        []
      );

      qc.setQueryData<InternalHandlerOrganizationWrap>(queryKey, (prevState) => ({
        ...prevState,
        organization: { ...prevState?.organization, phones },
      }));
    },
    [qc, queryKey]
  );

  return {
    phonesList: getReactListData(phones),
    getEmptyPhone: getEmptyReactListItem,
    setPhonesList,
    saveState,
  };
};

export const useWebLinksPanelState = () => {
  const { qc, organization, queryKey, saveState } = useGetOrgStateShares();

  const { maxLinks = [], tgLinks = [], vkLinks = [], websiteLinks = [] } = organization;

  const webLinks = {
    maxLinks: getReactListData(maxLinks),
    tgLinks: getReactListData(tgLinks),
    vkLinks: getReactListData(vkLinks),
    websiteLinks: getReactListData(websiteLinks),
  };

  const setWebLinks = (newValue: IWebLinks) => {
    const newWebLinks: Record<IWebLinksKey, string[]> = {
      vkLinks: [],
      tgLinks: [],
      maxLinks: [],
      websiteLinks: [],
    };

    for (const linksListKey of Object.keys(newValue) as Array<keyof IWebLinks>) {
      const newLinksList = newValue[linksListKey];

      newWebLinks[linksListKey] = newLinksList.reduce<string[]>(
        (acc, { id, value }) => [...acc, `${id}/${value}`],
        []
      );
    }

    qc.setQueryData<InternalHandlerOrganizationWrap>(queryKey, (prevState) => ({
      ...prevState,
      organization: { ...prevState?.organization, ...newWebLinks },
    }));
  };

  return {
    webLinks,
    setWebLinks,
    saveState,
  };
};

const useGetServicesStateShares = () => {
  const qc = useQueryClient();
  const { orgId } = useOrgId();
  const queryKey = UseGetOrganizationsByOrgIdServicesKeyFn({
    path: {
      org_id: orgId,
    },
  });

  const { data: { services = [] } = {} } = useGetOrganizationsByOrgIdServices(
    {
      path: {
        org_id: orgId,
      },
    },
    undefined,
    { structuralSharing: false }
  );

  const createMutation = usePostOrganizationsByOrgIdServices();
  const updateMutation = usePutOrganizationsByOrgIdServicesById();

  const saveServiceState = (sevingServiceIndex: number, createdServiceId?: number) => {
    const serviceToUpdate =
      qc.getQueryData<{ services: InternalHandlerServiceResponse[] }>(queryKey)?.services[
        sevingServiceIndex
      ] || {};

    const body = getBodyFields(serviceToUpdate, serviceMetaFieldsMap);
    const onSuccess = () => qc.invalidateQueries({ queryKey });

    if (createdServiceId) {
      updateMutation.mutate(
        {
          path: {
            org_id: orgId,
            id: createdServiceId,
          },
          body,
        },
        { onSuccess }
      );
    } else {
      createMutation.mutate(
        {
          path: {
            org_id: orgId,
          },
          body,
        },
        { onSuccess }
      );
    }
  };

  return { qc, services, queryKey, saveServiceState };
};

export const useServicesPanelState = () => {
  const { qc, services, queryKey, saveServiceState } = useGetServicesStateShares();

  const setServices = (newValue: InternalHandlerServiceResponse[]) => {
    qc.setQueryData<InternalHandlerServicesListWrap>(
      queryKey,
      (prevState) => ({
        ...prevState,
        services: newValue,
      }),
      {}
    );
  };

  return {
    services,
    setServices,
    saveServiceState,
  };
};
