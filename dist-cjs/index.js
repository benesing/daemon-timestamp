"use strict";
// © 2025 Ben Singer
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = timestamp;
function timestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const monval = now.getMonth() + 1;
    const mons = monval.toString().padStart(2, "0");
    const days = now.getDate().toString().padStart(2, "0");
    const hour = now.getHours().toString().padStart(2, "0");
    const mins = now.getMinutes().toString().padStart(2, "0");
    const secs = now.getSeconds().toString().padStart(2, "0");
    const offset_amount = now.getTimezoneOffset();
    const offset_positive = Math.abs(offset_amount);
    const offset_hours = Math.floor(offset_positive / 60);
    const offset_mins = offset_positive % 60;
    const offsign = (offset_amount > 0 ? "-" : "+");
    const offhour = offset_hours.toString().padStart(2, "0");
    const offmins = offset_mins.toString().padStart(2, "0");
    return `${year}-${mons}-${days} ${hour}:${mins}:${secs} ${offsign}${offhour}${offmins}`;
}
exports.default = timestamp;
