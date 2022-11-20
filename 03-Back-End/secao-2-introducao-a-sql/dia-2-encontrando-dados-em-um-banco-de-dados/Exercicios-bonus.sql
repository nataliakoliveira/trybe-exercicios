SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';
SELECT Piece, Price FROM Provides
ORDER BY Price DESC
LIMIT 5;
SELECT DISTINCT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 2;
SELECT * from Provides
WHERE Provider = 'HAL'
ORDER BY Piece DESC;
SELECT COUNT(Provider) AS 'Por quantas empresas a peça 1 é provida' FROM Provides
WHERE Piece = 1;