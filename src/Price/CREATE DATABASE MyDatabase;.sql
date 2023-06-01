CREATE DATABASE MyDatabase;
USE MyDatabase 

CREATE TABLE Produc (
ProductCode INT PRIMARY KEY,
Name NVARCHAR(100),
PurchasePrice DECIMAL(10, 2),
SellPrice DECIMAL(10, 2),
Type NVARCHAR(50),
SupplierCode INT
);

CREATE TABLE Supplier (
SupplierCode INT PRIMARY KEY,
SupplierName NVARCHAR(100),
Address NVARCHAR(100)
);

CREATE TABLE Employee (
EmployeeID INT PRIMARY KEY,
FullName NVARCHAR(100),
Gender NVARCHAR(10),
BirthDate DATE,
Address NVARCHAR(100)
);

CREATE TABLE Invoice (
InvoiceID INT PRIMARY KEY,
SellDate DATE,
EmployeeID INT
);

CREATE TABLE InvoiceLine (
ProductCode INT,
InvoiceID INT,
Quantity INT,
PRIMARY KEY (ProductCode, InvoiceID)
);

ALTER TABLE Employee
ADD CONSTRAINT gender_constraint
CHECK (Gender = 'Nam' OR Gender = 'Nữ');


ALTER TABLE Product
ADD CONSTRAINT price_constraint
CHECK (ABS(SellPrice - PurchasePrice) <= 0.5 * PurchasePrice);

SELECT Name, SellPrice
FROM Product
WHERE Type = 'TV' AND SupplierCode = (SELECT SupplierCode FROM Supplier WHERE SupplierName = 'Samsung');

SELECT Supplier.SupplierName, Supplier.Address
FROM Supplier
INNER JOIN Product ON Supplier.SupplierCode = Product.SupplierCode
WHERE Product.Type = 'TV';

SELECT FullName
FROM Employee
WHERE YEAR(BirthDate) = 1983;

SELECT Product.Name, Product.Type
FROM Product
INNER JOIN InvoiceLine ON Product.ProductCode = InvoiceLine.ProductCode
INNER JOIN Invoice ON InvoiceLine.InvoiceID = Invoice.InvoiceID
WHERE Invoice.SellDate = '2018-05-23';

SELECT Employee.FullName
FROM Employee
INNER JOIN Invoice ON Employee.EmployeeID = Invoice.EmployeeID
INNER JOIN InvoiceLine ON Invoice.InvoiceID = InvoiceLine.InvoiceID
INNER JOIN Product ON InvoiceLine.ProductCode = Product.ProductCode
WHERE Product.Type = 'TV' AND Employee.Gender = 'Nữ';

SELECT Supplier.SupplierName, Supplier.Address
FROM Supplier
INNER JOIN Product ON Supplier.SupplierCode = Product.SupplierCode
WHERE Product.Type IN ('TV', 'Mobile')
GROUP BY Supplier.SupplierName, Supplier.Address
HAVING COUNT(DISTINCT Product.Type) = 2;

SELECT Product.Name, Product.SellPrice
FROM Product
INNER JOIN InvoiceLine ON Product.ProductCode = InvoiceLine.ProductCode
INNER JOIN Invoice ON InvoiceLine.InvoiceID = Invoice.InvoiceID
INNER JOIN Employee ON Invoice.EmployeeID = Employee.EmployeeID
WHERE Employee.FullName = 'Nguyễn Văn A' AND YEAR(Invoice.SellDate) = 2018 AND MONTH(Invoice.SellDate) = 4;


SELECT Product.Name, Product.SellPrice
FROM Product
INNER JOIN InvoiceLine ON Product.ProductCode = InvoiceLine.ProductCode
INNER JOIN Invoice ON InvoiceLine.InvoiceID = Invoice.InvoiceID
INNER JOIN Supplier ON Product.SupplierCode = Supplier.SupplierCode
WHERE Supplier.SupplierName = 'Samsung' AND Product.Type = 'Mobile' AND YEAR(Invoice.SellDate) = 2018 AND MONTH(Invoice.SellDate) = 4;


SELECT Name
FROM Product
WHERE SellPrice = (SELECT MAX(SellPrice) FROM Product);


SELECT (InvoiceLine.Quantity * Product.SellPrice) AS TotalAmount
FROM InvoiceLine
INNER JOIN Product ON InvoiceLine.ProductCode = Product.ProductCode
INNER JOIN Invoice ON InvoiceLine.InvoiceID = Invoice.InvoiceID
WHERE Invoice.SellDate = '2018-04-30';


ALTER TABLE Product
ADD CONSTRAINT CHK_SellPriceHigherThanPurchasePrice CHECK (SellPrice > PurchasePrice);


ALTER TABLE Product
ADD CONSTRAINT CHK_SamsungProductType CHECK ((Manufacturer = 'Samsung' AND Type IN ('Tivi', 'Điện thoại di động', 'Máy tính bảng')) OR Manufacturer <> 'Samsung');

ALTER TABLE Employee
ADD CONSTRAINT CHK_EmployeeBirthYear CHECK (YEAR(BirthDate) <> 1983);

ALTER TABLE InvoiceLine
ADD CONSTRAINT UNQ_ProductInInvoice UNIQUE (ProductCode, InvoiceID);


ALTER TABLE InvoiceLine
ADD CONSTRAINT CHK_ProductQuantityGreaterThanZero CHECK (Quantity > 0);

ALTER TABLE Invoice
ADD CONSTRAINT CHK_InvoiceHasProduct CHECK (EXISTS (SELECT 1 FROM InvoiceLine WHERE InvoiceLine.InvoiceID = Invoice.InvoiceID));

ALTER TABLE Product
ADD CONSTRAINT CHK_PurchasePriceLessThan500kSellPriceLessThan9M CHECK ((PurchasePrice < 500000 AND SellPrice <= 9000000) OR PurchasePrice >= 500000);

ALTER TABLE Product
ADD CONSTRAINT CHK_SellPriceNotGreaterThan2TimesPurchasePrice CHECK (SellPrice <= PurchasePrice * 2);

ALTER TABLE Employee
ADD CONSTRAINT CHK_EmployeeGender CHECK (Gender IN ('Nam', 'Nữ'));






