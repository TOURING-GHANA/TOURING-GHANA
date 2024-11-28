-- Find accommodations within a 5km radius of a specific location
SELECT id, name, address, ST_Distance(geom, ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326)) AS distance
FROM accommodations
WHERE ST_DWithin(geom, ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326), 5000)
ORDER BY distance;

-- List tourist attractions within a 10km radius of a specific location
SELECT id, name, address, ST_Distance(geom, ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326)) AS distance
FROM tourist_attractions
WHERE ST_DWithin(geom, ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326), 10000)
ORDER BY distance;

-- Get the nearest tourist attraction to a given point
SELECT id, name, address
FROM tourist_attractions
ORDER BY geom <-> ST_SetSRID(ST_Point(-0.186964, 5.603717), 4326)
LIMIT 1;

-- Find all accommodations sorted by proximity to a tourist attraction
SELECT a.id, a.name, a.address, ST_Distance(a.geom, t.geom) AS distance
FROM accommodations a
JOIN tourist_attractions t ON ST_DWithin(a.geom, t.geom, 20000) -- 20km radius
ORDER BY distance;
