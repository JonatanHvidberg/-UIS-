import random 

class person:
  def __init__(self,fname,sname,cpr):
    self.first_name = fname
    self.surname = sname
    self.cpr = cpr
  def print_person(self):
    print(f"insert into patients values('{self.first_name}', '{self.surname}', '{self.cpr}')")

women = list()
with open("girls.txt") as txt:
  for l in txt.readlines():
    if len(l) > 2:
      women.append(l.replace("\n",""))

men = list()
with open("boys.txt") as txt:
  for l in txt.readlines():
    if len(l) > 2:
      men.append(l.replace("\n",""))

snames = list()
with open("surnames.txt") as txt:
  for l in txt.readlines():
    if len(l) > 2:
      snames.append(l.replace("\n",""))



def create_cpr_number(gender):
  cpr = random.randrange(1000,9999)
  if gender == 'male' and cpr%2 == 0:
    cpr -= 1
  elif gender == 'female' and cpr%2 != 0:
    cpr -= 1
  
  day = str(random.randrange(1,30))
  if len(day) != 2:
    day = "0"+day
  
  month = str(random.randrange(1,12))
  if len(month) != 2:
    month = '0'+ month
  
  year = str(random.randrange(0,99))
  if len(year) != 2:
    year = '0'+ year
  
  return day+month+year+str(cpr)



def make_person(gender,first_names,surnames):
  cpr = create_cpr_number(gender)
  fname = random.choice(first_names) 
  sname = random.choice(surnames)
  return person(fname,sname,cpr)


persons_male = list()
persons_female = list()

for i in range(0,10):
  persons_male.append(make_person('male',men,snames))
for i in range(0,10):
  persons_female.append(make_person('female',women,snames))

p = persons_female + persons_male

for i in p:
  i.print_person()
