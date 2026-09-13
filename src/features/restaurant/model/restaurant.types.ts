export interface RestaurantFeature {
  title: string;
  description: string;
}

export interface RestaurantContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    marketingText: string;
  };
  features: {
    title: string;
    items: RestaurantFeature[];
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  location: {
    title: string;
    description: string;
    address: string;
    hours: string;
    hoursText: string;
  };
  ctaFinal: {
    title: string;
    description: string;
    button: string;
  };
}
