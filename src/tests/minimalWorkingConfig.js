module.exports = {
    "minimalWorkingConfig": {
        "version": "1.0.15",
        "name": "Testing",
        "description": "This config is used for testing",
        "datasets": [],
        "initStrategy": "auto",
        "coordinationSpace": {
            "dataset": {
                "A": "iss"
            }
        },
        "layout": [
            {
                "component": "description",
                "coordinationScopes": {
                    "dataset": "A"
                },
                "props": { "description": "this is a test component" },
                "x": 0,
                "y": 0,
                "w": 12,
                "h": 12
            }
        ]
    }
}
