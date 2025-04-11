import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).parent.parent
sys.path.append(ROOT.as_posix())
DATA = ROOT / "_data"
POSTS = ROOT / "_posts"

from utils import load_yaml, save_yaml  # noqa: E402

tags = load_yaml(DATA / "tags.yml")


def convert_categories(paper_tags):
    categories = {}
    for category, mapping in tags.items():
        category_tags = [c.strip() for c in paper_tags.split(",")]
        categories[category] = [
            mapping.get(i, "") for i in category_tags if i in mapping.keys()
        ]
    return categories


def load_papers():
    posts = [f.read_text() for f in POSTS.glob("*.md")]
    data = []
    for post in posts:
        match = re.search(r"---\n(.*?)\n---", post, re.DOTALL)
        if match:
            metadata = match.group(1)
            metadata = yaml.safe_load(metadata)
            del metadata["layout"]
            categories = convert_categories(metadata["tags"])
            del metadata["tags"]
            data.append({**metadata, **categories})
    return data


def main():
    data = load_papers()
    save_yaml(DATA / "paper_details.yml", sorted(data, key=lambda x: x["id"]))
    return


if __name__ == "__main__":
    main()
