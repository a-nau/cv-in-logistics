---
layout: page
title: Contribute
---

Contributions are very welcome!

To contribute you can use one of the following ways:

- **Pull Request** (preferred): update the relevant files as described below and make a pull request to the repository.
- **Github Issue**: gather the relevant information as described below and create an issue, in which you paste the relevant information. Please always provide the full information for the entry you want to update.
- **Email**: send the updated information via email to [Alexander Naumann](https://www.fzi.de/team/alexander-naumann/). As in the case of opening issue, please provide the full information.

## Add a new entry

If you want to add a new paper follow these steps:

**Create a new file**

- Create a file in the `_posts` folder with syntax `YYYY-MM-DD-paperid.md`
  - use `YYYY-01-01` if no specific publication date is available
  - `paperid` must coincide with the `id` defined in the subsequent step and should follow `bibtex` ID syntax

**Add relevant paper data**

- Copy the exemplary entry below (or from [here](https://github.com/a-nau/cv-in-logistics/blob/main/_posts/2023-04-18-naumannParcel3DShapeReconstruction2023.md)) into the created `YYYY-MM-DD-paperid.md` and adjust or delete the respective information:
  - `layout` is needed by `jekyll`, do not change it
  - `id`, `authors`, `year`, `title`, `venue` and `tags` together are the minimal necessary information you need to fill out

```yaml
---
layout: post
id: naumannParcel3DShapeReconstruction2023
authors: Alexander Naumann, ...
year: 2023
title: "Parcel3D: Shape Reconstruction from Single RGB Images..."
venue: CVPR workshop VISION
tags: c01,d01,d51,d03,m02,a08,a04,t01,t06,t07
urls:
  paper: ""
  project: https://a-nau.github.io/parcel3d/
  arxiv: https://doi.org/10.48550/arXiv.2304.08994
  code: ""
  dataset: ""
  venue: ""
dataset:
  name: Parcel3D
  comment: Publicly available soon
  description: Synthetic dataset of parcel images
bibtex: |
  @inproceedings{naumannParcel3DShapeReconstruction2023,
      title        = {Parcel3D: ...},
      author       = {Naumann, Alexander and ...},
      booktitle    = {CVPRW},
      date         = 2023
  }
summary: 3D shape reconstruction of potentially damaged parcels for damage and tampering detection in transportation logistics and warehousing
abstract: We focus on enabling damage and tampering detection in logistics and tackle the problem of 3D shape reconstruction of potentially damaged parcels. As input we utilize single RGB images, ...
---
```

Further explanations

- `tags`: a comma-separate list of all categories that apply to the work. See the mapping on the [categorization page](categorization) or the [tags.yml](https://github.com/a-nau/cv-in-logistics/blob/main/_data/tags.yml) for the full list
- `summary`: contains a short 2 to 3 sentence summary of the content of the paper. Note, that when the abstract is part of the Bibtex entry, we provide the full abstract as well. This summary should be much shorter.
- `bibtex`:
  - create a Bibtex entry containing the important information for citing the work
  - verify that your entry is valid by checking it [here](https://flamingtempura.github.io/bibtex-tidy/index.html)
- Verify if the `yaml` formatting is correct by pasting the contents between `---` into a [yaml linter](https://www.yamllint.com/)

## Update an entry

if the work is already part of this overview and information is missing, not precise or even misleading, we would highly appreciate your help to improve this!
To contribute, you can follow these steps

- locate the paper in the `_posts` folder
- update the relevant data as described above
