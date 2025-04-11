---
layout: post
id: naumannRefinedPlaneSegmentation2020
authors: Alexander Naumann, Laura Dörr, Niels Ole Salscheider, Kai Furmans
year: 2020
title: Refined Plane Segmentation for Cuboid-Shaped Objects by Leveraging Edge Detection
venue: International Conference On Machine Learning And Applications
tags: a02,c01,t02,t61,t62,d01,m02,d51
urls:
  paper: https://ieeexplore.ieee.org/document/9356356
  project: ''
  arxiv: http://arxiv.org/abs/2003.12870
  code: https://github.com/a-nau/Plane-Segmentation-Refinement
  dataset: https://url.fzi.de/refined_planeseg
  venue: https://icmla-conference.org/icmla20/
dataset:
  name: ''
  comment: ~40 images
  description: ''
bibtex: |
  @inproceedings{naumannRefinedPlaneSegmentation2020,
      title        = {Refined Plane Segmentation for Cuboid-Shaped Objects by Leveraging Edge Detection},
      author       = {Naumann, Alexander and Dörr, Laura and Salscheider, Niels Ole and Furmans, Kai},
      booktitle    = {{{IEEE Conference}} on {{Machine Learning}} and Applications ({{ICMLA}})},
      location     = {{Miami, USA}},
      date         = {2020-12}
  }
summary: Parcel side surface segmentation by exploiting plane detection
abstract: Recent advances in the area of plane segmentation from single RGB images show strong accuracy improvements and now allow a reliable segmentation of indoor scenes into planes. Nonetheless, fine-grained details of these segmentation masks are still lacking accuracy, thus restricting the usability of such techniques on a larger scale in numerous applications, such as inpainting for Augmented Reality use cases. We propose a post-processing algorithm to align the segmented plane masks with edges detected in the image. This allows us to increase the accuracy of state-of-the-art approaches, while limiting ourselves to cuboid-shaped objects. Our approach is motivated by logistics, where this assumption is valid and refined planes can be used to perform robust object detection without the need for supervised learning. Results for two baselines and our approach are reported on our own dataset, which we made publicly available. The results show a consistent improvement over the state-of-the-art. The influence of the prior segmentation and the edge detection is investigated and finally, areas for future research are proposed.
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
