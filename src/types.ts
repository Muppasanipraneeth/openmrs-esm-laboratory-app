import { type Order } from '@openmrs/esm-patient-common-lib';

export type FulfillerStatus = 'EXCEPTION' | 'RECEIVED' | 'COMPLETED' | 'IN_PROGRESS' | 'ON_HOLD' | 'DECLINED' | 'NEW';

export interface GroupedOrders {
  patientId: string;
  orders: Array<Order>;
}

export interface ListOrdersDetailsProps {
  groupedOrders: GroupedOrders;
  actions: Array<OrderAction>;
}

export interface OrderAction {
  actionName: string;
  order: 0 | number;
}

export interface OrdersDataTableProps {
  useFilter?: boolean;
  actionsSlotName?: string;
  excludeColumns?: string[];
  fulfillerStatus?: FulfillerStatus;
  excludeCanceledAndDiscontinuedOrders?: boolean;
  actions: Array<OrderAction>;
}

export type DateFilterContext = {
  dateRange: Array<Date>;
  setDateRange: React.Dispatch<React.SetStateAction<Array<Date>>>;
};
