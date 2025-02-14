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




cd $P

./src/google-apps/art-calendarium
./src/google-apps/artist-join-form
./src/google-apps/artistical-colective
./src/google-apps/artistical-colective/g-drive
./src/google-apps/artistical-colective/g-tables
./src/google-apps/gallery-exhibition
./src/google-apps/mailer-controller
./src/google-apps/slider-tool
./src/google-apps/web-visitcart