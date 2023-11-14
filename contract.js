document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contract-form').reset();
});

function submitContract() {
    const clientName = document.getElementById('client-name').value;
    const service = document.getElementById('service').value;
    const contractAmount = document.getElementById('contract-amount').value;
    const contractDuration = document.getElementById('contract-duration').value;

    const contract = {
        clientName,
        service,
        contractAmount,
        contractDuration
    };

    displayContract(contract);
    clearForm();
}

function displayContract(contract) {
    const contractList = document.getElementById('contract-list');
    const contractItem = document.createElement('li');
    contractItem.className = 'contract-item';
    contractItem.innerHTML = `
        <strong>Client:</strong> ${contract.clientName} |
        <strong>Service:</strong> ${contract.service} |
        <strong>Amount:</strong> $${contract.contractAmount} |
        <strong>Duration:</strong> ${contract.contractDuration} months
    `;
    contractList.appendChild(contractItem);
}

function clearForm() {
    document.getElementById('contract-form').reset();
}
