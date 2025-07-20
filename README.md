# Containmination Detection: Toxics Mobility Vulnerability Index (CD-TMVI) Online Tool
## Project Background
To understand how the Beaumont-Port Arthur (BPA) region of Texas experienced air pollution and flooding, we used the ToxPI (Toxicological Prioritization Index) tool to identify the levels at a census-tract scale. To generate the Containmination Detection:Toxics Mobility Vulnerability Index (CD-TMVI) for the study area, we build upon the foundational studies on TMI by Teron et al. (2019) and TMVI by Malecha et al. (2020), including 27 geospatial variables from four categories: built envionrment vulnerability, social vulnerablity, health outcomes, and contamination sources. 

Table 2. Overview of Datasets for Environmental Justice-Toxics Mobility Vulnerability Index (EJ-TMVI)
	Description	Unit	Year	Source	Accessible Link
Study Unit
Census Tract	TIGER/Line shapefiles of census tracts in Jefferson County, TX	Census Tract	2023	U.S. Census Bureau	https://catalog.data.gov/dataset/tiger-line-shapefile-2023-county-jefferson-county-tx-topological-faces-polygons-with-all-geocod

Built Environment Vulnerability
Industrial Zoning	% industrial zoning per study unit	Zoning	2020	City of Beaumont and Port Arthur	https://tamu.maps.arcgis.com/home/item.html?id=abf281897c184b3aae9868aae8923e0e 

Impervious Surface	% impervious surface per study unit	Raster (30m x 30m)	2023	USGS National Land Cover Database (NLCD) 2023 Impervious Products	https://www.mrlc.gov/data?f%5B0%5D=category%3AImpervious%20Descriptor

100-year Floodplain	% area in 100-year floodplain per study unit	Raster (30m x 30m)	N/A	Federal Emergency Management Agency (FEMA)	https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/FEMA_Jefferson_Preliminary_Flood_Zones/FeatureServer

Social Vulnerability
CDC’s SVI	Include four themes: socioeconomic status, household characteristics, racial and ethnic minority status, and housing type or transportation.	Census Tract	2022	Centers for Disease Control and Prevention and Agency for Toxic Substances and Disease Registry Social Vulnerability Index (CDC/ATSDR SVI)	https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html

Health Outcomes
CDC’s PLACES Data	Include 12 types of diseases: arthritis, high blood pressure, cancer, asthma, coronary heart disease, chronic obstructive pulmonary disease, depression, diagnosed diabetes, high cholesterol, obesity, stroke, and teeth lost.	Census Tract	2024	Centers for Disease Control	https://data.cdc.gov/500-Cities-Places/PLACES-Census-Tract-Data-GIS-Friendly-Format-2024-/yjkw-uj5s/data_preview

Environmental Justice 
Air Pollution	Include ozone levels, particulate matter 2.5 (PM2.5), diesel particulate matter, and air toxic cancer risks	Census Tract	2024	ATSDR Place and Health	https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html 

Proximity to Hazardous and Toxic Site Points	Measure distances to national priority list sites, toxic release inventory sites, treatment and storage facilities, and risk management plan sites				
