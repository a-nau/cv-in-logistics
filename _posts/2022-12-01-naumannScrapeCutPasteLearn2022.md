---
layout: post
id: naumannScrapeCutPasteLearn2022
authors: Alexander Naumann, Felix Hertlein, Benchun Zhou, Laura Dorr, Kai Furmans
year: 2022
title:
  "Scrape, Cut, Paste and Learn: Automated Dataset Generation Applied to Parcel
  Logistics"
venue:
  2022 21st IEEE International Conference on Machine Learning and Applications
  (ICMLA)
tags: c01,c98,t01,t02,d01,m02,d50,a02
urls:
  paper: https://doi.org/10.1109/ICMLA55696.2022.00171
  project: https://a-nau.github.io/parcel2d/
  arxiv: https://arxiv.org/abs/2210.09814
  code: https://github.com/a-nau/synthetic-dataset-generation
  dataset: ""
  venue: https://www.icmla-conference.org/icmla22/
dataset:
  name: Parcel2D Real
  comment:
    Full 3D annotations and keypoint positions have been added to the dataset.
    Will be publicly available very soon
  description: Dataset of parcel photos in different environments
bibtex: |
  @inproceedings{naumannScrapeCutPasteLearn2022,
      title        = {Scrape, Cut, Paste and Learn: Automated Dataset Generation Applied to Parcel Logistics},
      author       = {Naumann, Alexander and Hertlein, Felix and Zhou, Benchun and Dörr, Laura and Furmans, Kai},
      booktitle    = {{{IEEE Conference}} on {{Machine Learning}} and Applications ({{ICMLA}})},
      date         = 2022
  }
summary: automated instance segmentation dataset generation applied to parcel logistics
abstract:
  "State-of-the-art approaches in computer vision heavily rely on sufficiently
  large training datasets. For real-world applications, obtaining such a dataset is
  usually a tedious task. In this paper, we present a fully automated pipeline to
  generate a synthetic dataset for instance segmentation in four steps. In contrast
  to existing work, our pipeline covers every step from data acquisition to the final
  dataset. We first scrape images for the objects of interest from popular image search
  engines and since we rely only on text-based queries the resulting data comprises
  a wide variety of images. Hence, image selection is necessary as a second step.
  This approach of image scraping and selection relaxes the need for a real-world
  domain-specific dataset that must be either publicly available or created for this
  purpose. We employ an object-agnostic background removal model and compare three
  different methods for image selection: Object-agnostic pre-processing, manual image
  selection and CNN-based image selection. In the third step, we generate random arrangements
  of the object of interest and distractors on arbitrary backgrounds. Finally, the
  composition of the images is done by pasting the objects using four different blending
  methods. We present a case study for our dataset generation approach by considering
  parcel segmentation. For the evaluation we created a dataset of parcel photos that
  were annotated automatically. We find that (1) our dataset generation pipeline allows
  a successful transfer to real test images (Mask AP 86.2), (2) a very accurate image
  selection process - in contrast to human intuition - is not crucial and a broader
  category definition can help to bridge the domain gap, (3) the usage of blending
  methods is beneficial compared to simple copy-and-paste. We made our full code for
  scraping, image composition and training publicly available at https://anau.github.io/parcel2d."
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
