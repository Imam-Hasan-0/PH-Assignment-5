// blog button to faq page
function myFunction() {
  location.href = "/faq.html";
}

// btn active
// function activeButton(button) {
//   const donationContainer = document.getElementById('donation-div');
//   const donationButton = document.getElementById('donation-btn');
//   const historyContainer = document.getElementById('history-div');
//   const historyButton = document.getElementById('history-btn');

//   if (button === 'donation-btn') {
//     donationContainer.classList.add('bg-[#B4F461]');
//     historyContainer.classList.remove('bg-[#B4F461]');
//     donationButton.classList.add('text-white');
//     historyButton.classList.remove('text-white');

//   } else if (button === 'history-btn') {
//     historyContainer.classList.add('bg-[#B4F461]');
//     donationContainer.classList.remove('bg-[#B4F461]');

//     historyButton.classList.add('text-white');
//     donationButton.classList.remove('text-white');
//   }
// }

// document.getElementById('donation-btn').addEventListener('click', function () {
//   activeButton('donation-btn');
// });

// document.getElementById('history-btn').addEventListener('click', function () {
//   activeButton('history-btn');
// });

const historyTab = document.getElementById('history-btn')
const donationTab = document.getElementById('donation-btn')
// *************   Click History button
historyTab.addEventListener('click', function () {
  console.log('hasan')
  historyTab.classList.add("text-xl", "font-semibold", "bg-[#B4F461]", "rounded-lg", "px-6", "py-3")

  donationTab.classList.remove("text-xl", "font-semibold", "bg-[#B4F461]", "rounded-lg", "px-6", "py-3")

  document.getElementById('all-card').classList.add("hidden");
  document.getElementById('transaction-section').classList.remove('hidden')
})
// *************   Click Donation button
donationTab.addEventListener('click', function () {
  console.log('hsds');
  donationTab.classList.add("text-xl", "font-semibold", "bg-[#B4F461]", "rounded-lg", "px-6", "py-3")

  historyTab.classList.remove("text-xl", "font-semibold", "bg-[#B4F461]", "rounded-lg", "px-6", "py-3")

  document.getElementById('all-card').classList.remove("hidden");
  document.getElementById('transaction-section').classList.add('hidden')
})

// calculate math

document.getElementById('btn-add-money').addEventListener('click', function () {
  const addMoneyInput = document.getElementById('input-add-money').value;
  const sumDonation = document.getElementById('total-donation').innerText
  const addMoneyNumber = parseInt(addMoneyInput)
  const sumNumber = parseInt(sumDonation)

  const myBalance = document.getElementById('avilableBalance').innerText
  const myBalanceNumber = parseInt(myBalance)

  if (isNaN(addMoneyNumber)) {
    alert('Invalid Donation Amount')
    return
  }

  if (addMoneyNumber > myBalanceNumber) {
    alert('Insufficient Balance')
    return
  }

  const newDonationBalance = sumNumber + addMoneyNumber;
  const myNewBalance = myBalanceNumber - addMoneyNumber
  document.getElementById('total-donation').innerText = newDonationBalance
  document.getElementById('avilableBalance').innerText = myNewBalance

  // popup
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

  const historyItem = document.createElement('div')
  historyItem.className = 'w-10/12 mx-auto border-2 p-3 my-5';

  historyItem.innerHTML = `
    <p class="text-2xl font-medium">${addMoneyNumber} Taka Donate for Flood at Noakhali, Bangladesh</p>
    <p class="text-xs font-normal mt-2">Date: ${new Date()}</p>
  `
  document.getElementById('transaction-container').appendChild(historyItem)
})

// card 2

document.getElementById('btn-add-money-feni').addEventListener('click', function () {
  const addMoneyInput = document.getElementById('input-add-money-feni').value;
  const sumDonation = document.getElementById('total-donation-feni').innerText
  const addMoneyNumber = parseInt(addMoneyInput)
  const sumNumber = parseInt(sumDonation)

  const myBalance = document.getElementById('avilableBalance').innerText
  const myBalanceNumber = parseInt(myBalance)

  if (isNaN(addMoneyNumber)) {
    alert('Invalid Donation Amount')
    return
  }

  if (addMoneyNumber > myBalanceNumber) {
    alert('Insufficient Balance')
    return
  }

  const newDonationBalance = sumNumber + addMoneyNumber;
  const myNewBalance = myBalanceNumber - addMoneyNumber
  document.getElementById('total-donation-feni').innerText = newDonationBalance
  document.getElementById('avilableBalance').innerText = myNewBalance

  // popup
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

  const historyItem = document.createElement('div')
  historyItem.className = 'w-10/12 mx-auto border-2 p-3 my-5';

  historyItem.innerHTML = `
    <p class="text-2xl font-medium">${addMoneyNumber} Taka Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-xs font-normal mt-2">Date: ${new Date()}</p>
  `
  document.getElementById('transaction-container').appendChild(historyItem)
})


