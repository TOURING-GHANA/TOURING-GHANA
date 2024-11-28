-- Enable PostGIS Extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- Table: Users
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: TouristAttractions
CREATE TABLE tourist_attractions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    geom GEOMETRY(POINT, 4326), -- Geospatial point for location
    address TEXT,
    rating DECIMAL(2, 1) DEFAULT 0.0 CHECK (rating BETWEEN 0 AND 5), -- Rating range: 0 to 5
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: Accommodations
CREATE TABLE accommodations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    geom GEOMETRY(POINT, 4326), -- Geospatial point for location
    address TEXT,
    price_per_night DECIMAL(10, 2),
    contact_info JSONB, -- Store contact details like phone and email
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: Reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    attraction_id INT REFERENCES tourist_attractions(id) ON DELETE CASCADE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Spatial Indexes for Efficient Geospatial Queries
CREATE INDEX idx_tourist_attractions_geom ON tourist_attractions USING GIST (geom);
CREATE INDEX idx_accommodations_geom ON accommodations USING GIST (geom);
