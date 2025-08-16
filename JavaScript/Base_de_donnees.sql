-- 1. Créer la base de données
CREATE DATABASE IF NOT EXISTS mini_bibliotheque;
USE mini_bibliotheque;

-- 2. Table : utilisateurs
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- 3. Table : bibliothèques
CREATE TABLE libraries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(150),
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 4. Table : livres
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100),
    genre VARCHAR(50),
    available BOOLEAN DEFAULT TRUE,
    library_id INT,
    FOREIGN KEY (library_id) REFERENCES libraries(id) ON DELETE SET NULL
);

-- 5. Table : prêts
CREATE TABLE loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT UNIQUE,
    borrower_id INT,
    start_date DATE NOT NULL,
    end_date DATE,
    returned BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (borrower_id) REFERENCES users(id) ON DELETE CASCADE
);