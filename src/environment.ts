const dev = {

    ssContext: 'http://localhost:5500'

  }
  
  const prod = {
    ssContext: 'http://ec2-18-222-206-16.us-east-2.compute.amazonaws.com:5500'
  }
  
  export let environment = prod;
  
  if (process.env.NODE_ENV === 'production') {
    environment = prod;
  }