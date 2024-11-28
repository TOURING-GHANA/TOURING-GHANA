-- Create GIST Indexes for spatial data on geom fields to speed up geospatial queries
CREATE INDEX IF NOT EXISTS idx_tourist_attractions_geom_gist ON tourist_attractions USING GIST (geom);
CREATE INDEX IF NOT EXISTS idx_accommodations_geom_gist ON accommodations USING GIST (geom);

-- Cluster the tourist_attractions and accommodations tables based on the spatial index for faster reads
CLUSTER tourist_attractions USING idx_tourist_attractions_geom_gist;
CLUSTER accommodations USING idx_accommodations_geom_gist;

-- Optionally, create a BRIN index for large tables to optimize range queries
CREATE INDEX IF NOT EXISTS idx_tourist_attractions_brin ON tourist_attractions USING BRIN (created_at);
CREATE INDEX IF NOT EXISTS idx_accommodations_brin ON accommodations USING BRIN (created_at);
