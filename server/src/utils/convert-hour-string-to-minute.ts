//converter horas p minutos
//18:00 -> 1800
export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)
    
    const minutesAmount = hours * 60 + minutes;

    return minutesAmount;
}