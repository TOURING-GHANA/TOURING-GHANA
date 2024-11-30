
---

### **Key Sections Explained**

1. **Project Overview**: Explains the purpose of the repository and its role in the Touring Ghana application.
2. **Repository Structure**: Provides a clear breakdown of files and directories.
3. **Getting Started**: Guides users on prerequisites and setup steps.
4. **Usage**: Details how to use the scripts for schema setup, migrations, and queries.
5. **Contributing**: Encourages collaboration with clear instructions for creating pull requests.
6. **Contact**: Includes ways to reach out for support or report issues.

Set up PostgreSQL schema and configurations for Touring Ghana project

- Added core database schema:
  - Created tables for Users, TouristAttractions, and Accommodations.
  - Enabled PostGIS extension for geospatial capabilities.
- Configured spatial indexing for efficient geospatial queries.
- Added scripts for automated data import:
  - import_sample_data.sh for bulk loading sample data.
  - sample_data.sql for inserting initial records into tables.
- Optimized indexing with GIST and BRIN for performance.
- Included clustering for spatial data optimization.
- Documented setup and execution steps for clarity.