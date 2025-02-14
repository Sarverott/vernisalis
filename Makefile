
init:
	python3 -m venv venv
	source ./venv/bin/activate
	pip install pip
	pip install -r ./requirements.txt

gapsi:
	find ./src/google-apps/* -type d -exec sh ./dev-tools/create-gapsi-file.sh {} \;

