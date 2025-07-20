# 🧪 Contamination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool

## 📍 Project Background

To examine how the Beaumont–Port Arthur (BPA) region of Texas experiences air pollution and flooding, we developed the **CD-TMVI** (Contamination Detection: Toxics Mobility Vulnerability Index) dashboard using the **ToxPI** (Toxicological Prioritization Index) framework. This tool visualizes census-tract-level vulnerability by integrating 27 geospatial variables across four key domains:

- Built Environment Vulnerability  
- Social Vulnerability  
- Health Outcomes  
- Contamination Sources  

The CD-TMVI builds upon foundational research including TMI (Teron et al., 2019) and TMVI (Malecha et al., 2020), expanding their methodologies to a spatially detailed and customizable format.

---
📊 Overview of Datasets for Environmental Justice–Toxics Mobility Vulnerability Index (EJ-TMVI)
| Category | Description | Unit | Year | Source | Accessible Link | 
| Study Unit | TIGER/Line shapefiles of census tracts in Jefferson County, TX | Census Tract | 2023 | U.S. Census Bureau | Link | 
| Built Environment Vulnerability | Industrial Zoning — % industrial zoning per study unit | Zoning | 2020 | City of Beaumont and Port Arthur | Link | 
|  | Impervious Surface — % impervious surface per study unit | Raster (30m × 30m) | 2023 | USGS NLCD 2023 | Link | 
|  | 100-Year Floodplain — % area in floodplain per tract | Raster (30m × 30m) | N/A | FEMA | Link | 
| Social Vulnerability | CDC’s SVI — themes include SES, household characteristics, minority status, housing/transportation | Census Tract | 2022 | CDC / ATSDR | Link | 
| Health Outcomes | CDC’s PLACES — includes 12 indicators such as asthma, diabetes, obesity, depression, etc. | Census Tract | 2024 | CDC | Link | 
| Contamination Sources | Air Pollution — ozone, PM2.5, diesel particulate, cancer risks | Census Tract | 2024 | ATSDR Place and Health | Link | 
|  | Proximity to Hazardous Sites — distances to NPL, TRI, RMP, TSDF facilities | Point-Based | N/A | EPA / ATSDR | — | 
