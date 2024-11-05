function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('result').innerHTML = "Please select a valid date.";
        return;
    }
    const dobDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); 
        months--;
    }
    document.getElementById('result').innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
