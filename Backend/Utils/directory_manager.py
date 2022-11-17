from sys import platform

def getDirectory(dir):
    resultStr = ""
    if platform == "win32":
        resultStr = dir.replace('/', '\\')
    else:
        resultStr = dir.replace('\\', '/')
    return resultStr