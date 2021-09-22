import numpy as np
import datetime
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib.cbook as cbook


dates = ["01/24/2020", "01/25/2020", "01/29/2020", "02/02/2020","02/10/2020","02/15/2020"]
x_values = [datetime.datetime.strptime(d,"%m/%d/%Y").date() for d in dates]

y_values = [7, 5.4, 3.3, 4.5, 6.5,5.4]

ax = plt.gca()
formatter = mdates.DateFormatter("%d/%m")
ax.xaxis.set_major_formatter(formatter)
locator1 = mdates.DayLocator()
locator2 = mdates.MonthLocator()
ax.xaxis.set_major_locator(locator1)
#ax.xaxis.set_minor_locator(locator1)
plt.plot(x_values, y_values,'b*')
plt.plot(x_values, y_values)
plt.ylabel('Blodsukker mmol/l')
#plt.xlabel('dato')
ax.grid(True)
plt.show()