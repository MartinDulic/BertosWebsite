export const transfers = [
  { route: "Makarska – Tucepi", price: "50€", duration: "10 min" },
  { route: "Makarska – Baška Voda", price: "80€", duration: "15 min" },
  { route: "Makarska – Podgora", price: "80€", duration: "20 min" },
  { route: "Makarska – Brela", price: "100€", duration: "25 min" },
  { route: "Makarska – Sumartin", price: "130€", duration: "25 min" },
  { route: "Makarska – Povlja", price: "150€", duration: "35 min" },
  { route: "Makarska – Pučišća", price: "200€", duration: "45 min" },
  { route: "Makarska – Bol", price: "230€", duration: "45 min" },
  { route: "Makarska – Jelsa", price: "230€", duration: "45 min" },
  { route: "Makarska – Omiš", price: "230€", duration: "50 min" },
  { route: "Makarska – Postira", price: "250€", duration: "55 min" },
  { route: "Makarska – Stari Grad", price: "320€", duration: "1 h 15 min" },
  { route: "Makarska – Split", price: "430€", duration: "1 h 45 min" },
  { route: "Makarska – Korčula", price: "430€", duration: "1 h 45 min" },
  { route: "Makarska – Hvar", price: "430€", duration: "1 h 45 min" },
  { route: "Makarska – Trogir", price: "540€", duration: "2 h 40 min" },
  { route: "Makarska – Vela Luka", price: "600€", duration: "3 h" }
];

export const MAX_TRANSFER_MINUTES = 180;

export function getTransferMinutes(duration) {
  if (typeof duration !== "string") return null;
  
  const match = duration.match(/(\d+)\s*h\s*(\d*)|(\d+)/);
  if (!match) return null;
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : (match[1] ? 0 : parseInt(match[3]));
  
  return hours * 60 + minutes;
}