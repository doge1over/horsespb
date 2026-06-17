// All icons from lucide-react (MIT) and react-icons/pi Phosphor (MIT)
// Free for commercial use, no attribution required

import {
    Users, Baby, GraduationCap, Camera, Gift,
    MapPin, Phone, Mail, Clock,
} from "lucide-react";
import { PiHorse } from "react-icons/pi";

const srv = { size: 22, strokeWidth: 1.5, color: "#C9A84C" } as const;
const cnt = { size: 18, strokeWidth: 1.5, color: "#C9A84C" } as const;

// ── Services ──────────────────────────────────────
export function IconHorse()  { return <PiHorse  size={22} color="#C9A84C" />; }
export function IconUsers()  { return <Users  {...srv} />; }
export function IconChild()  { return <Baby   {...srv} />; }
export function IconScroll() { return <GraduationCap {...srv} />; }
export function IconCamera() { return <Camera {...srv} />; }
export function IconGift()   { return <Gift   {...srv} />; }

// ── Contact ───────────────────────────────────────
export function IconMapPin() { return <MapPin {...cnt} />; }
export function IconPhone()  { return <Phone  {...cnt} />; }
export function IconMail()   { return <Mail   {...cnt} />; }
export function IconClock()  { return <Clock  {...cnt} />; }
