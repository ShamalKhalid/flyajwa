import Home from "./home.js"; // your `"use client"` file

export const metadata = {
  title: "Flyajwa Travels and Holidays",
  description: "Guided by Passion, Powered by Expertise — Travel with FlyAjwa.",
  icons: {
    icon: "/assets/img/icon-flyajwa.png", // ✅ Place this in /public/assets/img/
  },
};

export default function Page() {
  return <Home />;
}
