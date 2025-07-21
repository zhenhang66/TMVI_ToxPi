# 🧪 Contamination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool

## 📍 Project Background

To examine how the Beaumont–Port Arthur (BPA) region of Texas experiences air pollution and flooding, we developed the **CD-TMVI** (Contamination Detection: Toxics Mobility Vulnerability Index) dashboard using the **ToxPI** (Toxicological Prioritization Index) framework. This tool visualizes census-tract-level vulnerability by integrating 27 geospatial variables across four key domains:

- Built Environment Vulnerability  
- Social Vulnerability  
- Health Outcomes  
- Contamination Sources  

The CD-TMVI builds upon foundational research including TMI (Teron et al., 2019) and TMVI (Malecha et al., 2020), expanding their methodologies to a spatially detailed and customizable format.

---

### 📊 Overview of Datasets for Environmental Justice–Toxics Mobility Vulnerability Index (EJ-TMVI)

| **Category** | **Description** | **Unit** | **Year** | **Source** | **Accessible Link** |
|-------------|------------------|----------|----------|------------|---------------------|
| **Study Unit** | TIGER/Line shapefiles of census tracts in Jefferson County, TX | Census Tract | 2023 | U.S. Census Bureau | [Link](https://catalog.data.gov/dataset/tiger-line-shapefile-2023-county-jefferson-county-tx-topological-faces-polygons-with-all-geocod) |
| **Built Environment Vulnerability** | Industrial Zoning — % industrial zoning per study unit | Zoning | 2020 | City of Beaumont and Port Arthur | [Link](https://tamu.maps.arcgis.com/home/item.html?id=abf281897c184b3aae9868aae8923e0e) |
|  | Impervious Surface — % impervious surface per study unit | Raster (30m × 30m) | 2023 | USGS NLCD 2023 | [Link](https://www.mrlc.gov/data?f%5B0%5D=category%3AImpervious%20Descriptor) |
|  | 100-Year Floodplain — % area in floodplain per tract | Raster (30m × 30m) | N/A | FEMA | [Link](https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/FEMA_Jefferson_Preliminary_Flood_Zones/FeatureServer) |
| **Social Vulnerability** | CDC’s SVI — themes include SES, household characteristics, minority status, housing/transportation | Census Tract | 2022 | CDC / ATSDR | [Link](https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html) |
| **Health Outcomes** | CDC’s PLACES — includes 12 indicators such as asthma, diabetes, obesity, depression, etc. | Census Tract | 2024 | CDC | [Link](https://data.cdc.gov/500-Cities-Places/PLACES-Census-Tract-Data-GIS-Friendly-Format-2024-/yjkw-uj5s/data_preview) |
| **Contamination Sources** | Air Pollution — ozone, PM2.5, diesel particulate, cancer risks | Census Tract | 2024 | ATSDR Place and Health | [Link](https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html) |
|  | Proximity to Hazardous Sites — distances to NPL, TRI, RMP, TSDF facilities | Point-Based | 2024 | EPA / ATSDR | [Link](https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html) |

---

### ArcGIS Dashboard
Link: https://www.arcgis.com/apps/dashboards/4ce52c18b89c4b6f965678a44fa05cb6

---
## Online Tool: ToxPi-Style Radial Chart Generator
Link: https://zhenhang66.github.io/TMVI_ToxPi/
### Initiavtives
To set up a baseline scenario for the BPA region, we used equal-weight approach for four categories of vairables, and equal weight of each individual variable within that category as well in the ArcGIS Dashboard display. However, people might have different perceptions on each variable weight. which inspired us to develop CD-TMVI online tool, "ToxPi-Style Radial Chart Generator". Additionally, the ToxPI GUI is a desktop Java program developed by researchers and scientists from Texas A&M University and North Carolina State University, requiring tutorials before using, see repositories at https://github.com/orgs/ToxPi/repositories ToxPi-Style Radial Chart Generator simplifies the process but keep its core logic and functions for quicker use. The baseline scenario of the BPA region result from the online tool were as same as the output from the ToxPI GUI. Lastly, the online tool can be used for other study topics and study sites as long as users have prepared their original datasets in a .csv file format.
