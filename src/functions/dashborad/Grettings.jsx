export default function Grettings() {
    const hours = new Date().getHours();

    if(hours >= 20) return "Buenas noches";

    if(hours >= 12) return "Buenas tardes";

    if (hours >= 6) return "Buenos días";

    return "Buenas noches";

}