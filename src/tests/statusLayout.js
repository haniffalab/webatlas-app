module.exports = {
    "statusLayout": {
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
                    "Microscopy Image"
                  ],
                  "schemaVersion": "0.0.2",
                  "images": [             
                    {
                      "name": "Microscopy Image",
                      "url": "https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0",
                      "type": "zarr",
                      "metadata": {
                        "dimensions": [
                          {
                            "field": "t",
                            "type": "quantitative",
                            "values": null
                          },
                          {
                            "field": "y",
                            "type": "quantitative",
                            "values": null
                          },
                          {
                            "field": "x",
                            "type": "quantitative",
                            "values": null
                          }
                        ],
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
                }
              ]
            }
          ],
          "initStrategy": "auto",
        "layout": [{
            "component": "status",
            "x": 0,
            "y": 9,
            "w": 2,
            "h": 2
        }]
    }
}