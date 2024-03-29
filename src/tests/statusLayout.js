module.exports = {
  "statusLayout": {
    "version": "1.0.15",
    "name": "Lower limb - scRNAseq & ISS",
    "description": "",
    "datasets": [
      {
        "uid": "iss",
        "name": "iss",
        "files": [
          {
            "type": "raster",
            "fileType": "raster.json",
            "coordinationValues": {
              "obsType": "cell",
              "featureType": "combined"
            },
            "options": {
              "renderLayers": [
                "hindlimb-iss-raw",
                "hindlimb-iss-label"
              ],
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
                },
                {
                  "name": "hindlimb-iss-label",
                  "url": "https://hindlimb.cog.sanger.ac.uk/datasets/integrated-test/0.0.1/rotated/hindlimb-iss-rotated_90-label.zarr",
                  "type": "zarr",
                  "metadata": {
                    "isBitmask": true,
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
                          "Labels"
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
            "coordinationValues": {
              "obsType": "cell",
              "featureType": "combined",
              "featureValueType": "expression"
            },
            "options": {
              "path": "X"
            }
          },
          {
            "fileType": "obsFeatureMatrix.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "coordinationValues": {
              "obsType": "cell",
              "featureType": "gene",
              "featureValueType": "expression"
            },
            "options": {
              "path": "X",
              "featureFilterPath": "var/is_gene"
            }
          },
          {
            "fileType": "obsFeatureMatrix.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "coordinationValues": {
              "obsType": "cell",
              "featureType": "celltype",
              "featureValueType": "abundance"
            },
            "options": {
              "path": "X",
              "featureFilterPath": "var/is_celltype"
            }
          },
          {
            "fileType": "obsLocations.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "coordinationValues": {
              "obsType": "cell"
            },
            "options": {
              "path": "obsm/spatial"
            }
          },
          {
            "fileType": "obsSets.anndata.zarr",
            "url": "https://hindlimb.cog.sanger.ac.uk/datasets/20230412_multimodal/integrated/0.0.1/hindlimb-iss-integrated-rotated_90-anndata.zarr",
            "coordinationValues": {
              "obsType": "cell"
            },
            "options": [{
              "name": "CellType",
              "path": "obs/celltype"
            }]
          }
        ]
      }
    ],
    "initStrategy": "auto",
    "coordinationSpace": {},
    "layout": [
      {
        "component": "status",
        "x": 0,
        "y": 9,
        "w": 2,
        "h": 2
      }
    ]
  }
}