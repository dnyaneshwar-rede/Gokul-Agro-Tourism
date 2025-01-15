export interface  AccordionListItemProps {
    title: string,
    body: string
}


export interface Package {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    childPrice: number;
    features: string[];
    image: string;
  }
  
  export interface BookingDetails {
    packageId: string;
    adults: number;
    children: number;
    date: Date;
    customerName: string;
    email: string;
    phone: string;
    totalAmount: number;
  }
  
  export interface PaymentResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }