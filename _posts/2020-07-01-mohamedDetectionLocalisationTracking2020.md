---
layout: post
id: mohamedDetectionLocalisationTracking2020
authors:
  Ihab S. Mohamed, Alessio Capitanelli, Fulvio Mastrogiovanni, Stefano Rovetta,
  Renato Zaccaria
year: 2020
title:
  Detection, Localisation and Tracking of Pallets Using Machine Learning Techniques
  and 2D Range Data
venue: Neural Computing and Applications
tags: a22,c03,d03,d51,m02
urls:
  paper: https://doi.org/10.1007/s00521-019-04352-0
  project: ""
  arxiv: ""
  code: ""
  dataset: https://github.com/EmaroLab/PDT/
  venue: ""
dataset:
  name: PDT Pallet Detection
  comment:
    Real-world data set containing 340 labeled top-view images, which is augmented
    by rotation and displacement to 1020 images. For details see https://www.sciencedirect.com/science/article/pii/S235234091930188X
  description: ""
bibtex:
  "@article{mohamedDetectionLocalisationTracking2020,\n author = {Mohamed, Ihab\
  \ S. and Capitanelli, Alessio and Mastrogiovanni, Fulvio and Rovetta, Stefano and\
  \ Zaccaria, Renato},\n date = {2020-07-01},\n doi = {10.1007/s00521-019-04352-0},\n\
  \ issn = {1433-3058},\n journaltitle = {Neural Computing and Applications},\n langid\
  \ = {english},\n number = {13},\n pages = {8811--8828},\n shortjournal = {Neural\
  \ Comput \\& Applic},\n title = {Detection, Localisation and Tracking of Pallets\
  \ Using Machine Learning Techniques and {{2D}} Range Data},\n url = {https://doi.org/10.1007/s00521-019-04352-0},\n\
  \ urldate = {2022-05-03},\n volume = {32}\n}\n"
summary: pallet recognition and tracking using only an onboard laser rangefinder
abstract:
  'The problem of autonomous transportation in industrial scenarios is receiving
  a renewed interest due to the way it can revolutionise internal logistics, especially
  in unstructured environments. This paper presents a novel architecture allowing
  a robot to detect, localise, and track (possibly multiple) pallets using machine
  learning techniques based on an on-board 2D laser rangefinder only. The architecture
  is composed of two main components: the first stage is a pallet detector employing
  a Faster Region-Based Convolutional Neural Network (Faster R-CNN) detector cascaded
  with a CNN-based classifier; the second stage is a Kalman filter for localising
  and tracking detected pallets, which we also use to defer commitment to a pallet
  detected in the first stage until sufficient confidence has been acquired via a
  sequential data acquisition process. For fine-tuning the CNNs, the architecture
  has been systematically evaluated using a real-world dataset containing 340 labelled
  2D scans, which have been made freely available in an online repository. Detection
  performance has been assessed on the basis of the average accuracy over k-fold cross-validation,
  and it scored 99.58\% in our tests. Concerning pallet localisation and tracking,
  experiments have been performed in a scenario where the robot is approaching the
  pallet to fork. Although data have been originally acquired by considering only
  one pallet as per specification of the use case we consider, artificial data have
  been generated as well to mimic the presence of multiple pallets in the robot workspace.
  Our experimental results confirm that the system is capable of identifying, localising
  and tracking pallets with a high success rate while being robust to false positives.'
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
