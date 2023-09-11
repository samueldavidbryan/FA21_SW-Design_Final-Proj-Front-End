## Link

http://ittwo.s3-website-us-east-1.amazonaws.com

### Corporate

username: admin

password: password

(Additional corporate users can be created with the "/signup" extension.)

### Manager

username: \< Store ID \> (From when "create store" function was called)

password: password

Once a manager logs in with a store ID, they can only access functions for that particular store. If the user wants to access a different store, they have to re-login as a different store.

To create a manager profile, use the "Create Store" page on the Corporate page. This will make the appropriate credentials.

### Known issues with Cognito

If a store is created, deleted, then created again, the console log will indicate that the user already exists the second time it is created. This is because while the SQL database will be updated of the deletion, the user will not be deleted from Cognito. Fixing this was on our to-do list, but since it does not affect the functionality of what our project sets out to accomplish, we decided that it was not a priority.

## Group Final Iteration

### Generate Total Inventory Report - Corporate

Press the button to display total inventory report

### Fill Shelves - Manager

Press the button to fill the shelves for the store the user is currently logged into.

### Show Missing Items - Manager

Press the button to display missing items for the store the user is currently logged into.

### Buy Item - Customer

Enter the store "id", "sku", and "quantity" to buy an item. 

**Additional Feature:** Enter the "sku" into the box under the "Get information about an item" banner to display the "name", "description", and "price" of the item. (So the customer can view this information before purchase.)

## Group Iteration 2:

### Edit to Iteration 1
We were able to fix "process shipment" to make sure that it updates every part of the system. The new shipment can be copied and pasted. We would love to be considered for partial credit/re-grading if possible.  

### List Stores - Corporate
Lists all stores currently availaible. Click the List stores option under the corporate login

### Remove Store - Corporate
type the store id in the box
sample input: 3

### Generate Inventory Report - Corporate
type the store id in the box
sample input: 31

### Generate Overstock Report - Manager
click generate overstock report

### List Stores - Customer
input the customer's longitude and latitude 
sample input: 10.000000, -10.000000

### List Items on Aisle/Shelf in Store - Customer
input the store id, aisle, and shelf 
sample input: 11, 2, 2

### Find Item in Store - Customer
sample input: sku -> 11
sample input: name -> n 
sample input: descriptions -> d

## Group Iteration 1:
## Create Store
type inputs for store id and its longitude and latitude
sample input1: store1, 42.26259, -71.80229
sample input2: store2, 42.361145, -71.057083

note: store1 and store2 may no longer be in the database.

## Create Item
input the item's sku, name, description, price, and max quantity on shelf
sample input: DRJ297831, Soap, Liquid Soap, 1.99, 40
note: you can add Aisle and Shelf numbers here, it is optional.

## Assign Location
input the sku, shelf and aisle 
sample input: DRJ297831, 3, 4

## Process shipments payload for testing
Below is the format for the payload. The values should be updated to reflect a shipment.

```
{ "body" : "{\"shipments\": [{\"store_id\" : \"11\", \"sku\" : \"1233333\", \"quantity\" : \"10\" } , { \"store_id\" : \"11\", \"sku\" : \"22\", \"quantity\" : \"55\" }, { \"store_id\" : \"11\", \"sku\" : \"111\", \"quantity\" : \"3\" }]}" }
```
##  Generate Inventory Report
input the store id
sample input: store1


## RDS tables
We have three tables: items, inventory, and stores. 

```
CREATE TABLE `items` (
  `sku` varchar(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `descriptions` varchar(200) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `max_quantity_per_shelf` int NOT NULL,
  `shelf` varchar(45) DEFAULT NULL,
  `aisle` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sku`,`price`),
  KEY `ivtr_priceFK` (`price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```
CREATE TABLE `inventory` (
  `store_id` varchar(45) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `quantity` int DEFAULT NULL,
  `overstock` int DEFAULT NULL
  PRIMARY KEY (`store_id`,`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```
CREATE TABLE `stores` (
  `id` varchar(45) NOT NULL,
  `longitude` decimal(8,6) DEFAULT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `longitude_UNIQUE` (`longitude`),
  UNIQUE KEY `latitude_UNIQUE` (`latitude`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


