function attachEventsListeners() {
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    function convert(value, unit) {
        let inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minsInput = document.getElementById('minutes');
    let secsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function onClick(ev) {
        let input = ev.target.parentElement.querySelector('input[type="text"]');

        let time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minsInput.value = time.minutes;
        secsInput.value = time.seconds;
    }
}