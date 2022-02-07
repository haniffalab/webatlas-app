Configuration
=============

Applications need some kind of configuration to toggle settings and define other such environment-specific things. Adifa handles the config like other Flask applications, with the `Config`_ class.

.. _Config: https://flask.palletsprojects.com/en/2.0.x/config/


Default Configuration
---------------------

The default configuration for Adifa is defined in the ``.env`` file in the `repository root`_, and contains the following values.

::

    SECRET_KEY = 'best-password-here'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///../instance/adifa.sqlite'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    API_VERSION = 1
    API_PREFIX = '/api'
    API_SERVER = '/'
    DATA_PATH = './instance/'

.. _repository root: https://github.com/haniffalab/sci-adifa/blob/main/.env

Overriding the Configuration
----------------------------

To override the deafult configuration you can either:

* use system environment variables (recommended for production)
* creating a file called ``config.py`` in your ``instance`` folder (recommended for development)

Using environment variables
^^^^^^^^^^^^^^^^^^^^^^^^^^^

To override indivisual values in the configuration pass or create a new system environment variable with the same name as the configuration value, 
and assign it the value that is needed. 

Using config.py
^^^^^^^^^^^^^^^

The instance folder was introduced in Flask 0.8, and is designed to not be under version control and be deployment specific. It’s the perfect place
to drop things that either change at runtime or configuration files. To override the configuration, create a new file called ``config.py`` in your
``instance`` folder. This file will not be placed under version control. Copy the contents from ``.env`` into your new ``config.py``, and update the 
values as needed.

Loading new datasets
--------------------

Data folder
^^^^^^^^^^^

Autodiscovery
^^^^^^^^^^^^^
