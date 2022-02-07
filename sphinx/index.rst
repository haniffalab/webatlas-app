|Tests| |Sphinx| |Coverage| |Python| |DOI|
 
.. |Tests| image:: https://github.com/haniffalab/sci-adifa/actions/workflows/test-coverage.yml/badge.svg
   :target: https://github.com/haniffalab/sci-adifa/actions/workflows/test-coverage.yml
.. |Sphinx| image:: https://github.com/haniffalab/sci-adifa/actions/workflows/sphinx-build.yml/badge.svg
   :target: https://github.com/haniffalab/sci-adifa/actions/workflows/sphinx-build.yml
.. |Coverage| image:: https://codecov.io/gh/haniffalab/sci-adifa/branch/main/graph/badge.svg?token=SM1J6FVZ5C
   :target: https://codecov.io/gh/haniffalab/sci-adifa
.. |Python| image:: https://img.shields.io/badge/python-3.8-blue
   :target: https://python.org
.. |DOI| image:: https://zenodo.org/badge/DOI/10.5281/zenodo.5824895.svg
   :target: https://doi.org/10.5281/zenodo.5824895

.. raw:: html

    <h2>SINGLE CELL INSIGHTS</h2>

Adifa - Annotated Data in Flask App
===================================

Adifa is a framework for visualising single-cell gene expression data in a web browser. 
It is built on `Flask`_, a micro web framework, and ingests `Annotated Data`_ objects 
in the `.h5ad` file format. It includes dimensionality reduction visualisation, heatmaps 
and dotplots, with the ability to explore gene expression and disease markers. The Python-
based implementation and usage of the `deck.gl`_ framework allows efficient handling of 
datasets up to one million cells.

Discuss usage on `Discourse`_. Read the `documentation`_. If you’d like to contribute by 
opening an issue or creating a pull request, please take a look at our `contributing guide`_. 
If Adifa is useful for your research, consider :ref:`citing the software <citing>`.

.. _Discourse: https://discourse.group/
.. _documentation: https://haniffalab.github.io/sci-adifa
.. _contributing guide: https://github.com/haniffalab/sci-adifa/blob/master/CONTRIBUTING.md
.. _Flask: https://flask.palletsprojects.com/
.. _Annotated Data: https://anndata.readthedocs.io/
.. _deck.gl: https://deck.gl/

.. toctree::
   :maxdepth: 2
   :caption: Documentation
   :glob:

   overview
   installation
   configuration
   deployment
   pipelines
   citing
   modules
   
Search
------

* :ref:`modindex`
* :ref:`search`

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Project Links
  
   Source Code <https://github.com/haniffalab/adifa>
   Issue Tracker <https://github.com/haniffalab/adifa/issues>
   Website <https://haniffalab.com/>
   Twitter <https://twitter.com/haniffalab>
