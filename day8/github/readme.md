Configure SSH key in github account.
```ssh-keygen -t rsa -b 4096 -C "eklotaravan@gmail.com"```

![image](https://github.com/user-attachments/assets/509a2c39-92b9-4097-83ff-36c9c7def23c)

Create a repository on github account.

`` GitHub → Your Profile → Repositories → New. ``

Clone the above repository on your local from github. 

``` git clone https://github.com/Shubhamindev/CK-Training.git ``` <br>
```cd CK-Training```

Create a new file, say test.txt, in main/master branch. Make some changes to this file and commit the changes.

```echo "Hello, this is a test file." > test.txt```<br>
```git add test.txt```<br>
```git commit -m "Added test.txt"```<br>
```git push origin main```<br>

create branch f1 and f2<br>
```git checkout -b f1```<br>
```git checkout main```<br>
```git checkout -b f2```<br>

How can you resolve a merge conflict in Git, provide an example.<br>
file in f1<br>
```git checkout f1```<br>
```echo "This is a change from f1 branch." >> test.txt```<br>
```git commit -am "Updated test.txt in f1"```<br>

same in f2<br>
```git checkout f2```<br>
`echo "This is a conflicting change from f2 branch." >> test.txt`<br>
`git commit -am "Updated test.txt in f2"`<br>

conflict come when i try to merge<br>
```git checkout f2```<br>
```git merge f1```<br>

then i manually resolve the file like which content i want<br>
```git add test.txt```<br>
```git commit```<br>

 Show How Divergence Occurs in a Branch<br>
 like i make some features in f1 and f2<br>
 and then i merge them then this is new merge<br>
 `git checkout -b feature-branch`<br>
`echo "Feature branch update" >> test.txt`<br>
`git commit -am "Updated test.txt in feature-branch"`<br>

then switch <br>
`git checkout main`<br>
`echo "Main branch update" >> test.txt`<br>
`git commit -am "Updated test.txt in main"`<br>

merge ib main branch 
``` git merge feature-branch ```








 
