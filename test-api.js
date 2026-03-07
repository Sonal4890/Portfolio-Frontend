import axios from 'axios';

const API_URL = 'https://portfolio-backend-ut2o.onrender.com';

async function testAPI() {
  try {
    console.log('Testing health endpoint...\n');
    const healthResponse = await axios.get(`${API_URL}/health`, { timeout: 15000 });
    console.log('✅ Health Check:', healthResponse.data);
    console.log('Status:', healthResponse.status);
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    console.log('Testing send-email endpoint (this may take 10-20 seconds)...\n');
    const emailResponse = await axios.post(
      `${API_URL}/api/send-email`,
      {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message to check if the email API is working properly on deployed server.'
      },
      { timeout: 60000 }  // Increased to 60 seconds
    );
    console.log('✅ Email Response:', emailResponse.data);
    console.log('Status:', emailResponse.status);
    
  } catch (error) {
    console.error('❌ Error:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response Data:', JSON.stringify(error.response.data, null, 2));
    } else if (error.code === 'ECONNABORTED') {
      console.error('Timeout: The server took too long to respond. Check if GMAIL_EMAIL and GMAIL_PASSWORD are set in Render environment variables.');
    } else if (error.message) {
      console.error('Message:', error.message);
    } else {
      console.error(error);
    }
  }
}

testAPI();
