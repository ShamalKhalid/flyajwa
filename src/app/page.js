import Home from "./home.js";

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
        url: "/assets/img/Ajwa/logo-ajwa.png",
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
  return <Home />;
}
