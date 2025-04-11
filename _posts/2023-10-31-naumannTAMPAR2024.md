---
layout: post
id: naumannTAMPAR2024
authors: Alexander Naumann, Felix Hertlein, Laura Dörr, Kai Furmans
year: 2024
title: 'TAMPAR: Visual Tampering Detection for Parcel Logistics in Postal Supply Chains'
venue: Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision
tags: c01,c09,t01,t02,t63,d01,d51,m01,m02,a02,a08
urls:
  paper:
  project: https://a-nau.github.io/tampar
  arxiv: http://arxiv.org/abs/2311.03124
  code: https://github.com/a-nau/tampar
  dataset: https://zenodo.org/records/10057090
  venue: https://wacv2024.thecvf.com/
dataset:
  name: TAMPAR
  comment:
  description: |
    A novel real-world dataset of parcels
     - with >900 annotated real-world images with >2,700 visible parcel side surfaces,
     - 6 different tampering types, and
     - 6 different distortion strengths
bibtex: |
  @inproceedings{naumannTAMPAR2024,
      author    = {Naumann, Alexander and Hertlein, Felix and D\"orr, Laura and Furmans, Kai},
      title     = {TAMPAR: Visual Tampering Detection for Parcel Logistics in Postal Supply Chains},
      booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},
      month     = {January},
      year      = {2024},
      pages     = {TBD},
      note      = {to appear in}
  }
summary: Visual tampering detection (i.e. appearance change detection) for parcels
abstract: Due to the steadily rising amount of valuable goods in supply chains, tampering detection for parcels is becoming increasingly important. In this work, we focus on the use-case last-mile delivery, where only a single RGB image is taken and compared against a reference from an existing database to detect potential appearance changes that indicate tampering. We propose a tampering detection pipeline that utilizes keypoint detection to identify the eight corner points of a parcel. This permits applying a perspective transformation to create normalized fronto-parallel views for each visible parcel side surface. These viewpoint-invariant parcel side surface representations facilitate the identification of signs of tampering on parcels within the supply chain, since they reduce the problem to parcel side surface matching with pair-wise appearance change detection. Experiments with multiple classical and deep learning-based change detection approaches are performed on our newly collected TAMpering detection dataset for PARcels, called TAMPAR. We evaluate keypoint and change detection separately, as well as in a unified system for tampering detection. Our evaluation shows promising results for keypoint (Keypoint AP 75.76) and tampering detection (81% accuracy, F1-Score 0.83) on real images. Furthermore, a sensitivity analysis for tampering types, lens distortion and viewing angles is presented. Code and dataset are available at https://a-nau.github.io/tampar
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
