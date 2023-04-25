module.exports = {
  "featureListLayout": {
    "version": "1.0.15",
    "name": "Testing",
    "description": "This config is used for testing",
    "datasets": [
      {
        "uid": "iss",
        "name": "iss",
        "files": [
          {
            "type": "raster",
            "fileType": "raster.json",
            "options": {
              "schemaVersion": "0.0.2",
              "images": [
                {
                  "name": "hindlimb-iss-raw",
                  "url": "https://hindlimb.cog.sanger.ac.uk/datasets/integrated-test/0.0.1/rotated/hindlimb-iss-rotated_90-raw.zarr",
                  "type": "zarr",
                  "metadata": {
                    "isBitmask": false,
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
                          "c01 dapi",
                          "c01 1_ch",
                          "c01 2_ch",
                          "c01 3_ch",
                          "c01 4_ch"
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
          },
          {
            "fileType": "obsFeatureMatrix.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "options": {
              "path": "X"
            }
          },
          {
            "fileType": "obsFeatureMatrix.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "options": {
              "path": "X",
              "featureFilterPath": "var/is_gene"
            }
          },
          {
            "fileType": "obsFeatureMatrix.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "options": {
              "path": "X",
              "featureFilterPath": "var/is_celltype"
            }
          },
          {
            "fileType": "obsLocations.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "options": {
              "path": "obsm/spatial"
            }
          },
          {
            "fileType": "obsSets.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "options": [
              {
                "name": "CellType",
                "path": "obs/celltype"
              }
            ]
          }
        ]
      }
    ],
    "initStrategy": "auto",
    "coordinationSpace": {
      "dataset": {
        "A": "iss"
      }
    },
    "layout": [
      {
        "component": "featureList",
        "coordinationScopes": {
          "dataset": "A"
        },
        "x": 0,
        "y": 0,
        "w": 12,
        "h": 12
      }
    ]
  }
}
