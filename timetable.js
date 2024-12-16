// timetable.js
function generateTimetable() {
    // Get values from the form
    const subjects = document.getElementById('subjects').value.split(',').map(subject => subject.trim());
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    // Validate inputs
    if (!subjects.length || !startTime || !endTime) {
        alert('Please fill in all the fields.');
        return;
    }

    const timetableContainer = document.getElementById('generated-timetable');
    timetableContainer.innerHTML = ''; // Clear any existing timetable

    // Calculate the number of time slots (assuming 1-hour blocks)
    const start = new Date(`2020-01-01T${startTime}:00`);
    const end = new Date(`2020-01-01T${endTime}:00`);
    const durationInHours = (end - start) / (1000 * 60 * 60);

    // Generate timetable
    if (subjects.length <= durationInHours) {
        let timetableHTML = '<ul>';
        for (let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const timeSlot = new Date(start.getTime() + i * (1000 * 60 * 60)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timetableHTML += `<li>${timeSlot} - ${subject}</li>`;
        }
        timetableHTML += '</ul>';
        timetableContainer.innerHTML = timetableHTML;
    } else {
        alert('There are more subjects than available time slots.');
    }
}
