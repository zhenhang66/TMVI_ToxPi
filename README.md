# 🧪 Contamination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool

## 📍 Project Background

To examine how the Beaumont–Port Arthur (BPA) region of Texas experiences air pollution and flooding, we developed the **CD-TMVI** (Contamination Detection: Toxics Mobility Vulnerability Index) dashboard using the **ToxPI** (Toxicological Prioritization Index) framework. This tool visualizes census-tract-level vulnerability by integrating 27 geospatial variables across four key domains:

- Built Environment Vulnerability  
- Social Vulnerability  
- Health Outcomes  
- Contamination Sources  

The CD-TMVI builds upon foundational research including TMI (Teron et al., 2019) and TMVI (Malecha et al., 2020), expanding their methodologies to a spatially detailed and customizable format.

---

# 📊 Overview of Datasets for Environmental Justice–Toxics Mobility Vulnerability Index (EJ-TMVI)

| **Category**                     | **Description**                                                                                       | **Unit**             | **Year** | **Source**                                                  | **Accessible Link** |
|----------------------------------|-------------------------------------------------------------------------------------------------------|----------------------|----------|-------------------------------------------------------------|---------------------|
| **Study Unit**                   | TIGER/Line shapefiles of census tracts in Jefferson County, TX                                       | Census Tract         | 2023     | U.S. Census Bureau                                          | [Link](https://catalog.data.gov/dataset/tiger-line-shapefile-2023-county-jefferson-county-tx-topological-faces-polygons-with-all-geocod) |

| **Built Environment Vulnerability** |                                                                                                     |                      |          |                                                             |                     |
| Industrial Zoning                | % industrial zoning per study unit                                                                   | Zoning               | 2020     | City of Beaumont and Port Arthur                            | [Link](https://tamu.maps.arcgis.com/home/item.html?id=abf281897c184b3aae9868aae8923e0e) |
| Impervious Surface              | % impervious surface per study unit                                                                  | Raster (30m × 30m)   | 2023     | USGS NLCD 2023 Impervious Products                          | [Link](https://www.mrlc.gov/data?f%5B0%5D=category%3AImpervious%20Descriptor) |
| 100-Year Floodplain             | % area in 100-year floodplain per study unit                                                         | Raster (30m × 30m)   | N/A      | FEMA                                                        | [Link](https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/FEMA_Jefferson_Preliminary_Flood_Zones/FeatureServer) |

| **Social Vulnerability**         |                                                                                                     |                      |          |                                                             |                     |
| CDC's SVI                       | Four themes: socioeconomic status, household characteristics, minority status, housing/transportation | Census Tract         | 2022     | CDC / ATSDR                                                  | [Link](https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html) |

| **Health Outcomes**              |                                                                                                     |                      |          |                                                             |                     |
| CDC's PLACES Data               | 12 health indicators: arthritis, asthma, diabetes, obesity, depression, stroke, etc.                 | Census Tract         | 2024     | CDC                                                         | [Link](https://data.cdc.gov/500-Cities-Places/PLACES-Census-Tract-Data-GIS-Friendly-Format-2024-/yjkw-uj5s/data_preview) |

| **Contamination Sources**        |                                                                                                     |                      |          |                                                             |                     |
| Air Pollution                   | Ozone, PM2.5, diesel particulates, and air toxic cancer risks                                       | Census Tract         | 2024     | ATSDR Place and Health                                      | [Link](https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html) |
| Proximity to Hazardous Sites    | Distances to NPL sites, TRI facilities, RMP sites, and TSDFs                                        | Point-Based          | N/A      | EPA / ATSDR                                                  | —                   |
