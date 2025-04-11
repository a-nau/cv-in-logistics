---
layout: post
id: brylkaAIbasedRecognitionDangerous2021
authors: Robert Brylka, Benjamin Bierwirth, Ulrich Schwanecke
year: 2021
title: AI-based Recognition of Dangerous Goods Labels and Metric Package Features
venue:
tags: a01,a04,a23,c01,c03,t01,t06,c09,d01,d02,d51,m02,d50
urls:
  paper: https://doi.org/10/gpc9mv
  project: ''
  arxiv: ''
  code: ''
  dataset: ''
  venue: ''
dataset:
  name: ''
  comment: about 1.000 manually labeled and 50.000 artificial generated images for label detection; alidation dataset is created by manually labeling 2,260 images with a total of 5,820 labels; Automatically annotate 150 pallets with parcels that are always brown boxes and have 10 different dimensions for pointcloud segmentation
  description: ''
bibtex: "@inproceedings{brylkaAIbasedRecognitionDangerous2021,\n author = {Brylka, Robert and Bierwirth, Benjamin and Schwanecke, Ulrich},\n date = {2021-12-01},\n doi = {10/gpc9mv},\n eventtitle = {Hamburg {{International Conference}} of {{Logistics}} ({{HICL}}) 2021},\n isbn = {978-3-7549-2770-0},\n issn = {2365-5070},\n langid = {english},\n pages = {245--272},\n publisher = {{epubli}},\n title = {{{AI-based}} Recognition of Dangerous Goods Labels and Metric Package Features},\n url = {https://tore.tuhh.de/handle/11420/11170},\n urldate = {2022-02-07}\n}\n"
summary: detection of dangerous goods labels and volume estimation by pointcloud segmentation
abstract: 'Purpose: Dangerous goods shipments require special labeling, which has to be checked manually every time a shipment is handed over in the supply chain. We describe an AI-based detection methodology to automate the recognition of dangerous goods labels and other shipment features (such as single piece volume detection).  Methodology: We use five industry RGB cameras and three AZURE RGBD cameras to generate images from shipments passing through a gate. The images are processed based on the YOLO detector to identify and separate dangerous goods labels and barcodes. We trained YOLO for our particular problem with about 1.000 manually labeled and 50.000 artificial generated images.  Findings: While dangerous goods labels detection was successfully validated in a laboratory environment and a warehouse, volume detection for single pieces consolidated on a pallet could be conceptualized. The system shows a high detection rate combined with fast processing, where the addition of computer-generated training images significantly improves the recognition rate for complex backgrounds.  Originality: Parallel detection of multiple package features (volume, barcode, dangerous goods labels) of multiple pieces consolidated on a pallet is not available yet. Our solution processes a shipment faster and more accurately than existing single-piece solutions without restrictions to the material flow.'
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
