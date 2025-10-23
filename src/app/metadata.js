// app/layout.js
export const metadata = {
  title: "FlyAjwa Travels & Holidays – Best Travel Agency in Kerala",
  description:
    "FlyAjwa offers personalized travel services, including international and domestic tours, visa assistance, and flight bookings. Trusted by travelers across the world",
  keywords: [
    "FlyAjwa",
    "Ajwa Travels",
    "Travel Agency Edappal",
    "Best Travel Agency Edappal",
    "Travel Agency Kerala",
    "Best Travel Agency Kerala",
    "Travel Agency Kochi",
    "Best Travel Agency Kochi",
    "Best Travel Agency KSA",
    "Best Travel Agency Riyadh",
    "Best Travel Agency Dammam",
    "Best Travel Agency Mumbai",
    "Best Travel Agency India",
    "Holiday Packages Kerala",
    "Visa Assistance Edappal",
    "Flight Booking Edappal",
    "Tour Packages Edappal",
    "Umrah Packages Edappal",
    "Best Umrah Packages Edappal",
    "Travel Agency Near Me",
    "Best Travel Agency Near Me",
  ],
  openGraph: {
    title: "FlyAjwa | Your Trusted Travel Partner in Kerala",
    description:
      "Explore the world with FlyAjwa. Offering tailored travel solutions, visa services, and unforgettable holiday packages from Edappal, Kerala.",
    url: "https://www.flyajwa.com",
    siteName: "FlyAjwa Travels & Holidays",
    images: [
      {
        url: "/assets/img/logo-ajwa.png",
        width: 1200,
        height: 630,
        alt: "FlyAjwa Tour Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/img/icon-flyajwa.png",
  },
  metadataBase: new URL("https://www.flyajwa.com"),
};

export default function Page() {
  return <ClientHome />;
}
