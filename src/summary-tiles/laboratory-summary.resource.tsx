import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { FetchResponse, openmrsFetch } from "@openmrs/esm-framework";

export function useMetrics() {
  const metrics = {
    orders: 15,
    in_progress: 4,
    transferred: 1,
    completed: 6,
  };
  const { data, error } = useSWR<{ data: { results: {} } }, Error>(
    `/ws/rest/v1/queue?`,
    openmrsFetch
  );

  return {
    metrics: metrics,
    isError: error,
    isLoading: !data && !error,
  };
}

export function useServices() {
  const serviceConceptSetUuid = "330c0ec6-0ac7-4b86-9c70-29d76f0ae20a";
  const apiUrl = `/ws/rest/v1/concept/${serviceConceptSetUuid}`;
  const { data } = useSWRImmutable<FetchResponse>(apiUrl, openmrsFetch);

  return {
    services: data
      ? data?.data?.setMembers?.map((setMember) => setMember?.display)
      : [],
  };
}