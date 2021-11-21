access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JIREMiLCJzdWIiOiI2QzM4VloiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjM3NDYwMTQ3LCJpYXQiOjE2Mzc0MzEzNDd9._mn7-MYAuKOYDw1haOqsmZsC73gg6ZOt8d2FOVw8YwM"

fetch('https://api.fitbit.com/1/user/-/activities/steps/date/today/1y.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json)); 