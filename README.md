# 🧪 Contamination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool

## 📍 Project Background

To examine how the Beaumont–Port Arthur (BPA) region of Texas experiences air pollution and flooding, we developed the **CD-TMVI** (Contamination Detection: Toxics Mobility Vulnerability Index) dashboard using the **ToxPI** (Toxicological Prioritization Index) framework. This tool visualizes census-tract-level vulnerability by integrating 27 geospatial variables across four key domains:

- Built Environment Vulnerability  
- Social Vulnerability  
- Health Outcomes  
- Contamination Sources  

The CD-TMVI builds upon foundational research including TMI (Teron et al., 2019) and TMVI (Malecha et al., 2020), expanding their methodologies to a spatially detailed and customizable format.

---
Oh no—thanks for showing me that, Zhenhang. What you're seeing is GitHub ignoring the table formatting because the pasted markdown got misinterpreted, likely due to the indentation or invisible line breaks.

Let me give you a bulletproof version that works cleanly inside a `README.md`, renders properly, and still follows your grouped style.

---

### 📊 Overview of Datasets for Environmental Justice–Toxics Mobility Vulnerability Index (EJ-TMVI)

| **Category**                    | **Description**                                                                                   | **Unit**             | **Year** | **Source**                                                | **Accessible Link** |
|--------------------------------|---------------------------------------------------------------------------------------------------|----------------------|----------|-----------------------------------------------------------|---------------------|
| **Study Unit**                 | TIGER/Line shapefiles of census tracts in Jefferson County, TX                                   | Census Tract         | 2023     | U.S. Census Bureau                                        | [Link](https://catalog.data.gov/dataset/tiger-line-shapefile-2023-county-jefferson-county-tx-topological-faces-polygons-with-all-geocod) |
| **Built Environment Vulnerability** | *Industrial Zoning*: % industrial zoning per study unit<br>*Impervious Surface*: % impervious surface per tract<br>*100-Year Floodplain*: % of tract in designated floodplain | Zoning<br>Raster (30m × 30m)<br>Raster (30m × 30m) | 2020<br>2023<br>N/A | City of Beaumont & Port Arthur<br>USGS NLCD<br>FEMA | [Link 1](https://tamu.maps.arcgis.com/home/item.html?id=abf281897c184b3aae9868aae8923e0e)<br>[Link 2](https://www.mrlc.gov/data?f%5B0%5D=category%3AImpervious%20Descriptor)<br>[Link 3](https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/FEMA_Jefferson_Preliminary_Flood_Zones/FeatureServer) |
| **Social Vulnerability**       | CDC’s Social Vulnerability Index with 4 themes: SES, household, minority status, housing/transport | Census Tract         | 2022     | CDC / ATSDR                                               | [Link](https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html) |
| **Health Outcomes**            | CDC’s PLACES data — 12 indicators including asthma, diabetes, obesity, stroke, depression          | Census Tract         | 2024     | CDC                                                       | [Link](https://data.cdc.gov/500-Cities-Places/PLACES-Census-Tract-Data-GIS-Friendly-Format-2024-/yjkw-uj5s/data_preview) |
| **Contamination Sources**      | *Air Pollution*: ozone, PM2.5, diesel particulates, cancer risk<br>*Proximity to Hazardous Sites*: distances to NPL, TRI, RMP, TSDF locations | Census Tract<br>Point-Based | 2024<br>N/A | ATSDR Place & Health<br>EPA / ATSDR                        | [Link 1](https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html)<br>— |

---

✅ This version uses line breaks within cells (`<br>`) to group sub-entries under each category while still obeying GitHub’s markdown rendering rules.

Drop it straight into your `README.md` without any code block wrapping—just plain markdown—and it’ll render correctly.

Want me to add icons for categories or pair it with a usage note at the bottom? Or help write a “How to Use This Data” section just below the table? You’re super close now 📘💪.
