FROM mcr.microsoft.com/devcontainers/jekyll:0-bullseye

RUN apt-get update
RUN apt-get install -y python3-pip

RUN pip3 install pandas black pyyaml bibtexparser ipykernel jinja2

EXPOSE 4000