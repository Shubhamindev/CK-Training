#  Setup a java application using gradle

![Screenshot from 2025-02-07 16-16-34](https://github.com/user-attachments/assets/a6aad076-d250-43cb-9457-a8d09119f425)

# Modify it to apply the Java plugin and add a dependency for SQLLite.
## implementation group: 'org.xerial', name: 'sqlite-jdbc', version: '3.48.0.0'

![Screenshot from 2025-02-07 16-16-34](https://github.com/user-attachments/assets/ea7d0c21-6954-437b-b11c-3e8189505191)

# Compile the project

![Screenshot from 2025-02-07 16-19-37](https://github.com/user-attachments/assets/f2f28293-3882-4273-ae51-3e5950aa472f)

# Generate JAR

![Screenshot from 2025-02-07 16-28-01](https://github.com/user-attachments/assets/96611d09-6af1-4001-8d0c-4a6926896570)

# Create a custom gradle task ‘cleanBuild’ that run gradle clean, gradle build and gradle jar with the single command ‘gradle cleanBuild’

```
tasks.register('cleanBuild') {
    group = "build"
    description = "Runs clean, build, and jar in sequence."

    dependsOn 'clean', 'build', 'jar'
}
 ```
` gradle cleanBuild
 `
# Setup SonarQube on local and analyze the above project
![Screenshot from 2025-02-07 17-32-18](https://github.com/user-attachments/assets/539d17c0-f9e7-4e6b-b0fc-cb4a1de1fb37)
