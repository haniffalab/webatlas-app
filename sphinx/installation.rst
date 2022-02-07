Installation
============


Prerequisites
-------------

Before you begin using Adifa, make sure you have installed the following libraries:

- Python (>=3.8)


Install
-------

**Be sure to use the same version of the code as the version of the docs
you're reading.** You probably want the latest tagged version, but the
default Git version is the main branch. 

::

    # clone the repository
    $ git clone git@github.com:haniffalab/sci-adifa.git
    $ cd sci-adifa

Create a virtualenv and activate it

::

    $ python -m venv venv
    $ . venv/bin/activate

Or on Windows cmd

::

    $ python -m venv venv
    $ venv\Scripts\activate.bat

Install Adifa and the requirements

::

    $ pip install -e .
    $ pip install -r requirements.txt


Run
---

::

    $ export FLASK_APP=adifa
    $ export FLASK_ENV=development
    $ flask init-db
    $ flask autodiscover
    $ flask run

Or on Windows cmd::

    > set FLASK_APP=adifa
    > set FLASK_ENV=development
    > flask init-db
    $ flask autodiscover
    > flask run

Open http://127.0.0.1:5000 in a browser.


Test
----

::

    $ pip install '.[test]'
    $ pip install pytest coverage
    $ pytest

Run with coverage report::

    $ coverage run -m pytest
    $ coverage report
    $ coverage html  # open htmlcov/index.html in a browser

