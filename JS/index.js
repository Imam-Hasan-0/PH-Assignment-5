// blog button to faq page
function myFunction() {
  location.href = "/faq.html";
}

// btn active
function activeButton(button) {
  const donationContainer = document.getElementById('donation-div');
  const donationButton = document.getElementById('donation-btn');
  const historyContainer = document.getElementById('history-div');
  const historyButton = document.getElementById('history-btn');

  if (button === 'donation-btn') {
      donationContainer.classList.add('bg-[#B4F461]');
      historyContainer.classList.remove('bg-[#B4F461]');
      donationButton.classList.add('text-white'); 
      historyButton.classList.remove('text-white');

  } else if (button === 'history-btn') {
      historyContainer.classList.add('bg-[#B4F461]');
      donationContainer.classList.remove('bg-[#B4F461]');

      historyButton.classList.add('text-white');
      donationButton.classList.remove('text-white');
  }
}

document.getElementById('donation-btn').addEventListener('click', function() {
  activeButton('donation-btn');
});

document.getElementById('history-btn').addEventListener('click', function() {
  activeButton('history-btn');
});

// calculate math
