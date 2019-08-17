#### 网络 ####

> [mtr](http://einverne.github.io/post/2017/11/mtr-usage.html)

`
    mtr [host]
` 

> [host](https://man.linuxde.net/host)

```
	host [选项] domain
	
	选项列表
		-a：显示详细的DNS信息；
		-c<类型>：指定查询类型，默认值为“IN“；
		-C：查询指定主机的完整的SOA记录；
		-r：在查询域名时，不使用递归的查询方式；
		-t<类型>：指定查询的域名信息类型；
		-v：显示指令执行的详细信息；
		-w：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；
		-W<时间>：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；
		-4：使用IPv4；
		-6：使用IPv6.
```

> [telnet](https://www.cnblogs.com/peida/archive/2013/03/13/2956992.html)

`
	telnet [host] [port]
`

> [nslookup](https://man.linuxde.net/nslookup)

`
	nslookup domain [dns-server]
`
