import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RideShare AAB",
    short_name: "RideShare",
    description: "Udhëtime drejt AAB me listë publike për lexim pa internet.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "sq",
    background_color: "#f5f7f2",
    theme_color: "#12634f",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
