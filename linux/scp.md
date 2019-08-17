#### scp 远程拷贝 ####

> 命令格式

`
    scp [参数] [原地址] [目标地址]
`

> Example

- 从本地上传文件到远程

`
scp hello.go root@192.168.33.10:/home/goStudy
`

- 从远程下载文件到本地

`
scp root@192.168.33.10:/home/goStudy/hello.go .
`

- 从本地上传文件夹到远程

`
scp -r go-wan root@192.168.33.10:/home/goStudy
`
      
- 从远程下载文件夹到本地

`
scp -r root@192.168.33.10:/home/goStudy .
`
      
- 有设置指定端口的

`
scp -P [port]
`