##Multi-Table-Queries

https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top
-Class Problem Make A Query That Returns A Table With
-- order id, product name, quantiy, price, total (quantiy * price)
```sql
SELECT Orders.OrderID
	, Products.ProductName
    , OrderDetails.Quantity
    , Products.Price
	, Products.Price*OrderDetails.Quantity AS Total
FROM orders
INNER JOIN OrderDetails ON OrderDetails.OrderID = Orders.OrderID
INNER JOIN Products ON OrderDetails.ProductID = Products.ProductID
```

##SQL Aliases
```sql
SELECT o.OrderID
	, p.ProductName
    , od.Quantity
    , p.Price
	, p.Price*od.Quantity AS Total
FROM orders as o
INNER JOIN OrderDetails as od ON od.OrderID = o.OrderID
INNER JOIN Products as p ON od.ProductID = p.ProductID
```