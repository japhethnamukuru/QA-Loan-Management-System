-- ***** LOAN MANAGEMENT *****

-- -- list all loans --
SELECT * FROM loans; ORDER BY id DESC;

-- -- view one loan using loan id --

SELECT * FROM loans WHERE id =1;

-- -- add loan --
INSERT INTO loans(client_id, balance, gross_loan, amort, terms, date_released, maturity_date, type, status) 
VALUES (1, 5000, 5000, 2500, 1, '2025-01-17 05:30:01', '2025-01-17', 'Personal Loan', 'Pending');

-- --update specific loan ---

UPDATE loans
SET
  balance = 10000,
  gross_loan = 1000,
  amort = 2500,
  terms = 4,
  date_released = '2025-01-17 05:30:01',
  maturity_date = '2025-01-17',
  type = 'Personal Loan',
  status = 'Approved'
WHERE client_id = 1;

-- -- delete loan ---
DELETE FROM loans
WHERE id = 20;


-- ***** CLIENT MANAGEMENT *****

-- list all clients --

SELECT * FROM clients ORDER BY id DESC;

-- list one client --
SELECT * FROM clients WHERE id = 1;

-- create a client --
INSERT INTO clients(firstname, lastname, contactnumber, email, address, username)
VALUES ('Test', 'Doe', 712345678, 'test@gmail.com', 'Nairobi', 'test_doe');

-- update client --
UPDATE clients
SET  
  contactnumber = 987654321  
WHERE username = 'test_doe';

-- delete client --
DELETE FROM clients
WHERE username = 'test_doe';


-- **** PAYMENT MANAGEMENT ****

-- view all payments--
SELECT * FROM payments ORDER BY id DESC;

-- list one payment --
SELECT * FROM payments WHERE id = 1;

-- create payment --
INSERT INTO payments(client_id, loan_id, amount, new_balance, collection_date, collected_by, method) 
VALUES (1, 2, 5000, 0, '2025-01-16', 'John', 'ATM');

-- update payment--
UPDATE payments
SET
  amount = 6000,
  new_balance = 1000,
  collection_date = '2023-03-05',
  collected_by = 'Jane',
  method = 'Online Banking'
WHERE client_id = 1
  AND loan_id = 2
  

-- delete payment--
DELETE FROM payments
WHERE client_id = 1
  AND loan_id = 2


