---
layout: post
id: huCuboidDetectionTracking2021
authors: Haohao Hu, Fabian Immel, Johannes Janosovits, Martin Lauer, Christoph Stiller
year: 2021
title: A Cuboid Detection and Tracking System Using A Multi RGBD Camera Setup for Intelligent Manipulation and Logistics
venue: 2021 IEEE 17th International Conference on Automation Science and Engineering (CASE)
tags: d02,m02,t04,t06,a03,c01,d51
urls:
  paper: https://doi.org/10/gpfnh2
  project: ''
  arxiv: ''
  code: ''
  dataset: ''
  venue: ''
dataset:
  name: ''
  comment: ''
  description: ''
bibtex: "@inproceedings{huCuboidDetectionTracking2021,\n author = {Hu, Haohao and Immel, Fabian and Janosovits, Johannes and Lauer, Martin and Stiller, Christoph},\n booktitle = {2021 {{IEEE}} 17th {{International Conference}} on {{Automation Science}} and {{Engineering}} ({{CASE}})},\n date = {2021-08},\n doi = {10/gpfnh2},\n eventtitle = {2021 {{IEEE}} 17th {{International Conference}} on {{Automation Science}} and {{Engineering}} ({{CASE}})},\n issn = {2161-8089},\n pages = {1097--1103},\n title = {A {{Cuboid Detection}} and {{Tracking System}} Using {{A Multi RGBD Camera Setup}} for {{Intelligent Manipulation}} and {{Logistics}}}\n}\n"
summary: tracking parcels inside a moving truck
abstract: Cuboid objects are widely used in logistics and manufacturing, since they are ideal for automatic manipulation. For that, a reliable detection, identification and tracking algorithm of cuboid objects is a key requirement. RGBD cameras are suited for these tasks, however they suffer from limitations such as occlusions from clutter or a small field of view. A multi RGBD camera setup would remedy many of these limitations. In this work, we present a cuboid detection, identification and tracking system using a multi RGBD camera setup. First, we calibrate our multi camera setup using a robot arm and a colored spherical calibration target. By using spatial and color information, a preprocessing pipeline segments then the unified point cloud into locally connected planar segments. Afterwards, custom spatial criteria allows for assigning the resulting segments to cuboid groups. We present a new modified bounding box regression method to estimate cuboid boxes and a novel intersection over union based approach to track cuboids across frames. By applying our approach, the automatic manipulation and transportation in manufacturing industry will become more efficient, which helps to save more time and cost. Our system is tested and analyzed with a recorded dataset, which contents variant constellations. The reliability and accuracy are demonstrated.
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
