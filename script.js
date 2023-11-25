const collectDataButton = document.getElementById('collectData');
const upgradeProcessingPowerButton = document.getElementById('upgradeProcessingPower');
const trainModelButton = document.getElementById('trainModel');

const dataCountElement = document.getElementById('dataCount');
const processingPowerCountElement = document.getElementById('processingPowerCount');
const accuracyElement = document.getElementById('accuracy');
const dataProcessedElement = document.getElementById('dataProcessed');

let dataCount = 0;
let processingPowerCount = 1;
let accuracy = 0;
let dataProcessed = 0;

collectDataButton.addEventListener('click', () => {
    if (dataCount > 0) {
        dataCount--;
        dataProcessed++;
        updateResources();
        updateProgressBar();
    }
});

upgradeProcessingPowerButton.addEventListener('click', () => {
    if (processingPowerCount > 0) {
        processingPowerCount--;
        accuracy += 0.1;
        updateResources();
        updateProgressBar();
    }
});

trainModelButton.addEventListener('click', () => {
    if (dataProcessed >= 1000 && accuracy >= 0.9) {
        alert('You successfully trained the machine learning model!');
    } else {
        alert('You need more data and higher accuracy to train the model.');
    }
});

function updateResources() {
    dataCountElement.textContent = dataCount;
    processingPowerCountElement.textContent = processingPowerCount;
    accuracyElement.textContent = accuracy.toFixed(2);
    dataProcessedElement.textContent = dataProcessed;
}

function updateProgressBar() {
    const progressWidth = (dataProcessed / 10000) * 100;
    document.querySelector('.progress').style.width = progressWidth + '%';
}
