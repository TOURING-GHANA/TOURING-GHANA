-- Insert Users
INSERT INTO Users (username, email, password_hash)
VALUES
    ('john_doe', 'john.doe@example.com', 'hashed_password_123'),
    ('jane_smith', 'jane.smith@example.com', 'hashed_password_456');

-- Insert Tourist Attractions
INSERT INTO tourist_attractions (name, description, geom, address, rating, image_url)
VALUES
    ('Cape Coast Castle', 'Historical slave trade castle', ST_SetSRID(ST_MakePoint(-1.2437, 5.1054), 4326), 
     'Cape Coast, Ghana', 4.8, 'https://example.com/cape-coast.jpg'),
    ('Mole National Park', 'Wildlife and nature reserve', ST_SetSRID(ST_MakePoint(-1.8495, 9.7036), 4326), 
     'Damongo, Ghana', 4.5, 'https://example.com/mole-park.jpg');

-- Insert Accommodations
INSERT INTO accommodations (name, description, geom, address, price_per_night, contact_info, availability)
VALUES
    ('Beach Resort', 'A luxury resort by the ocean', ST_SetSRID(ST_MakePoint(-0.0324, 5.5500), 4326), 
     'Labadi, Accra, Ghana', 150.00, '{"phone": "+233123456789", "email": "contact@beachresort.com"}', TRUE),
    ('Safari Lodge', 'Experience wildlife in comfort', ST_SetSRID(ST_MakePoint(-1.8530, 9.7000), 4326), 
     'Damongo, Ghana', 120.00, '{"phone": "+233987654321", "email": "info@safarilodge.com"}', TRUE);

-- Insert Reviews
INSERT INTO reviews (user_id, attraction_id, rating, comment)
VALUES
    (1, 1, 5, 'Amazing historical experience!'),
    (2, 2, 4, 'Great for a wildlife adventure.');


-- Find attractions within 10 km of Accra (5.5500, -0.0324)
SELECT name, description, address
FROM tourist_attractions
WHERE ST_DWithin(
    geom::geography,
    ST_SetSRID(ST_MakePoint(-0.0324, 5.5500), 4326)::geography,
    10000 -- Distance in meters
);


-- List accommodations ordered by proximity to a given location
SELECT name, address, price_per_night,
       ST_Distance(geom::geography, ST_SetSRID(ST_MakePoint(-1.8495, 9.7036), 4326)::geography) AS distance
FROM accommodations
ORDER BY distance ASC;


-- Insert sample tourist attractions
INSERT INTO tourist_attractions (name, description, geom, address)
VALUES 
('Kwame Nkrumah Memorial Park', 'A historical park and memorial dedicated to Kwame Nkrumah, Ghana’s first president.', ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326), 'Accra, Ghana'),
('Cape Coast Castle', 'A historic castle located in Cape Coast, used during the transatlantic slave trade.', ST_SetSRID(ST_Point(-1.245360, 5.105367), 4326), 'Cape Coast, Ghana');

-- Insert sample accommodations
INSERT INTO accommodations (name, description, geom, address, price_per_night, contact_info)
VALUES
('Labadi Beach Hotel', 'Luxury hotel near the beach in Accra.', ST_SetSRID(ST_Point(-0.116515, 5.613069), 4326), 'Accra, Ghana', 250.00, '{"phone": "123456789", "email": "contact@labadi.com"}'),
('Kempinski Hotel Gold Coast City', 'Five-star hotel in the heart of Accra.', ST_SetSRID(ST_Point(-0.201346, 5.564736), 4326), 'Accra, Ghana', 300.00, '{"phone": "987654321", "email": "info@kempinski.com"}');
