const load_paper_table = (container_id, data) => {
  let tabledata = data.map((row) => {
    return {
      ...row,
      title: `${row.title}<div class='tabulator-authors'>by ${row.authors}</div>`,
      Application: row.Application?.map(chip2html).join("<br>"),
      "Approach Type": row["Approach Type"]?.map(chip2html).join("<br>"),
      "CV Tasks": row["CV Tasks"]?.map(chip2html).join("<br>"),
      //   authors: row.authors.split(",").join("\n"),
      Objects: row.Objects?.map(chip2html).join("<br>"),
      //   venue: row.venue?.replace(/{|}/g, ""),
      urls: { id: row.id, ...row.urls },
    };
  });

  //initialize table
  var table = new Tabulator(container_id, {
    data: tabledata,
    pagination: true, //enable pagination
    paginationSize: 12, //optional parameter to request a certain number of rows per page
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    responsiveLayoutCollapseStartOpen: false,
    initialSort: [{ column: "year", dir: "desc" }],
    columnDefaults: {
      tooltip: true,
    },

    columns: [
      {
        formatter: "responsiveCollapse",
        width: "3%",
        minWidth: 40,
        hozAlign: "center",
        resizable: false,
        headerSort: false,
        responsive: 0,
      },
      {
        title: "Title and Authors",
        field: "title",
        sorter: "string",
        formatter: "html",
        width: "42%",
        widthGrow: 1,
        minWidth: 200,
        headerFilter: true,
        cssClass: "tabulator-wrap",
        responsive: 1,
      },
      {
        title: "Year",
        field: "year",
        sorter: "numeric",
        width: "7%",
        minWidth: 70,
        headerFilter: true,
        cssClass: "tabulator-wrap",
        responsive: 2,
      },
      {
        title: "Application",
        field: "Application",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 3,
      },
      {
        title: "Approach",
        field: "Approach Type",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 4,
      },
      {
        title: "CV Tasks",
        field: "CV Tasks",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 5,
      },
      {
        title: "Objects",
        field: "Objects",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 6,
      },
      {
        title: "Authors",
        field: "authors",
        sorter: "string",
        width: "100%",
        responsive: 7,
      },
      {
        title: "Venue",
        field: "venue",
        sorter: "string",
        width: "100%",
        responsive: 8,
      },
      {
        title: "Links",
        field: "urls",
        sorter: "string",
        width: "100%",
        responsive: 9,
        // formatter: "string",
        formatter: link_formatter,
      },
      {
        title: "Summary",
        field: "summary",
        sorter: "string",
        width: "100%",
        responsive: 10,
      },
      {
        title: "Abstract",
        field: "abstract",
        sorter: "string",
        width: "100%",
        responsive: 11,
      },
    ],
  });
};

function link_formatter(cell, formatterParams, onRendered) {
  if (cell.getValue() === null || cell.getValue() === undefined) {
    return "";
  }
  const template =
    "<a href='LINK' target='_blank'><span style='margin-right: 10px'><i class='bi bi-ICON'></i>&nbsp;NAME</span></a>";
  const mappings = {
    id: { icon: "search", name: "Details/Edit" },
    paper: { icon: "file-text", name: "Paper" },
    project: { icon: "globe", name: "Project Website" },
    arxiv: { icon: "file-earmark-arrow-down", name: "arXiv" },
    code: { icon: "github", name: "Code" },
    dataset: { icon: "images", name: "Data" },
    venue: { icon: "globe-europe-africa", name: "Venue" },
  };
  const items = cell.getValue();
  let links = "";
  for (const item in items) {
    if (items[item] !== null && items[item] !== "") {
      let link = template
        .replace("LINK", items[item])
        .replace("ICON", mappings[item]["icon"])
        .replace("NAME", mappings[item]["name"]);

      if (item == "id") {
        link = link.replace(" target='_blank'", "");
      }
      links += link;
    }
  }
  return links;
}

function chip2html(element) {
  return `<div class='tabulator-chip tabulator-chip-${element
    .replaceAll(" ", "-")
    .replaceAll("/", "-")
    .toLowerCase()}'>${element}</div>`;
}

const load_dataset_table = (container_id, data) => {
  const dataset_data = data.filter(
    (item) => item.dataset.name != "" || item.urls.dataset != ""
  );
  let tabledata = dataset_data.map((row) => {
    return {
      ...row,
      title: `${row.title}<div class='tabulator-authors'>by ${row.authors}</div>`,
      Application: row.Application?.map(chip2html).join("<br>"),
      "CV Tasks": row["CV Tasks"]?.map(chip2html).join("<br>"),
      Objects: row.Objects?.map(chip2html).join("<br>"),
      urls: { id: row.id, ...row.urls },
      description: row.dataset.description,
      name: row.dataset.name,
    };
  });

  //initialize table
  var table = new Tabulator(container_id, {
    data: tabledata,
    pagination: true, //enable pagination
    paginationSize: 12, //optional parameter to request a certain number of rows per page
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    responsiveLayoutCollapseStartOpen: false,
    initialSort: [{ column: "year", dir: "desc" }],
    columnDefaults: {
      tooltip: true,
    },

    columns: [
      {
        formatter: "responsiveCollapse",
        width: "3%",
        minWidth: 40,
        hozAlign: "center",
        resizable: false,
        headerSort: false,
        responsive: 0,
      },
      {
        title: "Title and Authors",
        field: "title",
        sorter: "string",
        formatter: "html",
        width: "42%",
        widthGrow: 1,
        minWidth: 200,
        headerFilter: true,
        cssClass: "tabulator-wrap",
        responsive: 1,
      },
      {
        title: "Year",
        field: "year",
        sorter: "numeric",
        width: "7%",
        minWidth: 70,
        headerFilter: true,
        cssClass: "tabulator-wrap",
        responsive: 2,
      },
      {
        title: "Dataset Name",
        field: "name",
        sorter: "string",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        responsive: 3,
      },
      {
        title: "Application",
        field: "Application",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 4,
      },
      {
        title: "CV Tasks",
        field: "CV Tasks",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 5,
      },
      {
        title: "Objects",
        field: "Objects",
        sorter: "string",
        formatter: "html",
        width: "12%",
        minWidth: 130,
        headerFilter: true,
        cssClass: "tabulator-chips",
        responsive: 6,
      },
      {
        title: "Authors",
        field: "authors",
        sorter: "string",
        width: "100%",
        responsive: 7,
      },
      {
        title: "Venue",
        field: "venue",
        sorter: "string",
        width: "100%",
        responsive: 8,
      },
      {
        title: "Links",
        field: "urls",
        sorter: "string",
        width: "100%",
        responsive: 9,
        // formatter: "string",
        formatter: link_formatter,
      },
      {
        title: "Dataset Description",
        field: "description",
        sorter: "string",
        width: "100%",
        responsive: 10,
      },
      {
        title: "Paper Summary",
        field: "summary",
        sorter: "string",
        width: "100%",
        responsive: 10,
      },
    ],
  });
};
