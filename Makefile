D := ./dev-tools
Y := ./dev-tools/gaspi.yaml
G := ./src/google-apps/*
x := $(pwd)


recreate:
	pip install pyyaml
	python3 $D/pip-install-by-gaspi.py
	pip freeze > requirements.txt




init:
	python3 -m venv venv
	source ./venv/bin/activate
	pip install pip
	pip install -r ./requirements.txt

gaspi:
	find $G -type d -exec echo {} \;



ttystory:
	history > ~/ttystory-$(date +%s)-large-sesion.txt
