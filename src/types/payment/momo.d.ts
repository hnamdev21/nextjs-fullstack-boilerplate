type MomoCreatePaymentUserInfo = {
  name?: string;
  phoneNumber?: string;
  email?: string;
};

type MomoCreatePaymentItem = {
  id: string;
  name: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  manufacturer?: string;
  price: number;
  currency: "VND";
  quantity: number;
  unit?: string;
  totalPrice: number;
  taxAmount?: number;
};

type MomoCreatePaymentRequest = {
  partnerCode: string;
  partnerName?: string;
  storeId?: string;
  requestId: string;
  amount: number; // VND
  orderId: string;
  orderInfo: string;
  redirectUrl: string;
  ipnUrl: string;
  extraData: string;
  requestType: string;
  signature: string;
  lang: "vi" | "en";
  items?: MomoCreatePaymentItem[];
  userInfo?: MomoCreatePaymentUserInfo;
  orderExpireTime: number; // minutes
  autoCapture?: boolean;
};

type MomoCreatePaymentResponse = {
  partnerCode: string;
  requestId: string;
  orderId: string;
  amount: number;
  responseTime: number; // timestamp
  message: string;
  resultCode: number;
  payUrl: string;
  signature: string;
  shortLink: string;
};

type MomoCheckTransactionStatusRequest = {
  partnerCode: string;
  requestId: string;
  orderId: string;
  lang: "vi" | "en";
  signature: string;
};

type MomoCheckTransactionStatusPromotionInfo = {
  amount: number;
  amountSponsor: number;
  voucherId: string;
  voucherType: string;
  voucherName: string;
  merchantRate: number;
};

type MomoCheckTransactionStatusResponse = {
  partnerCode: string;
  requestId: string;
  orderId: string;
  extraData: string;
  amount: number;
  transId: number;
  payType: "web" | "qr" | ""; // if "" => it is not a payment
  resultCode: number;
  refundTrans: [];
  message: string;
  responseTime: number; // timestamp
  paymentOption?: "momo" | "pay_later";
  promotionInfo: MomoCheckTransactionStatusPromotionInfo[];
};
