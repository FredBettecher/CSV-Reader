# CSV Reader - Back-end

## Setups

1. **Installation**: To install the required packages, run the following command:
   ```
   npm install
   ```

2. **Development Server**: To start the development server, use the command:
   ```
   npm run dev
   ```
   **Note**: The Prisma migration and deployment are automatically executed when running the development server.

3. **Running Tests**: Execute integration tests using Jest with the following command:
   ```
   npm run tests
   ```

4. **Test Coverage**: To analyze the test coverage using Jest, run the command:
   ```
   npm run coverage
   ```

## Uploading a File

To upload a .csv file, make a POST request to the route '/api/files'. Use the "Files" field in the request body with the name "file". The server will handle the file upload.

![alt text](https://i.imgur.com/zYmPm9J.png)

## Searching for a Term

To search for a term, make a GET request to the route '/api/users/'. Include a query parameter named "term" with the desired search term. The server will process the request and return the appropriate results.

![alt text](https://i.imgur.com/DTfiQPz.png)
