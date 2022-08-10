module.exports = {
    "cellSetExpressionLayout": {
        "name": "ISS Human Brain Sample",
        "version": "1.0.0",
        "description": "",
        "public": true,
        "datasets": [
          {
            "uid": "iss-human-brain-advanced",
            "name": "iss-human-brain-advanced",
            "description": "In-situ Sequencing Human Brain Sample. Raster cell segmentation [bioformats2raw v0.2.6], with additional Vitessce components",
            "files": [
              {
                "type": "raster",
                "fileType": "raster.json",
                "options": {
                  "renderLayers": [
                    "Microscopy Image",
                    "Cells Segmentations"
                  ],
                  "schemaVersion": "0.0.2",
                  "images": [
                    {
                      "name": "Cells Segmentations",
                      "url": "https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.2.6",
                      "type": "zarr",
                      "metadata": {
                        "isBitmask": true,
                        "dimensions": [],
                        "isPyramid": true,
                        "transform": {
                          "translate": {
                            "y": 0,
                            "x": 0
                          },
                          "scale": 1
                        }
                      }
                    }
                    ]
                  }
                },
                {
                  "url": "https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cells.json",
                  "type": "cells",
                  "fileType": "cells.json"
                },
                {
                  "url": "https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cell-sets.json",
                  "type": "cell-sets",
                  "fileType": "cell-sets.json"
                },
                {
                  "url": "https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.clusters.json",
                  "type": "expression-matrix",
                  "fileType": "clusters.json"
                }
              ]
            }
          ],
          "initStrategy": "auto",
          "layout": [{
            "component": "cellSetExpression",
            "x": 7,
            "y": 8,
            "w": 3,
            "h": 4
          }]
        }
}