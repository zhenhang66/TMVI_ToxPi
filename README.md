# 🧪 Contamination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool

## 🏙️ Project Background

To examine how the Beaumont–Port Arthur (BPA) region of Texas experiences air pollution and flooding, we developed the **CD-TMVI** (Contamination Detection: Toxics Mobility Vulnerability Index) dashboard using the **ToxPI** (Toxicological Prioritization Index) framework. This tool visualizes census-tract-level vulnerability by integrating 27 geospatial variables across four key domains:

- Built Environment Vulnerability  
- Social Vulnerability  
- Health Outcomes  
- Contamination Sources  

The CD-TMVI builds upon foundational research including TMI (Teron et al., 2019) and TMVI (Malecha et al., 2020), expanding their methodologies to a spatially detailed and customizable format.

---

### 🗺️ ArcGIS Dashboard
🚀Lauch Dashboard: https://www.arcgis.com/apps/dashboards/4ce52c18b89c4b6f965678a44fa05cb6

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

## Online Tool: ToxPi-Style Radial Chart Generator

🚀Lauch Tool: https://zhenhang66.github.io/TMVI_ToxPi/

### 💡 Initiavtives

To establish a baseline scenario for the Beaumont–Port Arthur (BPA) region, we applied an equal-weighting approach across four variable categories, along with equal weighting within each category. This methodology was reflected in the ArcGIS Dashboard.
However, individual perceptions of vulnerability factors may differ—prompting the development of the CD-TMVI online tool, a simplified and browser-based version of the original ToxPi GUI desktop software. This generator preserves ToxPi’s core logic while removing technical and training barriers for faster, more customizable use.

Notably:
- The results generated from the online tool match the BPA baseline scenario originally produced using the ToxPi GUI
- Users can explore and adjust weights dynamically to reflect context-specific priorities
- The tool supports any study region as long as input data is prepared in a .csv format
  
For comparison, the original ToxPi GUI (developed by Texas A&M and NC State) is available via GitHub at: https://github.com/orgs/ToxPi/repositories

---

### ⚙️ Case 1. Customize Variable Weights to Generate CD-TMVI for the BPA Region

#### 📁Step 0. Download the Input Dataset
Start by downloading the sample dataset used for the BPA region: [Downloads/ExampleInput_BPA.csv ](https://github.com/zhenhang66/TMVI_ToxPi/blob/968f560bde395d7be32e2ee617830e7c81a4218e/Downloads/ExampleInput_BPA.csv)

#### 📤Step 1. Upload your .csv file
Click the "Choose File" button and select "ExampleInput_BPA.csv" from your device.

<img width="452" height="145" alt="image" src="https://github.com/user-attachments/assets/8bda7396-714b-4c79-85ed-0d393242e13e" />

#### 📄Step 2. Adjust Variable Weights
Each variable accepts a weight from 0 to 100 (percentage). Make sure the sum of all weights equals 100 to proceed.

<img width="1884" height="307" alt="image" src="https://github.com/user-attachments/assets/3b20838b-a454-4631-993b-3026ba7a8cab" />


#### 📄Step 3. Generate Charts & View Results
Click “Generate All Charts” to calculate the CD-TMVI score for each census tract. The tool will display:
- A color legend matching each variable
- ToxPi scores for all tracts
- Radial diagrams representing the 27-variable index per tract

<img width="1897" height="887" alt="image" src="https://github.com/user-attachments/assets/446dda2d-84ee-455b-bbeb-8acc15656e78" />
*Screenshot of "Online Tool: ToxPi-Style Radial Chart Generator" webpage*

#### 📁Step 4. Export Scores
Click “Export Scores as CSV” to download a detailed score table:
- Overall CD-TMVI score per tract
- Individual contributions from each variable

The exported file is named "toxpi_scores_expanded.csv".

<img width="1908" height="793" alt="image" src="https://github.com/user-attachments/assets/eec489d7-141a-47c4-8457-b609d1d85efc" />
*Screenshot of "toxpi_scores_expanded.csv" on desktop*

Additionally, the .csv file includes the census tract GEOID, allowing users to perform a spatial join with the BPA region shapefile to visualize CD-TMVI prioritization scores across the map.

👉 For an applied spatial mapping example, see Case 2: Spatially Apply the ToxPI Score.csv Result.

#### 📁Step 5. Export Radial Charts as PNG
To create map-ready graphics:
- Select one or more tracts using the checkboxes
- Click “Export Selected Charts as PNG”
  
Charts are exported at 800×800 pixels, 300 dpi, with five diagrams per row and an included color legend.

<img width="4000" height="3908" alt="ToxPi_Export_2025-07-21" src="https://github.com/user-attachments/assets/408513a2-5549-4567-86ae-f5e7869f632e" />
*Example of downloaded radial diagrams*

---

### ⚙️ Case 2. Use 
