a = []
b = []
a = [1,2,1]
f = open("out.txt","w")
for i in range(2,2017):
    b.append(1);
    for j in range(1,i+1):
        b.append(a[j] + a[j-1])
    b.append(1);
    a = b
    b = []
for i in a:
    f.write(str(i) + " ")