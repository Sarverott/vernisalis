import os
import yaml
import subprocess

GAPPSI = None

def gapsiDir(currentPathline):
    result = __file__
    result = os.path.realpath(result)
    result = os.path.dirname(result)
    result = os.path.join(result, "..", currentPathline)
    return result


with open("./dev-tools/GASPI.yaml") as gaspi_file:
    GAPPSI = yaml.load(gaspi_file.read(), Loader=yaml.CLoader)

print("\t###")
print(subprocess.run(["clasp", "list", "--noShorten"]))
print("\t###")

for pathline in GAPPSI["google-apps"]:
    #print(subprocess.run(["clasp", "status"], cwd=gapsiDir(pathline)))
    ##subprocess.run(["clasp", "setting", "", "./"], cwd=gapsiDir(pathline))
    subprocess.run(["clasp", "setting", "rootDir", "./"], cwd=gapsiDir(pathline))
    subprocess.run(["clasp", "setting", "projectId", "vernisalis"], cwd=gapsiDir(pathline))

    print("\t###")
    print(subprocess.run(["clasp", "status"], cwd=gapsiDir(pathline)))
    print("\t###")
    subprocess.run(["clasp", "pull"], cwd=gapsiDir(pathline))
    subprocess.run(["clasp", "push"], cwd=gapsiDir(pathline))



#os.popen()