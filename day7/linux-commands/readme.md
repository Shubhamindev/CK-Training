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

