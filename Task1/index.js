// Example JavaScript for handling button clicks:
// const planButtons = document.querySelectorAll('.plan-button');

// planButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         alert('You chose the ' + button.parentNode.querySelector('.plan-name').textContent + ' plan!');
//     });
// });


const planButtons = document.querySelectorAll('.plan-button');

planButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedPlanName = button.parentNode.querySelector('.plan-name').textContent;

    // Basic alert:
    alert('You chose the ' + selectedPlanName + ' plan!');

    // Highlight the selected plan visually:
    highlightSelectedPlan(button.closest('.pricing-plan'));

    // Show a confirmation modal or redirect to a purchase page:
    proceedToPurchase(selectedPlanName);

    // Track the plan selection for analytics:
    trackPlanClick(selectedPlanName);
  });
});

// Function to highlight the selected plan visually:
function highlightSelectedPlan(selectedPlan) {
  const plans = document.querySelectorAll('.pricing-plan');
  plans.forEach(plan => plan.classList.remove('selected'));
  selectedPlan.classList.add('selected');
}

// Function to handle purchase confirmation or redirection:
function proceedToPurchase(selectedPlanName) {
  if (confirm('Are you sure you want to choose the ' + selectedPlanName + ' plan?')) {
    // Perform actions to initiate purchase or redirect to payment page
  }
}

// Function to track plan clicks for analytics:
function trackPlanClick(selectedPlanName) {
  // Implement tracking logic using an analytics service (e.g., Google Analytics)
}









































// const planButtons = document.querySelectorAll('.plan-button');

// // Add event listeners to each button
// planButtons.forEach(button => {
//   button.addEventListener('click', handlePlanClick);
// });

// // Function to handle plan button clicks
// function handlePlanClick(event) {
//   const clickedButton = event.target;
//   const selectedPlanId = clickedButton.closest('.pricing-plan').id;

//   // Perform actions based on the selected plan:
//   switch (selectedPlanId) {
//     case 'plan-1':
//       alert('You chose the ' + button.parentNode.querySelector('.plan-name').textContent + ' plan!');
//       break;
//     case 'plan-2':
//       // Handle Pro plan selection
//       alert('You chose the ' + button.parentNode.querySelector('.plan-name').textContent + ' plan!');
//       break;
//     case 'plan-3':
//       // Handle Company plan selection
//       alert('You chose the ' + button.parentNode.querySelector('.plan-name').textContent + ' plan!');
//       break;
//     default:
//       console.error('Invalid plan ID');
//   }
// }

// // Additional functionalities you might consider:

// // Highlight the selected plan:
// function highlightSelectedPlan(planId) {
//   const plans = document.querySelectorAll('.pricing-plan');
//   plans.forEach(plan => {
//     plan.classList.remove('selected');
//     if (plan.id === planId) {
//       plan.classList.add('selected');
//     }
//   });
// }

// // Show a modal or redirect to a purchase page:
// function proceedToPurchase(planId) {
//   // Implement modal display or redirect logic
// }

// // Track plan clicks for analytics:
// function trackPlanClick(planId) {
//   // Send tracking event to analytics service
// }
