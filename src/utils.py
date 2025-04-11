import csv

import yaml


def load_csv(path, key=None):
    with open(path, "r", newline="", encoding="utf-8") as file:
        dict_reader = csv.DictReader(file)
        data = [dict(r) for r in dict_reader]
    if key:
        data = {line[key]: line for line in data}
    return data


def save_csv(path, data, key_order=None):
    key_order = (
        list(set(sum([list(d.keys()) for d in data], [])))
        if key_order is None
        else key_order
    )  # get all keys
    with open(path, "w", newline="", encoding="utf-8") as file:
        dict_writer = csv.DictWriter(file, key_order)
        dict_writer.writeheader()
        dict_writer.writerows(data)


def load_yaml(path, key=None):
    with open(path, encoding="utf-8") as f:
        data = yaml.load(f, Loader=yaml.SafeLoader)
    if key:
        data = {line[key]: line for line in data}
    return data


def save_yaml(path, data):
    with open(path, "w", encoding="utf-8") as file:
        yaml.safe_dump(
            data,
            file,
            sort_keys=False,
            allow_unicode=True,
        )
