import ClientHome from "./ClientHome";

// app/layout.js
export const metadata = {
  title: "FlyAjwa Travels and Holidays",
  description: "Book unforgettable tours and travel packages with FlyAjwa.",
  keywords: [
    "FlyAjwa",
    "Ajwa Travels",
    "Travel Agency",
    "Holiday Packages",
    "Umrah Tours",
    "Flights Booking",
    "International Tours",
  ],
  openGraph: {
    title: "FlyAjwa | Ajwa Travels and Holidays",
    description: "Unforgettable travel experiences around the world.",
    url: "https://www.flyajwa.com",
    siteName: "FlyAjwa",
    images: [
      {
        url: "/assets/img/Ajwa/logo-ajwa.png", // place this in public folder
        width: 1200,
        height: 630,
        alt: "FlyAjwa Tour Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/img/icon-flyajwa.png", // place in /public folder
  },
  metadataBase: new URL("https://www.flyajwa.com"),
};

export default function Page() {
  return <ClientHome />;
}
