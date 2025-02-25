function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    // Reset previous results and errors
    resultDiv.classList.remove('show');
    errorDiv.style.display = 'none';

    if (!birthdateInput) {
        errorDiv.textContent = 'Please select a birth date';
        errorDiv.style.display = 'block';
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    if (birthDate > today) {
        errorDiv.textContent = 'Birth date cannot be in the future';
        errorDiv.style.display = 'block';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if month difference is negative
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust days if negative
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
        months--;
    }

    // Display results
    document.getElementById('years').textContent = `Years: ${years}`;
    document.getElementById('months').textContent = `Months: ${months}`;
    document.getElementById('days').textContent = `Days: ${days}`;
    resultDiv.classList.add('show');
}