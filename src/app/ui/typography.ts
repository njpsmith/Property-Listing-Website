import localFont from "next/font/local";

export const redaction = localFont({
  src: [
    {
      path: "../../../public/fonts/Redaction-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Redaction-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Redaction-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
