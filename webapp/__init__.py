from flask import Flask
import os

app = Flask(__name__)

## Load the file specified by the APP_CONFIG_FILE environment variable
## Variables defined here will override those in the default configuration
if 'APP_CONFIG_FILE' in os.environ:
    app.config.from_envvar('APP_CONFIG_FILE')

import webapp.views
