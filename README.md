# Guitar Shop Inventory

# Design and Purpose

This app is designed for retailers with an inventory of products that they wish to maintain and display. The app has two main features: add product and display all products. This example includes guitars, but a category id is also added to have different categories of items.

# Front End

A bottom tab navigation was used to separate the add product and get all products pages.

<img width="568" alt="Screenshot 2024-06-06 at 9 43 21 AM" src="https://github.com/msimio/INFO670/assets/137801161/1b57a99b-bdbf-495a-bf46-ba1fce999999">

<img width="569" alt="Screenshot 2024-06-06 at 9 43 36 AM" src="https://github.com/msimio/INFO670/assets/137801161/394e7a2e-3c4c-43a6-94bd-ede49ba5321e">

React native paper components were used for styling

# Back End

This app uses MariaDB and php to fetch a JSON of the database in React Native.

Results are fetched from 'https://www.cs.drexel.edu/~mjs679/getAllProducts.php'

The result is a JSON object:
{
0: {id: "1", name: "Fender Stratocaster", cat_id: "1", price: "500"}
1: {id: "2", name: "Gibson SG", cat_id: "1", price: "700"}
2: {id: "3", name: "Fender Starcaster", cat_id: "1", price: "700"}
3: {id: "4", name: "Fender Telecaster", cat_id: "1", price: "800"}
4: {id: "5", name: "Les Paul", cat_id: "1", price: "1000"}
}

With the parameters id, name, cat_id, and price

The results are stored in a MariaDB database

<img width="396" alt="Screenshot 2024-06-06 at 9 38 07 AM" src="https://github.com/msimio/INFO670/assets/137801161/0161370b-9085-423f-bf30-58af51f0a71d">

