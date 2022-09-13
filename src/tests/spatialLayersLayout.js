module.exports = {
    "spatialLayersLayout": {
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
                            "field": "channel",
                            "type": "nominal",
                            "values": [
                              "c01 DAPI",
                              "c01 Alexa 488",
                              "c01 Atto 425",
                              "c01 Alexa 568",
                              "c01 Alexa 647",
                              "c02 DAPI",
                              "c02 Alexa 488",
                              "c02 Atto 425",
                              "c02 Alexa 568",
                              "c02 Alexa 647",
                              "c03 DAPI",
                              "c03 Alexa 488",
                              "c03 Atto 425",
                              "c03 Alexa 568",
                              "c03 Alexa 647",
                              "c04 DAPI",
                              "c04 Alexa 488",
                              "c04 Atto 425",
                              "c04 Alexa 568",
                              "c04 Alexa 647",
                              "c05 DAPI",
                              "c05 Alexa 488",
                              "c05 Atto 425",
                              "c05 Alexa 568",
                              "c05 Alexa 647",
                              "c06 DAPI",
                              "c06 Alexa 488",
                              "c06 Atto 425",
                              "c06 Alexa 568",
                              "c06 Alexa 647",
                              "c07 DAPI",
                              "c07 Alexa 488",
                              "c07 Atto 425",
                              "c07 Alexa 568",
                              "c07 Alexa 647"
                            ]
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
              "component": "layerController",
              "x": 0,
              "y": 2,
              "w": 2,
              "h": 8
          }]
        }
}