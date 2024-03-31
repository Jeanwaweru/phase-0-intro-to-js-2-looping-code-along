// Code your solutions in this file
function generateThankYouMessages(names) {
    // Create a new, empty array to hold the messages
    let thankYouMessages = [];

    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message for each name using string interpolation
        let message = `Thank you, ${names[i]}!`;

        // Add the message to the new array
        thankYouMessages.push(message);
    }

    // Return the new array
    return thankYouMessages;
}

// Example usage:
let names = ["Alice", "Bob", "Charlie"];
let messages = generateThankYouMessages(names);
console.log(messages); // Output: ["Thank you, Alice!", "Thank you, Bob!", "Thank you, Charlie!"]


//countdown function
function countDown(num) 
      {
    // Check if the input is a positive integer
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please provide a positive integer greater than 0.");
        return;
    }

    // Start counting down from the input number
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
// Example usage:
countDown(10);