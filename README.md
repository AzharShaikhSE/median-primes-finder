# median-primes-finder

This is a full-stack app that allows you to find the median prime number(s) less than a specified integer.

## Author Details:
1. Do you have production experience with Node prior ts the submission of this code challenge? If yes, for how long? - `6 years`
2. Do you have production experience with React prior to the submission of this code challenge? If yes, for how long? - `2 years`
3. Full name: `Mohamed Azhar Shaikh`


## Installation

To install and run the app, please follow these steps:

1. Clone the repository to your local machine:
``` bash
git clone https://github.com/AzharShaikhSE/median-primes-finder.git
```

2. Navigate to the project directory:
``` bash
cd median-primes-finder
```

3. Install the required dependencies:
``` bash
npm install
```

4. Start the app:
``` bash
npm start
```

## Folder Structure

The project follows a backend-for-frontend (BFF) structure.

- `median-primes-finder`: Contains the server-side code and API endpoints, as well as the client-side code (in a separate `client` folder).
- `median-primes-finder/client`: Contains the client-side code and user interface components.

## Limitations

Currently, the app has a limitation where it allows a maximum upper limit of 50 million (50,000,000) for the specified integer (N). This limitation is due to memory issues. If you need to find the median prime number(s) for larger values of N, you may need to consider alternative approaches or optimizations.

## Future Enhancements

To further improve the app, you can consider implementing the following enhancements:

1. **Optimized Algorithm**: Explore and implement more efficient algorithms for finding prime numbers, such as the Sieve of Eratosthenes or the Miller-Rabin primality test.

2. **Distributed Computing**: Utilize distributed computing techniques, such as parallel processing or cloud-based solutions, to distribute the computation across multiple machines or nodes.

3. **Streaming Approach**: Implement a streaming approach where the prime numbers are generated and processed in a streaming fashion, rather than storing all the prime numbers in memory.

4. **Caching with Redis**: Integrate Redis or another caching mechanism to cache the results of the median prime number calculations, improving performance and reducing the need for repeated calculations.

5. **API Authentication**: Implement authentication mechanisms, such as JWT (JSON Web Tokens) or OAuth, to secure the API endpoints and ensure that only authorized users can access them.

6. **API Versioning**: Consider implementing API versioning to manage changes and updates to the API endpoints, ensuring backward compatibility and providing a clear versioning strategy.

> **Note:** These enhancements were not implemented in the app's current version due to time constraints, as this was a coding exercise. However, they can be valuable additions to improve the functionality, performance, and security of the app in the future.

## Running Test Cases

To run the test cases for the app, use the following command:
``` bash
npm test
```

## Live Demo

You can find a live demo of the app at .
