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

### ⚙️ Case 2: Spatially Apply the ToxPI Score.csv Result

Via Case 1. Step 4, we downloaded user-customized ToxPI score results as .csv file from the online tool. Reflect on the CD-TMVI map by census tract on the Dashboard, we can spatially customize that map as well by following steps in Case 2.

<img width="1905" height="917" alt="image" src="https://github.com/user-attachments/assets/3719dfd7-4515-434d-9818-4c83943de0b3" />
*Screenshot of the CD-TMVI Map of the BPA Region from Dashboard*

To spatially display your CD-TMVI census tract map, make sure you have an ArcGIS Online account or have access to ArcGIS Pro or QGIS. If not, try to use GeoPandas in Python (Option 3). Current tutorial only works for Option 1 & 2.

    Here is an example code from Microsoft Copilot
    import geopandas as gpd
    import pandas as pd
    
    # Step 1: Load census tract shapefile (GeoDataFrame)
    tracts_gdf = gpd.read_file("path/to/tract_shapefile.shp")
    
    # Step 2: Load ToxPI scores CSV (DataFrame)
    scores_df = pd.read_csv("toxpi_scores_expanded.csv")
    
    # Step 3: Merge on the GEOID column
    # Make sure GEOID fields match in name and format (e.g., string type with leading zeros)
    tracts_gdf["GEOID"] = tracts_gdf["GEOID"].astype(str)
    scores_df["GEOID"] = scores_df["GEOID"].astype(str)
    
    # Spatial join via attribute match
    merged_gdf = tracts_gdf.merge(scores_df, on="GEOID")
    
    # Step 4: Export or visualize
    merged_gdf.to_file("tracts_with_scores.geojson", driver="GeoJSON")
    
#### File Prepration List

✅Downloaded the "toxpi_scores_expanded.csv" from Case 1. Step 4 to your device

For tutorial purpose, download this as an example (Downloads/toxpi_scores_expanded.csv): https://github.com/zhenhang66/TMVI_ToxPi/blob/2b9d4e20ef1c86055b6fac9198cd49e81c33b5af/Downloads/toxpi_scores_expanded.csv 

✅Open provided "BPA_MAP_ToxPiScore_CensusTract" in Map Viewer

Lauch Map Viewer: https://tamu.maps.arcgis.com/apps/mapviewer/index.html?webmap=275c82d7b53b46b5b015218f0d6be4c7 

* Note: Downloaded results can't be uploaded until you sign in into your ArcGIS Online account.

✅Sign into your ArcGIS Online Account (Option 1) or Start ArcGIS Pro (Option 2)

Lauch ArcGIS Online: https://www.arcgis.com/index.html We need to upload your downloaded "toxpi_scores_expanded.csv" to your ArcGIS Online account before spatially joining tables. 

---

#### Option 1. Display the BPA CD-TMVI from ArcGIS Online

##### Step 1. Sign into your ArcGIS Online Account

##### Step 2. Create a Folder for the Project

Click on Content Tab (top-left of the screen) > Folders (left on the screen) > Name it as "Beaumont Port Arthur"

<img width="282" height="164" alt="image" src="https://github.com/user-attachments/assets/766de1cd-a8d5-4d8f-bad3-95f0433ef0d2" />

*Screenshot of Creating Folder in ArcGIS Online Account*

##### Step 3. Upload "toxpi_scores_expanded.csv" to the Folder

Click "New Items" (below Content Ribbon) > Drag or Upload "toxpi_scores_expanded.csv"

<img width="328" height="185" alt="image" src="https://github.com/user-attachments/assets/9f57cc31-ed36-41a8-b2cf-e421265b8525" />

*Screenshot of Uploading .csv file*

<img width="1093" height="327" alt="image" src="https://github.com/user-attachments/assets/e06f62bc-6087-478f-abee-eb057ac338c8" />

*Screenshot of .csv Settings*

<img width="1140" height="472" alt="image" src="https://github.com/user-attachments/assets/ec610a95-ae2e-44f0-aa2a-228a5d52d268" />

*Choose your Created Folder*

##### Step 3. Add "toxpi_scores_expanded.csv" as a Table in the Map Viewer

Lauch Map Viewer: https://tamu.maps.arcgis.com/apps/mapviewer/index.html?webmap=275c82d7b53b46b5b015218f0d6be4c7 

Click the "Table Icon" on the left ribbon > Add Table > My Content, "toxpi_scores_expanded" > Click "Add" botton

<img width="440" height="237" alt="image" src="https://github.com/user-attachments/assets/c0cad21b-ae46-4733-aff6-7a75b183c206" />

*Add Table to the Map Viewer*

##### Step 4. Join Added "toxpi_scores_expanded.csv" to Existing "BPA_ToxPiScore_CnesusTract" Layer

1. Click "Analysis Tool" on the right ribbon > Select Tools (second icon from left) > Choose "Join Features"

<img width="293" height="481" alt="image" src="https://github.com/user-attachments/assets/0c945259-06f2-48a3-b658-8a879e40fcaa" />

*Analysis Tool on the Right Ribbon*

<img width="385" height="337" alt="image" src="https://github.com/user-attachments/assets/d02323e8-f2be-4535-af1d-0744773f5ffc" />

*Join Features*

2. Use Below Settings for Spatial Join
   
Input features:

- Target layer: BPA_ToxPiScore_CensusTract
- Join layer: toxpi_scores_expanded
  
<img width="390" height="394" alt="image" src="https://github.com/user-attachments/assets/47e93329-6a1c-464b-bc08-93faf4006a6d" />

Join settings:

- Target field: FIPS
- Join field: Name
- Join Operation: Join one to one, Only keep first matching record
- Join type: Left join
  
<img width="336" height="748" alt="image" src="https://github.com/user-attachments/assets/fe5776a3-0df0-4995-a5f9-611d9662c2d5" />

Result layer:

- Output name: CD_TMVI_Customized
- Save in folder: Beaumont Port Arthur
  
<img width="342" height="272" alt="image" src="https://github.com/user-attachments/assets/3e6f51ae-a0fe-4f9f-bc3a-bbe74117aaa6" />

*Note: Might take a while to run final result. Can click the "Clock" icon (the last one from left) to check progress

<img width="351" height="89" alt="image" src="https://github.com/user-attachments/assets/198d3463-90f7-463a-94d8-7544f40c839f" />

Step 5. Customize Layer Symbology
Click the "Layer" icon on the left ribbon > Find "CD_TMVI_Customized" layer > Click "Three dot" icon > Show Properties

<img width="464" height="193" alt="image" src="https://github.com/user-attachments/assets/27803cd7-1bdd-4a48-a051-8a3ce54a0da8" />

*layer Symobology Editting*

Properties > Edit layer style > Field: ToxPi_Score > Pick a style: Theme "High to low"

<img width="379" height="208" alt="image" src="https://github.com/user-attachments/assets/e7a70897-2932-42f3-93ad-fb2888bfa666" />

*Edit Symbology*

<img width="386" height="620" alt="image" src="https://github.com/user-attachments/assets/065250a5-6168-467d-be24-2da7fc4af3fb" />

*Pick up your ideal symobology to represent map*




