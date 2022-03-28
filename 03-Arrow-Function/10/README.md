ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

step 1: convert birthday into how many days remain
> remain

step 2: add each each year +365, every leap year +366
> years

step 3: take total - remain

loop

##Month
if even = 30
if odd = 31
leapFeb = 29
Feb = 28