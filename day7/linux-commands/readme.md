# BASIC LINUX COMMAND

### 1 Create a directory "exercise" inside your home directory and create nested(dir1/dir2/dir3) directory structure inside "exercise" with single command.


``` mkdir -p exerscise/dir1/dir2/dir3 ```

![image](https://github.com/user-attachments/assets/d1aa7fa6-cb61-4720-953a-c44c11024366)


### 2 Create two empty files inside dir2 directory: emptyFile1, emptyFile2 in single command 
```touch emptyFile1 emptyFile2```

![image](https://github.com/user-attachments/assets/65589945-dc6e-472f-bbee-832c0b6193a7)

### 3 Create one file file1.txt containing text "hello world" and save it.
``` cat > file1.txt ```

![image](https://github.com/user-attachments/assets/fd6ab27c-b9ad-48fe-861b-f329c41bbdec)

### 4 Find a "passwd" file using find command inside /etc. copy this files as passwd_copy and then rename this file as passwd_backup.

``` sudo find /etc -name "passwd" -exec cp {} /etc/passwd_copy \; -exec mv /etc/passwd_copy /etc/passwd_backup \```

![image](https://github.com/user-attachments/assets/3321f952-1fb2-4359-995f-b2d9e0e3d2a0)

### 5 Try reading passwd_backup file in multiple tools: less,more,cat,strings etc and find the difference in their usage.
##### cat command to view all content
```cat /etc/passwd_backup ```

![image](https://github.com/user-attachments/assets/7462ac8d-f510-4852-b55e-b502ea81b9da)

##### less command to scroll and search effectively

``` less /etc/passwd_backup ```

![image](https://github.com/user-attachments/assets/d9c6917e-0143-4537-a976-9220e308b1e7)


#####  More page by page Viewing

``` more /etc/passwd_backup ```

![image](https://github.com/user-attachments/assets/c577fc0b-fae9-4a5c-a962-30487449b505)

##### Sting Readable text (only)

``` strings /etc/passwd_backup ```

![image](https://github.com/user-attachments/assets/658b12ee-01fb-4d3c-af66-4636299a3873)


### 6 Find out the number of line in password_backup containing "/bin/false".

``` grep -c "/bin/false" /etc/passwd_backup ```
![image](https://github.com/user-attachments/assets/e1ccdd38-ffc5-4823-acfa-358be013e909)

### 7 Get the first 5 lines of a file “password_backup” and  Redirect the output of the above commands into file "output". Also, get the lines 6-10 from the above file.

``` head -n 5 /etc/passwd_backup > output``` 
``` tail -n +6 /etc/passwd_backup | head -n 5 >> output ```
``` cat output ```

![image](https://github.com/user-attachments/assets/815196d1-fe2a-4d04-8f86-d8dd698c7357)


### 8 Create a "test" user,create its password and find out its uid and gid.

``` sudo passwd test ```
``` id test ```
``` getent passwd test ```

![image](https://github.com/user-attachments/assets/9023cfe4-4cb0-4ff6-a220-0ea143d1efdf)


### 9 Change the timestamp of  emptyFile1, emptyFile2 which are exist in dir2

```touch -t 202502031630 dir2/emptyFile1 dir2/emptyFile2```

![image](https://github.com/user-attachments/assets/fe8d99c7-8a9c-4acc-ae58-3f46cdd42ea0)

### 11  Create alias with your name so that it creates a file as "/tmp/aliastesting".

``` alias shubham='touch /tmp/aliastesting' ``` <br>
``` shubham ``` <br>
``` ls -l /tmp/aliastesting ```
![image](https://github.com/user-attachments/assets/bb922d3f-141e-4fed-9516-85134b25a58b)

### 13 install zip
`sudo apt instal zip`
![image](https://github.com/user-attachments/assets/a7370cd8-8576-4bdc-9d3e-e629e19266d8)


### 14 Compress "output" and "password_backup" files into a tar ball. List the files present inside the tar created.
`tar -cvf tarball.tar /home/shubham/Desktop/output /home/shubham/Desktop/password_backup`

### 15 
