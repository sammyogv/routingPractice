async function testNumbersAPI() {
  try {
    console.log('Testing Numbers API...');
    console.log('Sending request to http://numbersapi.com/42');
    
    const response = await fetch('https://numbersapi.com/42');
    
    console.log('Status Code:', response.status);
    console.log('Status Text:', response.statusText);
    
    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return false;
    }
    
    const data = await response.text();
    console.log('Response Data:', data);
    console.log('✓ API is working!');
    return true;
    
  } catch (error) {
    console.error('✗ API appears to be down or unreachable');
    console.error('Error details:', error.message);
    return false;
  }
}

// Run the test
testNumbersAPI();