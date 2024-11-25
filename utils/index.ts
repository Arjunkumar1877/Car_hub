// const request = require('request');

// var model = 'camry'
// request.get({
//   url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
//   headers: {
//     'X-Api-Key': '8E8JDRPVbs1Wzx26USRz/A==2Gp6GB2lnYcS1ozU'
//   },
// }, function(error: any, response: { statusCode: number; }, body: { toString: (arg0: string) => any; }) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// })


export async function fetchCars(){
    console.log(process.env.CARHUB_API_KEY)
   const  headers = {
        'X-Api-Key': process.env.CARHUB_API_KEY || 'KEY'
      }

   const res =  await fetch('https://api.api-ninjas.com/v1/cars?model=corolla', {
    headers: headers
   });
  
   const data = await res.json();

   return data
}