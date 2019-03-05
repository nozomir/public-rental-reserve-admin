export default interface BookModel {
  id: number;
  name: string;
  reserveType: string;
  siteType: number;
  phone: string;
  mail: string;
  amount: number;
  purpose: string;
  other: string;
  startTime: Date;
  endTime: Date;
  charge: number;
  totalCharge: number;
  profit: number;
  option: string;
  status: string;
  paid: string;
  code: string;
  cancelCharge: number;
  cancelDate: Date;
  sentFlg: boolean;
  sumProfit: number;
  createdAt: Date;
}
