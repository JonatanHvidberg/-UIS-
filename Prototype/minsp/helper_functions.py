#helper functions

from matplotlib.figure import Figure
import matplotlib.pyplot as plt
from datetime import datetime
import os


"""
Helper function to print out debug statements in the terminal
"""
def print_debug(string):
	print("\n\nDebug -->")
	print(string)
	print("<--Debug end\n\n")


"""
Helper function to unpack a tuple from an sql querie
"""
def unpack(to_unpack):
    l = ['']
    if not to_unpack:
    	return l
    for i in to_unpack:
        l.append(i[0])
    return l


"""
Creates an unique filename for a graph 
"""
def create_filename(selected, cpr):
    now = datetime.now()
    now = now.strftime("%Y-%m-%d_%H:%M:%S")
    base = "/static/images/"
    return base + selected+"_"+str(cpr)+"_"+now+".png"


"""
Creates a figure of a graph, based on the given input
"""
def create_fig(selected, res, cpr):
    fig = Figure()
    dates = list()
    values = list()
    if not res:
    	return ""
    for r in res:
        dates.append(r[0])
        values.append(r[1])
    axis = fig.add_subplot(1,1,1)
    axis.plot(dates, values)
    axis.plot(dates, values, 'ro')
    filename = create_filename(selected[0], cpr)
    try:
        os.mkdir("minsp/static/images")
    except FileExistsError:
        pass
    fig.savefig("minsp" + filename, format='png')
    return filename