---
layout: post
id: naumannParcel3DShapeReconstruction2023
authors: Alexander Naumann, Felix Hertlein, Laura Dörr, Kai Furmans
year: 2023
title:
  "Parcel3D: Shape Reconstruction from Single RGB Images for Applications in
  Transportation Logistics"
venue: IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops
tags: c01,d01,d51,d03,m02,a08,a04,t01,t06,t07
urls:
  paper: https://openaccess.thecvf.com/content/CVPR2023W/VISION/html/Naumann_Parcel3D_Shape_Reconstruction_From_Single_RGB_Images_for_Applications_in_CVPRW_2023_paper.html
  project: https://a-nau.github.io/parcel3d/
  arxiv: https://doi.org/10.48550/arXiv.2304.08994
  code: https://github.com/a-nau/CubeRefine-R-CNN
  dataset: https://zenodo.org/record/8032204
  venue: https://vision-based-industrial-inspection.github.io/cvpr-2023/
dataset:
  name: Parcel3D
  comment: ""
  description:
    Synthetic dataset of intact and damaged parcel images (>13,000) with full 3D
    annotations that is suitable for applications in transportation logistics and
    warehousing
bibtex: |
  @inproceedings{naumannParcel3DShapeReconstruction2023,
        author    = {Naumann, Alexander and Hertlein, Felix and D\"orr, Laura and Furmans, Kai},
        title     = {Parcel3D: Shape Reconstruction From Single RGB Images for Applications in Transportation Logistics},
        booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
        month     = {June},
        year      = {2023},
        pages     = {4402-4412}
  }
summary:
  3D shape reconstruction of potentially damaged parcels for damage and tampering
  detection in transportation logistics and warehousing
abstract:
  We focus on enabling damage and tampering detection in logistics and tackle
  the problem of 3D shape reconstruction of potentially damaged parcels. As input
  we utilize single RGB images, which corresponds to use-cases where only simple handheld
  devices are available, e.g. for postmen during delivery or clients on delivery.
  We present a novel synthetic dataset, named Parcel3D, that is based on the Google
  Scanned Objects (GSO) dataset and consists of more than 13,000 images of parcels
  with full 3D annotations. The dataset contains intact, i.e. cuboid-shaped, parcels
  and damaged parcels, which were generated in simulations. We work towards detecting
  mishandling of parcels by presenting a novel architecture called CubeRefine R-CNN,
  which combines estimating a 3D bounding box with an iterative mesh refinement. We
  benchmark our approach on Parcel3D and an existing dataset of cuboid-shaped parcels
  in real-world scenarios. Our results show, that while training on Parcel3D enables
  transfer to the real world, enabling reliable deployment in real-world scenarios
  is still challenging. CubeRefine R-CNN yields competitive performance in terms of
  Mesh AP and is the only model that directly enables deformation assessment by 3D
  mesh comparison and tampering detection by comparing viewpoint invariant parcel
  side surface representations. Dataset and code are available at https://a-nau.github.io/parcel3d.
---

### Abstract

{{page.abstract}}

### Bibtex

```
{{page.bibtex}}
```
