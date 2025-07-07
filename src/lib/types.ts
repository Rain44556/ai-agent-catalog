 export type Agent = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Beta" | "Archived";
  category: string;
  image: string;
  pricingModel: string;
};